import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import "./AddUser.css";

const AddUser = (props) => {
  const [newUser, setNewUser] = useState({
    username: "",
    age: "",
  });
  const [showModal, setShowModal] = useState({
    display: false,
    text: "",
  });

  const onUpdateUserName = (event) => {
    setNewUser((prevState) => {
      return { ...prevState, username: event.target.value };
    });
  };

  const onUpdateAge = (event) => {
    setNewUser((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };

  const validateUser = (user) => {
    if (user.username !== "" && user.age !== "" && !isNaN(parseInt(user.age))) {
      setShowModal({
        display: false,
        text: "",
      });
    } else {
      // Both are empty
      if (user.username === "" && user.age === "") {
        console.log("Both are empty");
        setShowModal({
          display: true,
          text: "Please enter a valid username and age (non-empty values).",
        });
      } else if (user.username === "") {
        // Username is empty
        console.log("Username is empty");
        setShowModal({
          display: true,
          text: "Please enter a valid age (> 0).",
        });
      } else {
        // Age is empty
        console.log("Age is empty");
        setShowModal({
          display: true,
          text: "Please enter a valid username (non-empty values).",
        });
      }
    }
    console.log("Validation End:", showModal);
  };

  const handleClose = () =>
    setShowModal({
      display: false,
      text: "",
    });

  const onSubmit = (event) => {
    event.preventDefault();
    validateUser(newUser);
    if (!showModal.display) {
      console.log(showModal.display);
      props.onAddingNewUser(newUser);
      setNewUser({
        username: "",
        age: "",
      });
    }
  };

  return (
    <div className="card">
      <form onSubmit={onSubmit}>
        <label for="uname">Username</label>
        <br />
        <input
          type="text"
          id="uname"
          name="uname"
          value={newUser.username}
          onChange={onUpdateUserName}
        />
        <br />
        <label for="age">Age (Years)</label>
        <br />
        <input
          type="text"
          id="age"
          name="age"
          value={newUser.age}
          onChange={onUpdateAge}
        />
        <br />
        <input type="submit" value="Add User" />
      </form>

      <Modal show={showModal.display} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{showModal.text}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddUser;
