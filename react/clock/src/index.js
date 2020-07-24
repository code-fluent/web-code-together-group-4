import React from "react";
import ReactDOM from "react-dom";
// import Clock from "./Clock";
import LoginForm from "./LoginForm";

ReactDOM.render(
  <React.StrictMode>
    {/* <Clock timezone="Europe/Bucharest" />
    <Clock timezone="Europe/London" />
    <Clock timezone="America/Los_Angeles" />
    <Clock timezone="America/New_York" /> */}
    <LoginForm />
  </React.StrictMode>,
  document.getElementById("root")
);
