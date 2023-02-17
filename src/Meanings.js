import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  console.log(props.meanings);
  if (props.meanings) {
    return (
      <div>
        <strong>{props.meanings.partOfSpeech}</strong>
        {props.meanings.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <Synonyms synonyms={props.meanings.synonyms} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
