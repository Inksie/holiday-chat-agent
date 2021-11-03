import "./Modal.css";
import { AiFillStar } from "react-icons/ai";

function Modal(props) {
  const desc = props.desc.map((description) => <p>{description}</p>);

  const rating = props.rating;
  let ratingStar = [];
  let i;

  for (i = 0; i < rating; i++) {
    ratingStar.push(<AiFillStar color="ffb83c" />);
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="img-container">
          <img src={props.img} alt={props.img} className="modal-img" />
        </div>
        <div className="desc">
          <h1>{props.city}</h1>
          <p>{desc}</p>
          <h2>
            Looking for a holiday package? <br />
            First Holiday has got you covered.
          </h2>
          <p>
            <b>Hotel:</b> {props.hotel}
            <br />
            <b>Star rating:</b> {ratingStar}
            <br />
            <b>Price per night with First Holiday's package deal:</b> £
            {props.price}
          </p>

          <button onClick={props.close} className="btn">
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
