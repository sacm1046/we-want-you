import "./style.scss";
import Play from "../icons/Play";
import { color } from "../../utils/systemColors";
import { Link } from "react-router-dom";

export default function SongItem(props) {
  const { name, author, imageUrl } = props;
  return (
    <div className="song-item">
      <span>
        <img src={imageUrl} alt="notFound" />
        <Link to={`/song/${1}`}>
          <Play size={60} color={color.primary} />
        </Link>
      </span>
      <div>
        <h4>{name}</h4>
        <h5>{author}</h5>
      </div>
    </div>
  );
}
