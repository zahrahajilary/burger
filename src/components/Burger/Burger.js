import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";
const burger = props => {
  var transformedIngredient = Object.keys(props.ingredients) //convert object to array without value -1
    .map(igKey => {
      return [...Array(props.ingredients[igKey])] //make a new array for each element in first step -2
        .map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
          // devoted specefic key and passed a props to  burgerIngredeient
        });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
      //   console.log(arr.concat(el))
    }, []);

  if (transformedIngredient.length === 0) {
    transformedIngredient = <p>please start adding ingredients</p>;
  }

  console.log(transformedIngredient);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredient}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
