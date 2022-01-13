import UserForm from "./components/UserForm";
import UsersContainer from "./components/UsersContainer";
import InvalidModel from "./components/InvalidModel";
import "./App.css";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);
  const [showInvalidModel, setShowInvalidModel] = useState(false);

  const newUserDataHander = (userInputData) => {
    // console.log(userInputData);
    if (
      userInputData.age < 0 ||
      userInputData.userName === "" ||
      userInputData.age === ""
    ) {
      setShowInvalidModel(true);
    }
    setUserData((prevData) => {
      return [userInputData, ...prevData];
    });
  };
  // console.log(userData[0].userName);
  const closeModelHandler = () => {
    setShowInvalidModel(false);
  };

  return (
    <div className="app">
      {showInvalidModel && <InvalidModel onCloseModel={closeModelHandler} />}
      <UserForm onUsersData={newUserDataHander} />
      <UsersContainer userData={userData} />
    </div>
  );
}

export default App;
