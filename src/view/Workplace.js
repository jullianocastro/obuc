import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import DoneIcon from "@material-ui/icons/Done";
import {useDispatch} from 'react-redux'
import {globalArrLocalTrabalho} from '../redux/action/workplaceAction'

const Workplace = ({
  arrLocaisTrabalho,
  removeWorkplace,
  editWorkplace,
  editId,
  handleEditChange,
  inputValue,
  inputSelectValue,
  setInputValue,
  setImputSelectValue,
  
}) => {
 const dispatch = useDispatch()
 dispatch(globalArrLocalTrabalho(arrLocaisTrabalho))
  return arrLocaisTrabalho.map((Workplace) => (
 
    <div className="lineAd">
      {editId === Workplace.id ? (
        <>
          <select
            onChange={(e) => setImputSelectValue(e.target.value)}
            value={inputSelectValue}
          >
            <option value="Prédio 1">Prédio 1</option>
            <option value="Prédio 2">Prédio 2</option>
            <option value="Prédio 3">Prédio 3</option>
          </select>{" "}
          <input
            type="localization"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </>
      ) : (
        <div>
          <div className="list">
            <div className="l1a">{Workplace.building}</div>
            <div className="l1b">{Workplace.localization}</div>
            <div></div>
          </div>
        </div>
      )}
      {editId === Workplace.id ? (
        <DoneIcon
          id="done"
          onClick={() =>
            editWorkplace(Workplace.id, inputValue, inputSelectValue)
          }
        ></DoneIcon>
      ) : (
        <>
          <DeleteOutlineOutlinedIcon
            id="del"
            onClick={() => removeWorkplace(Workplace.id)}
          >
            {" "}
          </DeleteOutlineOutlinedIcon>
          <EditIcon
            id="edit"
            onClick={() =>
              handleEditChange(Workplace.id, Workplace.localization, Workplace.building)
            }
          >
            {" "}
          </EditIcon>
        </>
      )}
    </div>
  ));
};

export default Workplace;
