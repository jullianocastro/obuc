import React from "react";
import Header from '../../components/header'
import LefetSide from '../../components/LeftSide'
import Container from '../../components/container'

function Start() {
  return (
    <>
      <div className="header">
        <Header></Header>
      </div>
      <div className="leftSide">
        <LefetSide />
      </div>
      <div className="container">
        <Container />
      </div>
    </>
  );
}

export default Start