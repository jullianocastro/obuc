import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import firebase from "../../components/firebase/firebase";
import { history } from "../pages/history";
import { STORAGE_KEY } from "../../components/storage";
import "../../styles/css/pages.css";

makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    try {
      const data = await firebase.login(email, password);
      if (data) {
        localStorage.setItem(STORAGE_KEY, data.user.email);

        history.push("/");
        window.location.href = "/";
      } else {
        alert("não encontrado");
      }
    } catch (error) {
      document.querySelector(".e").innerHTML = error.message;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    login();
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
              <TextField
                className="camposBtn"
                type="password"
                label="SENHA"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></TextField>
              <div className="btn_cadastrar"></div>
              <br></br>
              <br></br>
              <button type="submit"> Login </button>
              <br></br>
              <div className="util">
                <button
                  id="btn1"
                  onClick={() => {
                    window.location.href = "/register";
                  }}
                >
                  Cadastrar
                </button>

                <button
                  id="btn1"
                  onClick={() => {
                    window.location.href = "/forgot";
                  }}
                >
                  Recuperar Senha
                </button>
              </div>
              <div className="e"></div>
              <div className="sucesso"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
