import React, { Component } from "react";

class PriceFilter extends Component {
  // state = { min: 0, max: 30 };
  render() {
    return (
      <form>
        <fieldset>
          <legend>choose max and min price</legend>
          <div>
            <label>
              max
              <input
                type="range"
                id="max"
                name="max"
                max="30"
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
                min="0"
                max="30"
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
