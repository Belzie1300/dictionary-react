import React from "react";

export default function Audio(props) {
  if (props.audio) {
    return (
      <div className="Audio">
        <a href={props.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
      </div>
    );
  } else {
    return null;
  }
}
