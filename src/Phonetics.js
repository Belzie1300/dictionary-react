import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div>
      {props.phonetics.map(function (phonetics, index) {
        return (
          <div key={index}>
            {phonetics.text}{" "}
            <a href={phonetics.audio} target="_blank" rel="noreferrer">
              Listen
            </a>
          </div>
        );
      })}
    </div>
  );
}
