import React, { useEffect, useState } from "react";
import InputSearch from "../components/inputSearch/InputSearch";
import Player from "../components/player/Player";
import Title from "../components/title/Title";
import { hasData } from "../utils/hasData";

export default function Dashboard(props) {
  const { spotifyWebApi } = props;
  const [tracksSuggestions, setTracksSuggestions] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [suggestionValue, setSuggestionValue] = useState("");

  useEffect(() => {
    if (hasData(suggestionValue)) {
      spotifyWebApi.search(suggestionValue, ["track"]).then((res) => {
        console.log(res.tracks.items);
        const { items } = res.tracks;
        setTracksSuggestions(
          items.slice(0, 5).map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            image: track.album.images[0],
          }))
        );
      });
    }
  }, [suggestionValue, spotifyWebApi]);

  return (
    <section className="section">
      <InputSearch
        placeholder="Explorar"
        suggestions={tracksSuggestions}
        onChange={setSuggestionValue}
        onClick={setSelectedTrack}
        value={suggestionValue}
      />
      {hasData(selectedTrack) ? (
        <Player
          src={selectedTrack.image.url}
          trackId={selectedTrack.id}
        />
      ) : (
        <Title
          title="Accede a tu música favorita"
          subTitle="Solo escribe el tema que deseas y a disfrutar!"
        />
      )}
    </section>
  );
}
