import React from "react";
// import Avatar from "@mui/material/Avatar";
// import me from "../assets/img/me.jpg";
import "../assets/css/Header.css";
import resume from "../assets/img/Ben_Laubach.pdf";

export default function Header() {
  return (
    <header className="hero">
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">about</li>
          <li>
            <a className="nav-list-item" href={resume} download>
              resume
            </a>
          </li>
          <li className="nav-list-item" id="contact">
            contact
          </li>
        </ul>
      </nav>
      <h1 id="name">Ben Laubach</h1>
      <div className="header-avatar">
        {/* <Avatar alt="Ben Laubach" src={me} sx={{ width: 300, height: 300 }} /> */}
        <p>
          Full-stack web developer, musician, and technologist with a passion
          for creative problem solving and furthering my knowledge.
        </p>
      </div>
    </header>
  );
}