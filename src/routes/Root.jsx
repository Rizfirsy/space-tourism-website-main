import React from "react";
import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>root</Link>
            <Link to={`sample-page`}>other page</Link>
            <Link to={`nested`}>Nested</Link>
          </li>
        </ul>
      </nav>
      <div>Hello this is the root path.</div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
