import React, { Component } from "react";
import dishes from "../data";

class PriceFilter extends Component {
  // state = { min: 0, max: 30 };
  minAndMax = () => {
    const pricies = dishes.map(item => item.price)
    const min = Math.min(...pricies);
    const max = Math.max(...pricies);
    return [min, max];
  }
  render() {
    return (
      <form>
        <fieldset>
          <legend>choose price</legend>
          <div>
            <label>
              max
              <input
                type="range"
                id="max"
                name="max"
                max={this.minAndMax()[1]}
                min={this.minAndMax()[0]}
                step=".1"
                onChange={this.props.selectMax}
              />
            </label>
          </div>
          <div>
            <label>
              min
              <input
                type="range"
                id="min"
                name="min"
                min={this.minAndMax()[0]}
                max={this.minAndMax()[1]}
                step=".1"
                onChange={this.props.selectMin}
              />
            </label>
          </div>
        </fieldset>
      </form>
    );
  }
}

export default PriceFilter;
