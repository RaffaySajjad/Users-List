import { useState } from "react";
import AddUser from "./components/AddUser";
import DisplayUser from "./components/DisplayUsers";
import "./App.css";

function App() {
  const [myUsers, setMyUsers] = useState([]);
  const addNewUserHandler = (userObject) => {
    setMyUsers((prevState) => {
      return [...prevState, userObject];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <AddUser onAddingNewUser={addNewUserHandler} />
        <br />
        {myUsers.map((user, idx) => {
          return (
            <DisplayUser key={idx} username={user.username} age={user.age} />
          );
        })}
      </header>
    </div>
  );
}

export default App;
