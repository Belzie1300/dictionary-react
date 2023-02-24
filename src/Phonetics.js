import React from "react";
import Audio from "./Audio.js";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div>
      {props.phonetics.map(function (phonetics, index) {
        return (
          <div key={index}>
            {phonetics.text} <Audio audio={phonetics.audio} />
          </div>
        );
      })}
    </div>
  );
}
