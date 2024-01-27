import React from "react";
import "./App.css";
import { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  return (
    <div>
      <input
        type="text"
        className="input-box-Todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="Enter Todo"
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
