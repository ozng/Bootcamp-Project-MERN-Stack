import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  return (
    <>
      <div className="navbar-container">
        <Link className="navbar-logo" to="/">
          PETHOTEL
        </Link>
        <div className="navbar-user-container">
          {user ? (
            <>
              <img
                className="navbar-user-image"
                src="https://icon-library.com/images/no-user-image-icon/no-user-image-icon-26.jpg"
                alt="user_image"
              />
              <span className="navbar-user-name">{user.username}</span>
            </>
          ) : (
            <>
              <span className="navbar-user-login">Giriş yap</span>
              <span className="navbar-user-login">Kayıt ol</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
