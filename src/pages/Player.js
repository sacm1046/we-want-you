import React from "react";
import Anchor from "../components/anchor/Anchor";
import CardPlayer from "../components/cardPlayer/CardPlayer";
import Spotify from "../components/icons/Spotify";
import { anchorType } from "../utils/anchorTypes";
import { color } from "../utils/systemColors";

export default function Player() {
  return (
    <section className="section">
      <Spotify size={150} color={color.primary} />
      <CardPlayer className="mt-5" />
      <Anchor type={anchorType.link}  href="/" text="VUELVE A ELEGIR" className="mt-10" />
    </section>
  );
}
