import React from "react";
import Synonymn from "./Synonymn";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div>
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <section>
        {props.meaning.definitions.map(function (definition, index) {
          if ((definition.example, definition.synonyms)) {
            return (
              <div key={index}>
                <p className="definition">
                  <strong>Definition:</strong> {definition.definition}
                  <br />
                  <em>Example : {definition.example}</em>
                  <Synonymn synonymn={definition.synonyms} />
                </p>
              </div>
            );
          } else {
            return null;
          }
        })}
      </section>
    </div>
  );
}
