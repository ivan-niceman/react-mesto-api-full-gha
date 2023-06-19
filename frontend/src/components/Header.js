import { Routes, Route, Link } from "react-router-dom";
import logo from "../images/logo.svg";

export default function Header({ email, logOut }) {
  return (
    <header className="header">
      <img src={logo} alt="логотип Место Россия" className="header__logo" />
      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__ident__user">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__ident__user">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <div className="header__ident">
              <p className="header__ident__email">{email}</p>
              <Link
                to="/sign-up"
                className="header__ident__log-out"
                onClick={logOut}>
                Выйти
              </Link>
            </div>
          }
        />
      </Routes>
    </header>
  );
}
