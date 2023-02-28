import React from "react";
import Audio from "./Audio.js";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetics">
      {props.phonetics.map(function (phonetics, index) {
        return (
          <div key={index}>
            <Audio audio={phonetics.audio} />
            <span className="text">{phonetics.text}</span>
          </div>
        );
      })}
    </div>
  );
}
