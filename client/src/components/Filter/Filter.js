import React from "react";
import "../../css/Filter/Filter.css";
import { connect } from "react-redux";
import { filteredSort, filteredSize } from "../../store/actions/products";

function Filter(props) {
  return (
    <>
      {props.filterProducts && (
        <div className="filter-wrapper">
          <h2>Filter</h2>
          <div className="num-of-products">
            Number of Products {props.filterProducts.length}
          </div>

          <div>
            <span>Filter</span>
            <select
              className="filter-select"
              size={props.size}
              onChange={(e) =>
                props.filteredSize(props.products, e.target.value)
              }
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
              onChange={(e) =>
                props.filteredSort(props.filterProducts, e.target.value)
              }
            >
              <option value="latest">Latest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
          </div>
        </div>
      )}
    </>
  );
}

export default connect(
  (state) => {
    return {
      sort: state.products.sort,
      size: state.products.size,
      products: state.products.products,
      filterProducts: state.products.filterProducts,
    };
  },
  {
    filteredSize,
    filteredSort,
  }
)(Filter);
