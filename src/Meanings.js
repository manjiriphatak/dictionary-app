import React from "react";
import Synonymn from "./Synonymn";
export default function Meaning(props) {
  return (
    <div>
      <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
      <section>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index} className="eachDefinition">
              <span className="definition">
                <strong>Definition:</strong> {definition.definition}
              </span>
              <br />
              <span className="example">
                {definition.example && <em>Example : {definition.example}</em>}
              </span>
              <Synonymn synonymn={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
