import React from "react";
import {
  nav1,
  nav2,
  nav3,
  nav4,
  nav5,
  nav6,
  nav7,
} from "../redux/action/navAction";
import { useDispatch } from "react-redux";

function LeftSide() {
  const administracao = "Administração";
  const administradores = "Administradores";
  const areas = "Áreas";
  const localdeTrabalho = "Local de Trabalho";
  const habilidades = "Habilidades";
  const log = "Log";
  const responsaveis = "Responsáveis";

  const dispatch = useDispatch();

  return (
    <>
      <div className="nav">
        <button
          onClick={() =>
            dispatch(nav1(administracao)) & window.scrollBy(0, 500)
          }
        >
          Administração
        </button>
        <button
          onClick={() =>
            dispatch(nav2(administradores)) & window.scrollBy(0, 500)
          }
        >
          Administradores
        </button>
        <button onClick={() => dispatch(nav3(areas)) & window.scrollBy(0, 500)}>
          Áreas
        </button>
        <button
          onClick={() =>
            dispatch(nav4(localdeTrabalho)) & window.scrollBy(0, 500)
          }
        >
          {" "}
          Locais de Trabalho
        </button>
        <button
          onClick={() => dispatch(nav5(habilidades)) & window.scrollBy(0, 500)}
        >
          {" "}
          Habilidades{" "}
        </button>
        <button onClick={() => dispatch(nav6(log)) & window.scrollBy(0, 500)}>
          {" "}
          Log{" "}
        </button>
        <button
          onClick={() => dispatch(nav7(responsaveis)) & window.scrollBy(0, 500)}
        >
          Resposáveis
        </button>
      </div>
    </>
  );
}

export default LeftSide;
