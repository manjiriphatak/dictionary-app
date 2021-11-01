import React from "react";
import Meaning from "./Meanings";
import Phonetics from "./Phonetics";
export default function Results(props) {
  if (props.results) {
    return (
      <div>
        <section>
          <h1 className="wordheading">
            {props.results.word}{" "}
            <Phonetics phonetics={props.results.phonetics} />
          </h1>
          <p>
            <strong>Origin : </strong>
            <em> {props.results.origin}</em>
          </p>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
