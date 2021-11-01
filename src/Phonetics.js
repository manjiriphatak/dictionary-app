import React from "react";
export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <span>
        {props.phonetics.map((phonetic, index) => {
          return (
            <span key={index} className="phonetics">
              ({phonetic.text})
              <a href={phonetic.audio} target="_blank ">
                <img src="./speaker.png" alt="speaker" className="speaker" />
              </a>
            </span>
          );
        })}
      </span>
    );
  } else {
    return null;
  }
}
