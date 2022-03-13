import { useState } from "react";

const DisplayUsers = (props) => {
  const [myUser] = useState(props.username + " (" + props.age + " years old)");

  return (
    <input type="text" id="age" name="age" value={myUser} readOnly={true} />
  );
};

export default DisplayUsers;
