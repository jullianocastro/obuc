import React from "react";
import "../styles/css/index.css";

import Administration from "../view/Administration";
import Administrator from "../view/Administrator";
import Surface from "../view/Surface";
import WorkplaceList from "../view/WorkplaceList";
import Skills from "../view/Skills";
import Log from "../view/Log";
import Responsible from "../view/Responsible";

import { useSelector } from "react-redux";

function Container() {
  const navStatus = useSelector((state) => state.navReducer);

  if (navStatus === "Administração") {
    return (
      <>
        <div className="titleContainer">
          {" "}
          {navStatus} <hr></hr>{" "}
        </div>
        <div className="front">
          {" "}
          <Administration></Administration>
        </div>
      </>
    );
  }

  if (navStatus === "Administradores") {
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

  if (navStatus === "Áreas") {
    return (
      <>
        <div className="titleContainer">
          {" "}
          {navStatus} <hr></hr>{" "}
        </div>
        <div className="front">
          {" "}
          <Surface></Surface>
        </div>
      </>
    );
  }

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

  if (navStatus === "Habilidades") {
    return (
      <>
        <div className="titleContainer">
          {" "}
          {navStatus} <hr></hr>{" "}
        </div>
        <div className="front">
          {" "}
          <Skills></Skills>
        </div>
      </>
    );
  }

  if (navStatus === "Log") {
    return (
      <>
        <div className="titleContainer">
          {" "}
          {navStatus} <hr></hr>{" "}
        </div>
        <div className="front">
          {" "}
          <Log></Log>
        </div>
      </>
    );
  }

  if (navStatus === "Responsáveis") {
    return (
      <>
        <div className="titleContainer">
          {" "}
          {navStatus} <hr></hr>{" "}
        </div>
        <div className="front">
          {" "}
          <Responsible></Responsible>
        </div>
      </>
    );
  }

  return <WorkplaceList></WorkplaceList>;
}

export default Container;
