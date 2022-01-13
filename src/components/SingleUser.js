import "./SingleUser.css";
const SingleUser = (props) => {
  return (
    <div className="single-user">
      <p>{`${props.name} (${props.age} years Old)`}</p>
    </div>
  );
};
export default SingleUser;
