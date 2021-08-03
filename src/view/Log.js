import React from "react";
import { useSelector } from "react-redux";
import "../styles/css/index.css";

function Log() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const currentH = new Date();
  const time = `${currentH.getHours()}:${currentH.getMinutes()}:${currentH.getSeconds()}`;

  const eventAdd = useSelector((state) => state.LogReduceradd);
  const eventEdit = useSelector((state) => state.LogEditReducer);
  const eventDel = useSelector((state) => state.LogDelReducer);

  console.log(eventEdit);

  return (
    <>
      <div className="terminal">
        {eventAdd.map((log) => (
          <div className="log" key={log}>
            {" "}
            #Adicionado por: @Administrador Evento: {log} Data: {date} às {time}{" "}
          </div>
        ))}
        {eventDel.map((logrm) => (
          <div className="log" key={logrm}>
            {" "}
            #Removido por: @Administrador Evento com ID: {logrm} Data: {date} às{" "}
            {time}{" "}
          </div>
        ))}
      </div>
    </>
  );
}

export default Log;
