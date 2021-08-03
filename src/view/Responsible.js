import React from "react";
import "../styles/css/index.css";

import axios from "axios";
function Responsible() {
  const options = {
    method: "GET",
    url: "https://api.github.com/users/jullianocastro",
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data.login);
      document.querySelector(".userID").innerHTML = response.data.login;
      document.querySelector(".date").innerHTML = response.data.created_at;
      document.querySelector(".repo").innerHTML = response.data.public_repos;
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="git" >
      
      <div className="card"> 
      <div>Request github </div>
      Login: <div className="userID" />
      <br></br>
      Data da Conta: <div className="date" /> <br></br>
      Repositório Público: <div className="repo" />
      <div><br></br>
        <img src= "https://avatars.githubusercontent.com/u/28925180?v=4" alt="Avatar" />
      </div></div>
  
    </div>
  );
}

export default Responsible;
