import "./App.css";
import HomeMain from "./Main/Main";
import Navigation from "./Navigation/Navigation";
import Card from "./Card/Card";
import greekSalad from "../src/assets/greek salad.jpg";
import bruschetta from "../src/assets/bruchetta.svg";
import desert from "../src/assets/lemon dessert.jpg";

export function App() {
  let specialDishes = [
    {
      id: "1",
      dishName: "Greek salad",
      dishPrice: "12.99",
      dishImage: greekSalad,
      dishDescription:
        "The famous greek salad of crispy  lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: "2",
      dishName: "Bruchetta",
      dishPrice: "5.99",
      dishImage: bruschetta,
      dishDescription:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      id: "3",
      dishName: "Lemon Dessert",
      dishPrice: "5.00",
      dishImage: desert,
      dishDescription:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  let weeksSpecials = specialDishes.map((dish) => {
    return (
      <Card
        key={dish.id}
        dishName={dish.dishName}
        dishPrice={dish.dishPrice}
        dishDescription={dish.dishDescription}
        dishImage={dish.dishImage}
      ></Card>
    );
  });
  return (
    <>
      <Navigation></Navigation>
      <HomeMain></HomeMain>
      <div data-testid="special-dishes" className="special-dishes">
        {weeksSpecials}
      </div>
    </>
  );
}

export default App;
