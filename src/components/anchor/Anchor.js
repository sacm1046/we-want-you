import { Link } from "react-router-dom";
import "./style.scss";

export default function Anchor(props) {
  const { href, text, className, type } = props;
  return (
    <>
      {type === "link" ? (
        <Link to={href} className={`anchor ${className}`}>
          {text}
        </Link>
      ) : (
        <a href={href} className={`anchor ${className}`}>
          {text}
        </a>
      )}
    </>
  );
}
