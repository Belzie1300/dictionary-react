import React from "react";
import Meanings from "./Meanings.js";
import Phonetics from "./Phonetics.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <Phonetics phonetics={props.results.phonetics} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meanings={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else return null;
}
