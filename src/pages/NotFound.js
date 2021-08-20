import React from "react";
import Anchor from "../components/anchor/Anchor";
import { anchorType } from "../components/anchor/anchorTypes";
import Title from "../components/title/Title";

export default function NotFound() {
  return (
    <section className="section">
      <Title title="Oooops" subTitle="Página no encontrada" />
      <Anchor type={anchorType.link} href="/" text="Ir al home" />
    </section>
  );
}
