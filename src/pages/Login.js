import React from "react";
import Anchor from "../components/anchor/Anchor";
import Spotify from "../components/icons/Spotify";
import { anchorType } from "../components/anchor/anchorTypes";
import { color } from "../utils/systemColors";

const { REACT_APP_SPOTIFY_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;


const baseUri = `https://accounts.spotify.com/authorize`;
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
];
const href_login = `${baseUri}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_REDIRECT_URI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export default function Login() {
  return (
    <section className="section">
      <Spotify size={200} color={color.light} />
      <Anchor
        href={href_login}
        text="MUSIC NOW"
        className="mt-10"
        type={anchorType.default}
      />
    </section>
  );
}
