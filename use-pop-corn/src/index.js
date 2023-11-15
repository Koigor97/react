import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={5} color={"#fcc419"} size={30} />
    <StarRating maxRating={10} color={"orangeRed"} defaultRating={3} />
    <StarRating
      maxRating={3}
      color={"lime"}
      size={35}
      satisfaction={["Nice", "Great", "Amazing"]}
    />
    <Testing />
  </React.StrictMode>
);

function Testing() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating
        color={"Pink"}
        maxRating={10}
        size={30}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} stars</p>
    </>
  );
}
