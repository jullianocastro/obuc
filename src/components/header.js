import React from "react";
import "../styles/css/index.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

function Header() {
  return (
    <div className="header">
      <div className="transparent">
        <div className="title">
          {" "}
          <i> Controle de Locais de Trabalho </i>{" "}
          <div className="profile">
            {" "}
            <div className="userProfile">
              {" "}
              <HomeOutlinedIcon fontSize="medium" id="home" />{" "}
              <PermIdentityOutlinedIcon fontSize="medium" id="home" />{" "}{" "}
              <div className="user">
                {" "}
                <i>Usuário</i>
                <br></br>{" "}
                <div className="group">
                  <i> Administrador</i>
                </div>{" "}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
