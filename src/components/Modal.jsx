import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal-container">
      <div className="modal">
        <h1>{props.city}</h1>
        <img src={props.img} alt={props.img} />
        <p>Blah blah</p>
        <button onClick={props.close}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
