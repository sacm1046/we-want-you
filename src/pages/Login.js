import React from "react";
import Anchor from "../components/anchor/Anchor";
import Spotify from "../components/icons/Spotify";
import { anchorType } from "../utils/anchorTypes";
import { color } from "../utils/systemColors";

const { REACT_APP_SPOTIFY_CLIENT_ID } = process.env;
const URI = `https://accounts.spotify.com/authorize?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=http://localhost:3000&%20user-read-email20%user-read-private20%user-library-read20%user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
  return (
    <section className="section">
      <Spotify size={250} color={color.primary} />
      <Anchor href={URI} text="MUSIC NOW" className="mt-10" type={anchorType.default} />
    </section>
  );
}
