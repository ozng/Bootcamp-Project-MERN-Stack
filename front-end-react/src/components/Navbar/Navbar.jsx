import "./navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SignInModal from "../Forms/Modals/SignInModal";
import RegisterModal from "../Forms/Modals/RegisterModal";
import FindReservationModal from "../Forms/Modals/FindReservationModal";

function Navbar({ user }) {
  const [isSignInModalVisible, setIsSignInModalVisible] = useState(false);
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isReservationDetailModalVisible, setIsReservationDetailModalVisible] =
    useState(false);

  const showSignInModal = () => {
    setIsSignInModalVisible(true);
  };

  const showRegisterModal = () => {
    setIsRegisterModalVisible(true);
  };

  const showReservationModal = () => {
    setIsReservationDetailModalVisible(true);
  };
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
              <span className="navbar-user-login" onClick={showSignInModal}>
                Giriş yap
              </span>
              <span className="navbar-user-login" onClick={showRegisterModal}>
                Kayıt ol
              </span>
            </>
          )}
          <span className="navbar-user-login" onClick={showReservationModal}>
            Reservasyonum
          </span>
        </div>
      </div>

      <SignInModal
        isSignInModalVisible={isSignInModalVisible}
        setIsSignInModalVisible={setIsSignInModalVisible}
        showSignInModal={showSignInModal}
      />
      <RegisterModal
        isRegisterModalVisible={isRegisterModalVisible}
        setIsRegisterModalVisible={setIsRegisterModalVisible}
        showRegisterModal={showRegisterModal}
      />
      <FindReservationModal
        isReservationDetailModalVisible={isReservationDetailModalVisible}
        setIsReservationDetailModalVisible={setIsReservationDetailModalVisible}
      />
    </>
  );
}

export default Navbar;
