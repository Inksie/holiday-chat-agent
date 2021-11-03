import { useState } from "react";
import "./HolidayMatchBubble.css";
import Modal from "./Modal";

function HolidayMatchBubble(props) {
  const [modal, setModal] = useState(false);

  function modalHandler() {
    setModal(true);
  }

  function modalClose() {
    setModal(false);
  }

  return (
    <>
      <div className="city-wrapper">
        <div
          onClick={modalHandler}
          className="city-background"
          style={{ backgroundImage: `url(${props.recommendation.img})` }}
        ></div>
        <div className="city-content">
          <span className="city">
            {props.recommendation.city}, {props.recommendation.country}!
          </span>
        </div>
      </div>

      {modal && (
        <Modal close={modalClose} img={props.recommendation["random-image"]} />
      )}
    </>
  );
}

export default HolidayMatchBubble;
