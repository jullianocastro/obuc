import React from "react";
import "../styles/css/index.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { STORAGE_KEY } from "../components/storage";

function Header() {
  const email = localStorage.getItem(STORAGE_KEY);
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
              <PermIdentityOutlinedIcon fontSize="medium" id="home" />{" "}
              <ExitToAppIcon
                fontSize="medium"
                id="home"
                onClick={() => {
                  localStorage.removeItem(
                    STORAGE_KEY,
                    (window.location.href = "/login")
                  );
                }}
              />{" "}
              <div className="user">
                {" "}
                <i>{email}</i>
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
