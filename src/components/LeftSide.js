import React from "react";
import { nav1, nav2 } from "../redux/action/navAction";
import { useDispatch } from "react-redux";

function LeftSide() {
  const localdeTrabalho = "Local de Trabalho";
  const administracao = "Administração";
  const dispatch = useDispatch();

  return (
    <>
      <div className="nav">
        <button
          onClick={() =>
            dispatch(nav2(administracao)) & window.scrollBy(0, 500)
          }
        >
          Administradores
        </button>
        <button>Administradores</button>
        <button>Áreas</button>
        <button
          onClick={() =>
            dispatch(nav1(localdeTrabalho)) & window.scrollBy(0, 500)
          }
        >
          {" "}
          Locais de Trabalho
        </button>
        <button> Habilidades </button>
        <button> Log </button>
        <button>Resposáveis</button>
      </div>
    </>
  );
}

export default LeftSide;
