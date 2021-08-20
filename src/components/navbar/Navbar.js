import { useHistory } from "react-router";
import { color } from "../../utils/systemColors";
import Anchor from "../anchor/Anchor";
import { anchorType } from "../anchor/anchorTypes";
import Spotify from "../icons/Spotify";
import "./style.scss";

export default function Navbar(props) {
  const { setToken } = props;

  const history = useHistory();
  const logout = () => {
    setToken(null);
    history.push('/')
  }

  return (
    <nav className="navbar">
      <Spotify size={50} color={color.light} />
      <Anchor text="Logout" type={anchorType.button} onClick={logout} />
    </nav>
  );
}
