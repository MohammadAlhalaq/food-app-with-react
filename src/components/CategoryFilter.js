import React, { Component } from "react";
import dishes from "../data";

class CategoryFilter extends Component {
  state = {};
  filterCategories = () => {
    let categories = [];
    categories.push('all');
    dishes.forEach(category => {
      if (!categories.includes(category.category))
        categories.push(category.category);
    });
    return categories;
  };
  render() {
    const categories = this.filterCategories();
    return (
      <div>

        {categories.map(e => (
          <label key={e}>
            <input
              key={e}
              type="radio"
              name="category"
              value={e}
              checked={e === this.props.category}
              onChange={this.props.handleCategory}
            />
            &nbsp;
            {e}
          </label>
        ))}
      </div>
    );
  }
}

export default CategoryFilter;
