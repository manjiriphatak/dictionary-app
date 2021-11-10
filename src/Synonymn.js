import React from "react";

export default function Synonymn(props) {
  if (props.synonymn && props.synonymn.length > 0) {
    return (
      <div className="synonyms">
        <em>Synonyms : </em>

        {props.synonymn.map(function (synonymn, index) {
          if (index < 6) {
            return (
              <span className="synonymnwrap" key={index}>
                {synonymn}
              </span>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return null;
  }
}
