import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // LOADING CONCEPT
  const [httpError, setHttpError] = useState(undefined);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://first-app-786e3-default-rtdb.firebaseio.com/meals.json"
      ); // musimy dodac .json (firebase specific)

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <h1>Loading...</h1>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <h1>{httpError}</h1>
      </section>
    );
  }

  const mealsList = meals.map((meal) => {
    // Wazny koncept wstawienia...
    // obiektu w returnowany HTML (JSX)
    // (CZESTY)
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        description={meal.description}
        name={meal.name}
        price={meal.price}
      />
    );
  });
  return (
    <Card>
      <section className={classes.meals}>
        <ul>{mealsList}</ul>
      </section>
    </Card>
  );
};
export default AvailableMeals;
