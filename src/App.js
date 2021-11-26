import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import Player from "./Components/Player/Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    //Set token
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);
  
  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
