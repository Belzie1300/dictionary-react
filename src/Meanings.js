import React from "react";

export default function Meanings(props) {
  console.log(props.meanings);
  if (props.meanings) {
    return (
      <div>
        <strong>{props.meanings.partOfSpeech}</strong>
        {props.meanings.definitions.map(function (definition, index) {
          return <div key={index}>{definition.definition}</div>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
