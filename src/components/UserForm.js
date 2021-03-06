import { useState } from "react";

import "./UserForm.css";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  //   const [showInvalidModel, setShowInvalidModel] = useState(false);

  const nameInputHandler = (e) => {
    setUserName(e.target.value);
  };

  const ageInputHandler = (e) => {
    setUserAge(e.target.value);
  };

  const userFromHandler = (e) => {
    e.preventDefault();
    //  if (userAge < 0 || userName === "") {
    //    setShowInvalidModel(true);
    //  }
    const userData = {
      key: Math.random().toString(),
      userName: userName,
      age: userAge,
    };
    props.onUsersData(userData);

    setUserName("");
    setUserAge("");
  };
  //   {
  //     showInvalidModel && <InvalidModel />;
  //   }

  return (
    <div className="user-form card">
      {/* {!showInvalidModel && ( */}
      <form onSubmit={userFromHandler}>
        <div>
          <label className="user-form__label">UserName</label>
          <input
            type="text"
            className="user-form__input"
            onChange={nameInputHandler}
            value={userName}
          ></input>
        </div>
        <div>
          <label className="user-form__label">Age</label>
          <input
            type="number"
            className="user-form__input"
            onChange={ageInputHandler}
            value={userAge}
          ></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
      {/*  )} */}
    </div>
  );
};

export default UserForm;
