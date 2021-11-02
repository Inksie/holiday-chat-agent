import "./HolidayMatchBubble.css";

function HolidayMatchBubble(props) {
  const length = props.recommendations.length;
  return (
    <>
      {length > 1 ? (
        <div className="match-bubble">
          You got matched with {length} holidays!
        </div>
      ) : (
        <div>You got matched with {length} holiday!</div>
      )}

      {props.recommendations.map((holiday) => {
        return (
          <div className="city-wrapper">
            <div
              className="city-background"
              style={{ backgroundImage: `url(${holiday.img})` }}
            ></div>
            <div className="city-content">
              <span className="city">{holiday.city}!</span>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HolidayMatchBubble;
