import React from "react";
import { Link } from "react-router-dom";



const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/`}>home</Link>
        </li>
        <li>
          <Link to={`/destination`}>destination</Link>
        </li>
        <li>
          <Link to={`/crew`}>crew</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
