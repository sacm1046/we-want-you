import React from "react";
import InputSearch from "../components/inputSearch/InputSearch";
import SongItem from "../components/songItem/SongItem";
import Spotify from "../components/icons/Spotify"
import { color } from "../utils/systemColors";

export default function Dashboard() {
  const songs = [
    { id: 1, name: "Canción 1", author: "Autor 1", href: "https://picsum.photos/id/237/60/60" },
    { id: 2, name: "Canción 2 mas extenso", author: "Autor 2", href: "https://picsum.photos/id/237/60/60" },
    { id: 3, name: "Canción 3", author: "Autor 3", href: "https://picsum.photos/id/237/60/60" },
    { id: 4, name: "Canción 4", author: "Autor 4", href: "https://picsum.photos/id/237/60/60" },
  ];

  return (
    <section className="section">
      <Spotify size={150} color={color.primary}/>
      <InputSearch placeholder="Explorar"/>
      {songs.map((song) => {
        return <SongItem key={song.id} name={song.name} author={song.author} imageUrl={song.href}/>;
      })}
    </section>
  );
}
