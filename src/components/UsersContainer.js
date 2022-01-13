import SingleUser from "./SingleUser";
import "./UsersContainer.css";

const UsersContainer = (props) => {
  if (props.userData.length === 0) {
    return (
      <div className="card">
        <p className="no-user-found">no User Found</p>
      </div>
    );
  }
  return (
    <div className="card">
      {props.userData.map((user) => (
        <SingleUser key={user.key} name={user.userName} age={user.age} />
      ))}
    </div>
  );
};

export default UsersContainer;
