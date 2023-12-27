import PropTypes from "prop-types";

function Card({ children, darkMode, dummyTask }) {
  console.log(dummyTask);
  return (
    <div
      className={`list-item-div ${darkMode && "dark-mode"} ${
        dummyTask && "completed"
      }`}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
