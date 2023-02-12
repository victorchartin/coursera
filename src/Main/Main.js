import "../App.css";
import restaurantFood from "../assets/restauranfood.jpg";
import { useNavigate } from "react-router-dom";

function HomeMain() {
  const navigate = useNavigate();
  return (
    <main>
      <div className="home-main">
        <div className="first-section">
          <div className="home-main-paragraph">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <button onClick={reserveTable}>Reserve a table</button>
          </div>
          <div className="home-main-image">
            <img src={restaurantFood} alt="Presentational"></img>
          </div>
        </div>
        <div className="second-section">
          <div className="section-header">
            <h1>This weeks specials!</h1>
            <button onClick={onlineMenu}>Online Menu</button>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
  function reserveTable() {
    navigate("/reservations");
  }
  function onlineMenu() {}
}

export default HomeMain;
