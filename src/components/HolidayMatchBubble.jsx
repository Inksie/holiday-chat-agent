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

  const holiday = props.recommendation;

  return (
    <>
      <div className="city-wrapper" data-testid="match-bubble-test">
        <div
          onClick={modalHandler}
          className="city-background"
          style={{ backgroundImage: `url(${holiday.img})` }}
        ></div>
        <div className="city-content">
          <span className="city">
            {holiday.city}, {holiday.country}!
          </span>
        </div>
      </div>

      {modal && (
        <Modal
          close={modalClose}
          img={holiday.img}
          desc={holiday.description}
          city={holiday.city}
          hotel={holiday["hotel-name"]}
          rating={holiday.rating}
          price={holiday["price-per-night"]}
        />
      )}
    </>
  );
}

export default HolidayMatchBubble;
