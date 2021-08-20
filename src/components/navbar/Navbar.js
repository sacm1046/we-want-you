import { useHistory } from "react-router";
import { color } from "../../utils/systemColors";
import Anchor from "../anchor/Anchor";
import { anchorType } from "../anchor/anchorTypes";
import Spotify from "../icons/Spotify";
import PropTypes from "prop-types";
import "./style.scss";

export default function Navbar(props) {
  const { setToken } = props;

  const history = useHistory();
  const logout = () => {
    setToken(null);
    history.push('/');
    sessionStorage.removeItem('token');
  }

  return (
    <nav className="navbar">
      <Spotify size={50} color={color.light} />
      <Anchor text="Logout" type={anchorType.button} onClick={logout} />
    </nav>
  );
}

Navbar.propTypes = {
  setToken: PropTypes.func.isRequired,
};
