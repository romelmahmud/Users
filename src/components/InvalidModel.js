import "./InvalidModel.css";
import ModalContainer from "./ModalContainer";

const InvalidModel = (props) => {
  return (
    <>
      <ModalContainer onCloseModal={props.onCloseModel} />
      <div className="invalid-modal">
        <div className="modal-heading">
          <h2>Invalid Input</h2>
        </div>
        <div className="modal-text">
          <p>Please Enter Valid name and Age {">"} 0</p>
        </div>
        <div className="modal-btn">
          <button type="button" onClick={props.onCloseModel}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default InvalidModel;
