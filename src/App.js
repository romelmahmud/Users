import UserForm from "./components/UserForm";
import UsersContainer from "./components/UsersContainer";
import "./App.css";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState([]);

  const newUserDataHander = (userInputData) => {
    setUserData((prevData) => {
      return [userInputData, ...prevData];
    });
  };
  console.log(userData);
  return (
    <div className="app">
      <UserForm onUsersData={newUserDataHander} />
      <UsersContainer userData={userData} />
    </div>
  );
}

export default App;
