import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error.statusText);
  return (
    <div>
      <h1>{error.status}</h1>
      <p>Sorry, {error.data}</p>
    </div>
  );
};

export default ErrorPage;
