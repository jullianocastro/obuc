import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import firebase from "../../components/firebase/firebase";
import { history } from "../pages/history";
makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirme, setPasswordConfirme] = useState("");
  const [name, setName] = useState("");

  async function register() {
    if (password !== passwordConfirme) {
      alert("senhas não são iguais");
    }

    try {
      const data = await firebase.register(name, email, password);

      history.push("/login");
      window.location.href = "/login";

      if (data) {
      }
    } catch (error) {
      if (
        error.message ===
        "The email address is already in use by another account."
      ) {
        const emailCadastrado = "Email já Cadastrado";
        document.querySelector(".es").innerHTML = emailCadastrado;
      }

      document.querySelector(".e").innerHTML = error.message;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    register();
  }

  return (
    <div className="login">
      <div className="fields">
        <div className="fielsCenter">
          <form onSubmit={handleSubmit}>
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
              label="Senha"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <br></br>
            <TextField
              className="camposBtn"
              type="password"
              label="Confirmar Senha"
              placeholder="Digite sua senha Novamente"
              value={passwordConfirme}
              onChange={(e) => setPasswordConfirme(e.target.value)}
            ></TextField>
            <br></br>
            <TextField
              className="camposBtn"
              type="text"
              label="Nome"
              placeholder="Seu Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></TextField>
            <div className="btn_cadastrar"></div>
            <br></br>
            <Button color="primary" type="submit">
              Registrar
            </Button>
            <div className="e"></div>
            <div className="es"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
