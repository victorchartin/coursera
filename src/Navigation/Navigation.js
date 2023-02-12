import "../App.css";

import { Link } from "react-router-dom";
function Navigation() {
  return (
    <>
      <header className="navigation">
        <div className="logo"></div>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <Link to="reservations">Reservations</Link>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
