import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

import { postUser } from "../services/UserService";
export default function ModalAdd(props) {
  const { addUser } = props;
  const [show, setShow] = useState(false);
  const [Name, setName] = useState("");
  const [Job, setJob] = useState("");
  const handleSaveUser = async () => {
    let res = await postUser(Name, Job);
    if (res && res.id) {
      if (Name === "" || Job === "") {
        toast.error("Please fill in the blank");
        return;
      } else {
        addUser({ first_name: Name, id: res.id });
        toast.success("Save Successfully");
        setShow(false);
        setName("");
        setJob("");
      }
    } else {
      toast.error("Save Error");
    }
  };
  const handleShow = () => setShow(true);
  const handleCloseButton = () => setShow(false);
  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add new user
      </Button>

      <Modal show={show} onHide={handleSaveUser}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                value={Name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicJob">
              <Form.Label>Job: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Job"
                value={Job}
                onChange={(event) => {
                  setJob(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseButton}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
