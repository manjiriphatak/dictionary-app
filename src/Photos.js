import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photoSection">
        {props.photos.map(function (photo, index) {
          return (
            <span key={index}>
              <a href={photo.src.original} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.tiny}
                  className="photos"
                  alt="photos of word searched"
                />
              </a>
            </span>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
