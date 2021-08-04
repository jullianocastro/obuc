import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import firebase from "../../components/firebase/firebase";

import "../../styles/css/pages.css";

makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Forgot() {
  const [email, setEmail] = useState("");

  async function forgot() {
    try {
      await firebase.forgot(email);

      if (email.length === 0) {
        return;
      }

      const emailenviado =
        "Link enviado para o email, siga as instruções e altere a senha.";
      document.querySelector(".reset").innerHTML = emailenviado;
    } catch (error) {
      document.querySelector(".e").innerHTML = error.message;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    forgot();
  }

  return (
    <div className="login">
      <div className="fields">
        <div className="fielsCenter">
          <form onSubmit={handleSubmit}>
            <div className="campos">
              <TextField
                className="camposBtn"
                type="email"
                label="EMAIL"
                placeholder="Entre com Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>{" "}
              <br></br>
              <div className="util"></div>
              <br></br>
              <br></br>
              <button type="submit"> Recuperar </button>
              <br></br>
              <div className="e"></div>
              <div className="reset"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
