import React from "react";
import dishes from "../data";

export default (props) => {
    return (
      <ul className="grid">
        {dishes
          .filter(
            dish =>
              dish.price >= props.min &&
              dish.price <= props.max &&
              (props.category === dish.category ||
                props.category === "all")
          )
          .map(dish => (
            <li key={dish.id} className="card">
              <h4>{dish.name}</h4>
              <p>{dish.description}</p>
              <span>${dish.price}</span>
            </li>
          ))}
      </ul>
    )
  };


