import { Link } from "react-router-dom";
import { anchorType } from "./anchorTypes";
import "./style.scss";

export default function Anchor(props) {
  const { href, text, className, type, onClick } = props;

  const renderAnchor = () => {
    if (type === anchorType.link) {
      return (
        <Link to={href} className={`anchor ${className}`}>
          {text}
        </Link>
      );
    } else if (type === anchorType.button) {
      return (
        <button onClick={onClick} className={`anchor ${className}`}>
          {text}
        </button>
      );
    }
    return (
      <a href={href} className={`anchor ${className}`}>
        {text}
      </a>
    );
  };

  return renderAnchor();
}
