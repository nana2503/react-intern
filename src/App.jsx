import Container from "react-bootstrap/esm/Container";
import "./App.scss";
import Header from "./component/Header";
import TableUser from "./component/TableUser";
import ModalAdd from "./component/ModalAdd";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
function App() {
  const [data, setData] = useState({});
  const addUser = (item) => {
    setData(item);
  };
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 d-flex justify-content-between">
          <span>
            <b>List User: </b>
          </span>
          <ModalAdd addUser={addUser} data={data} />
        </div>
        <TableUser />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
