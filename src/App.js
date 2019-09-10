import React from "react";
// import dishes from "./data";
import PriceFilter from "./components/PriceFilter";
import DishList from "./components/DishList";
import CategoryFilter from "./components/CategoryFilter";
// const categories = [
//   "all",
//   "burger",
//   "hot dog",
//   "sandwich",
//   "fries",
//   "topping",
//   "drink",
//   "extra",
// ];

class App extends React.Component {
  state = {
    min: 0,
    max: 30,
    category: "all"
  };

  selectMax = e => {
    this.setState({ max: e.target.value });
  };
  selectMin = e => {
    this.setState({ min: e.target.value });
  };
  handleCategory = e => {
    this.setState({ category: e.target.value });
  };

  render() {
    return (
      <main>
        <section className="filters">
          <h1>Burger Place</h1>
          <h2>Filters</h2>
          <PriceFilter selectMax={this.selectMax} selectMin={this.selectMin} />
          <CategoryFilter handleCategory={this.handleCategory} category={this.state.category}/>
        </section>
        <section className="dishes">
          <h2>Dishes</h2>
          <DishList
            min={this.state.min}
            max={this.state.max}
            category={this.state.category}
          />
        </section>
      </main>
    );
  }
}

export default App;
