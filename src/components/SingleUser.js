import "./SingleUser.css";
const SingleUser = (props) => {
  if (props.name === "" || props.age === "" || props.age < 0)
    return <div></div>;

  return (
    <div className="single-user">
      <p>{`${props.name} (${props.age} years Old)`}</p>
    </div>
  );
};
export default SingleUser;
