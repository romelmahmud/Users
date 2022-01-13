import "./UserForm.css";

const UserForm = () => {
  return (
    <div className="user-form card">
      <form>
        <div>
          <label className="user-form__label">UserName</label>
          <input type="text" className="user-form__input"></input>
        </div>
        <div>
          <label className="user-form__label">Age</label>
          <input type="number" className="user-form__input"></input>
        </div>
        <div>
          <button type="submit">Add User</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
