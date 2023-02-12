import "../App.css";

function Card(props) {
  return (
    <div className="dish-card">
      <img src={props.dishImage} alt="Dish" />
      <div className="dish-header">
        <h3>{props.dishName}</h3>
        <p>{props.dishPrice}</p>
      </div>
      <p>{props.dishDescription}</p>
    </div>
  );
}

export default Card;
