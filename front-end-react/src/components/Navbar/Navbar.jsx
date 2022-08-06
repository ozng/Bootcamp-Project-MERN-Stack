import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          Pet Hotels
        </Link>
        <div className="navbar-user-container">
          <img
            className="navbar-user-image"
            src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg"
            alt="user_image"
          />
          <span className="navbar-user-name">John Wick</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
