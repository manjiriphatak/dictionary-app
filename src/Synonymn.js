import React from "react";

export default function Synonymn(props) {
  console.log(props);
  if (props.synonymn) {
    return (
      <div classname="synonyms">
        <em>Synonyms : </em>

        {props.synonymn.map(function (synonymn, index) {
          if (index < 6) {
            return <span key={index}>{synonymn} , </span>;
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
