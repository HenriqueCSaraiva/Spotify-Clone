import React from "react";
import { accessUrl } from "../../spotify";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <img
        className="login__img"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify Logo"
      />
      <a href={accessUrl} className="login__link">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
