import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { UserService } from "../services/UserService";
import ReactPaginate from "react-paginate";
import ModalAdd from "./ModalAdd";

export default function TableUser(props) {
  const { data } = props;
  const [listUser, setListUser] = useState([]);
  const [totalUser, setTotalUser] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(async () => {
    getUser(1);
  }, []);
  const getUser = async (page) => {
    let res = await UserService(page);
    if (res && res.data ? res.data : []) {
      setTotalUser(res.total);
      setTotalPages(res.total_pages);
      setListUser(res.data);
    }
  };
  // let user = [data, ...listUser];
  // setListUser(user);
  console.log(data);
  const handlePageClick = (event) => {
    getUser(+event.selected + 1);
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                </tr>
              );
            })}
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
          />
        </tbody>
      </Table>
    </>
  );
}
