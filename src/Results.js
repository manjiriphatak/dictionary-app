import React from "react";
import Meaning from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <h1> {props.results.word}</h1>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <h3>
          <strong>Origin : </strong>
        </h3>
        {props.results.origin}
      </div>
    );
  } else {
    return null;
  }
}
