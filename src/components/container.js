import React from "react";
import "../styles/css/index.css";
import WorkplaceList from "../view/WorkplaceList";
import Administrator from "../view/Administrator";
import { useSelector } from "react-redux";

function Container() {
  const navStatus = useSelector((state) => state.navReducer);

  if (navStatus === "Local de Trabalho") {
    return (
      <>
        <div className="titleContainer">
          {" "}
          {navStatus} <hr></hr>{" "}
        </div>
        <div className="front">
          {" "}
          <WorkplaceList></WorkplaceList>
        </div>
      </>
    );
  }

  if (navStatus === "Administração") {
    return (
      <>
        <div className="titleContainer">
          {" "}
          {navStatus} <hr></hr>{" "}
        </div>
        <div className="front">
          {" "}
          <Administrator></Administrator>
        </div>
      </>
    );
  }

  return;
}

export default Container;
