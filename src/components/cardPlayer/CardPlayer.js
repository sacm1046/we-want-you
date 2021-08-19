import SpotifyPlayer from "react-spotify-web-playback";
import "./style.scss";

export default function CardPlayer(props) {
  const { className } = props;

  const name = "Canción 1";
  const author = "Autor 1";
  const imageUrl = "https://picsum.photos/id/237/200/300";
  return (
    <div className={`card-player ${className}`}>
      <div>
        <img src={imageUrl} alt="notFound" />
        <span>
          <h4>{name}</h4>
          <h5>{author}</h5>
        </span>
      </div>
      <div className="player-controls">
        <SpotifyPlayer styles={{ width: '400px' }}/>  
      </div>
    </div>
  );
}
