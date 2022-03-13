import { useState } from "react";
import "./DisplayUsers.css";

const DisplayUsers = (props) => {
  const [myUser] = useState(props.username + " (" + props.age + " years old)");

  return (
    <div className="card-display">
      <input type="text" id="age" name="age" value={myUser} readOnly={true} />
    </div>
  );
};

export default DisplayUsers;
