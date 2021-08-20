import PropTypes from "prop-types";
import "./style.scss";

export default function Player(props) {
  const { trackId, src } = props;
  return (
    <div className="player">
      <img src={src} alt="notFound" />
      <iframe
        title="spotifyPlayer"
        src={`https://open.spotify.com/embed/track/${trackId}`}
        width="80%"
        height="80"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
}

Player.propTypes = {
  trackId: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};