import React from "react";
import "./options_module.css";
export default function Options(props) {
  const {selection, setSelection} = props;
  const questions = ["character", "movie", "book"];


  console.log('selection value: ', selection)
  return (
    <>
      <div className="option-button">
        {questions.map((question, index) => {
          return (
            <button onClick={setSelection(question)} className="button" key={index}>
              {question}
            </button>
          );
        })}
      </div>
    </>
  );
}
