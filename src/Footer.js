import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footerText">
        {" "}
        Open Source Code on{" "}
        <a href="https://github.com/manjiriphatak/dictionary-app"> GITHUB </a>-
        Coded by Manjiri Phatak
      </div>
      <div className="footericons">
        <a
          href="mailto:manjiri.phatak@gmail.com"
          target="_blank"
          rel="noreferrer"
          title="Email"
        >
          <img
            src="./icons/gmail.png"
            alt="Gmail Icon"
            className="linkbuttons img-fluid"
          />
        </a>

        <a
          href="https://github.com/manjiriphatak"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <img
            src="./icons/_github.png"
            alt="GitHub Icon"
            className="linkbuttons img-fluid"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/manjiri-phatak-77389215/"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <img
            src="./icons/linkedin.png"
            alt="LinkedIn Icon"
            className="linkbuttons img-fluid"
          />
        </a>
      </div>{" "}
    </footer>
  );
}
