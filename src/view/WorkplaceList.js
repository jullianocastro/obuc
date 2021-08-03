import React, { useState } from "react";
import WorkplaceForm from "./WorkplaceForm";
import Workplace from "./Workplace";
import { useSelector, useDispatch } from "react-redux";
import { globalArrLocalTrabalho } from "../redux/action/workplaceAction";

function WorkplaceList({ onClick }) {
 

  const dispatch = useDispatch();

  const arrGlobalLocalTrabalho = useSelector((state) => state.WorkplaceReducer);
  const [arrLocaisTrabalho, setarrLocaisTrabalho] = useState(
    arrGlobalLocalTrabalho
  );

  const [editId, setEdit] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [inputSelectValue, setImputSelectValue] = useState("");
  const handleEditChange = (id, localization, building) => {
    setEdit(id);
    setInputValue(localization);
    setImputSelectValue(building);
  };
  const addWorkplace = (Workplace) => {
    if (!Workplace.localization || /^\s*$/.test(Workplace.localization)) {
      return;
    }

    const newarrLocaisTrabalho = [Workplace, ...arrLocaisTrabalho];
    setarrLocaisTrabalho(newarrLocaisTrabalho);
    console.log(arrGlobalLocalTrabalho);
  };

  const removeWorkplace = (id) => {
    if (arrLocaisTrabalho.length === 1) {
      const arrLocaisTrabalho = [];
      dispatch(globalArrLocalTrabalho(arrLocaisTrabalho));
    }

    const removedArr = [...arrLocaisTrabalho].filter(
      (WorkplaceId) => WorkplaceId.id !== id
    );
    setarrLocaisTrabalho(removedArr);
  };

  const editWorkplace = (id, localization, building) => {
    let editarrLocaisTrabalho = arrLocaisTrabalho.map((Workplace) => {
      if (Workplace.id === id) {
        Workplace.localization = localization;
        Workplace.building = building;
      }
      return Workplace;
    });
    setarrLocaisTrabalho(editarrLocaisTrabalho);
    setEdit(false);
  };

  return (
    <>
      <WorkplaceForm onSubmit={addWorkplace} />

      <Workplace
        arrLocaisTrabalho={arrLocaisTrabalho}
        removeWorkplace={removeWorkplace}
        editWorkplace={editWorkplace}
        handleEditChange={handleEditChange}
        editId={editId}
        inputValue={inputValue}
        setInputValue={setInputValue}
        inputSelectValue={inputSelectValue}
        setImputSelectValue={setImputSelectValue}
      />
    </>
  );
}

export default WorkplaceList;
