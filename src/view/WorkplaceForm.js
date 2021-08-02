import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";



function WorkplaceForm(props) {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleChangeSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleSubmit = (e) => {
 
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      building: select,
      localization: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <select onChange={handleChangeSelect} value={select}>
        <option></option>
        <option value="Prédio 1">Prédio 1</option>
        <option value="Prédio 2">Prédio 2</option>
        <option value="Prédio 3">Prédio 3</option>
      </select>{" "}
      <input
        placeholder="Local de Trabalho"
        value={input}
        onChange={handleChange}
        name="localization"
      />{" "}
      <AddIcon onClick={handleSubmit} id="add"></AddIcon> <br></br>
      <div>
        <br></br>
       
        <br></br>{" "}
      </div>
    </form>
  );
}

export default WorkplaceForm;
