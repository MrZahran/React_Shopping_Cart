import React from "react";
import "../../css/Filter/Filter.css";

function Filter(props) {
  return (
    <div className="filter-wrapper">
      <h2>Filter</h2>
      <div className="num-of-products">Number of Products 4</div>
      <div>
        <span>Filter</span>
        <select
          className="filter-select"
          size={props.size}
          onChange={props.handleFilterBySize}
        >
          <option value="all">All</option>
          <option value="xs">XS</option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
      </div>
      <div>
        <span>Order</span>
        <select
          className="filter-select"
          value={props.sort}
          onChange={props.handleFilterByOrder}
        >
          <option value="latest">Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
