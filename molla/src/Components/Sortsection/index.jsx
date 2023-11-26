import React, { useState } from "react";
import "./sortsection.scss";
import Products from "../products";

const Sortsection = () => {
  const [grid, setGrid] = useState(2);
  const gridThree = () => {
    setGrid(3);
  };
  const gridFour = () => {
    setGrid(4);
  };
  const gridTwo = () => {
    setGrid(2);
  }
  return (
    <section id="Sortsection">
      <div className="container">
        <div className="productsHeader">
          <div className="toolbox">
            <div className="toolboxLeft">
              <div className="toolboxInfo">
                Showing
                <span> 9 of 56 </span>
                Products
              </div>
            </div>
            <div className="toolboxRight">
              <div className="toolboxSort">
                <span>Sort by: </span>
                <div className="selectSort">
                  <select>
                    <option>from A-Z</option>
                    <option>Price (Less to More)</option>
                    <option>Price (More to Less)</option>
                  </select>
                </div>
              </div>
              <div className="toolboxLayout">
                <button>
                  <svg width="16" height="10">
                    <rect x="0" y="0" width="4" height="4"></rect>
                    <rect x="6" y="0" width="10" height="4"></rect>
                    <rect x="0" y="6" width="4" height="4"></rect>
                    <rect x="6" y="6" width="10" height="4"></rect>
                  </svg>
                </button>
                <button onClick={gridTwo}>
                  <svg width="10" height="10">
                    <rect x="0" y="0" width="4" height="4"></rect>
                    <rect x="6" y="0" width="4" height="4"></rect>
                    <rect x="0" y="6" width="4" height="4"></rect>
                    <rect x="6" y="6" width="4" height="4"></rect>
                  </svg>
                </button>
                <button onClick={gridThree}>
                  <svg width="16" height="10">
                    <rect x="0" y="0" width="4" height="4"></rect>
                    <rect x="6" y="0" width="4" height="4"></rect>
                    <rect x="12" y="0" width="4" height="4"></rect>
                    <rect x="0" y="6" width="4" height="4"></rect>
                    <rect x="6" y="6" width="4" height="4"></rect>
                    <rect x="12" y="6" width="4" height="4"></rect>
                  </svg>
                </button>
                <button onClick={gridFour}>
                  <svg width="22" height="10">
                    <rect x="0" y="0" width="4" height="4"></rect>
                    <rect x="6" y="0" width="4" height="4"></rect>
                    <rect x="12" y="0" width="4" height="4"></rect>
                    <rect x="18" y="0" width="4" height="4"></rect>
                    <rect x="0" y="6" width="4" height="4"></rect>
                    <rect x="6" y="6" width="4" height="4"></rect>
                    <rect x="12" y="6" width="4" height="4"></rect>
                    <rect x="18" y="6" width="4" height="4"></rect>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Products"
          style={{ gridTemplateColumns: `repeat(${grid}, 1fr) ` }}
        >
          <Products />
        </div>
      </div>
    </section>
  );
};

export default Sortsection;
