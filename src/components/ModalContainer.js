import "./ModalContainer.css";

const ModalContainer = (props) => {
  return <div className="modal-container" onClick={props.onCloseModal}></div>;
};
export default ModalContainer;
