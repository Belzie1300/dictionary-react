import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  if (props.meanings) {
    return (
      <div className="Meanings">
        <section>
          <strong>{props.meanings.partOfSpeech}</strong>
          {props.meanings.definitions.map(function (definition, index) {
            return (
              <div key={index}>
                <div className="definition">{definition.definition}</div>
                <div className="example">{definition.example}</div>
                <br />
              </div>
            );
          })}
          <div>
            <Synonyms synonyms={props.meanings.synonyms} />
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
