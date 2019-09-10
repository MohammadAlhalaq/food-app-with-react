import React from "react";
import dishes from "../data";

export default (props) => {
  return (
    <ul className="grid">
      {dishes
        .filter(
          dish => {
            const price = dish.price >= props.min &&
              dish.price <= props.max;
            const category = props.category === dish.category ||
              props.category === "all";
            const title = dish.name.includes(props.title);
            return props.title === "" ? (price && category) : title && category && price;
          }

        )
        .map(dish => (
          <li key={dish.id} className="card">
            <h4>{dish.name}</h4>
            <p>{dish.description}</p>
            <span>${dish.price.toFixed(2)}</span>
          </li>
        ))}
    </ul>
  )
};


