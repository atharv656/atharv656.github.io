import React from "react";
import "./style/style.css"
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <navbar>
      <div className="Navbar">
        <ul>
          <li className="Link">
            <Link to="/Home">Home</Link>
          </li>
          <li className="Link">
            <Link to="/About">About</Link>
          </li>
          <li className="Link">
            <Link to="/Portfolio">Portfolio</Link>
          </li>
          <li className="LastLink">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </div>
    </navbar>
  );
};
