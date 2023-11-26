import React from "react";
import "./filtersection.scss";



const Filtersection = () => {
  return (
    <section id="filterSection">
      <div className="container">
        <div className="filterTextContent">
          <p className="filter">Filters:</p>
          <span className="cleanAll">Clean All</span>
        </div>
        <div className="Category">
          <div className="categoryTitle">
            <h4>Category</h4>
            <i class="fa-solid fa-chevron-up" />
          </div>
          <div className="categoryCheckBoxes">
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Dresses</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">T-shirts</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Bags</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Jackets</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Shoes</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Jumpers</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Jeans</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Sportswear</span>
            </div>
          </div>
        </div>
        <div className="Size">
          <div className="sizeTitle">
            <h4>Size</h4>
            <i class="fa-solid fa-chevron-up" />
          </div>
          <div className="sizeCheckBoxes">
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">XS</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">S</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">M</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">L</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">XL</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">XXL</span>
            </div>
          </div>
        </div>
        <div className="Color">
          <div className="colorTitle">
            <h4>Colour</h4>
            <i class="fa-solid fa-chevron-up" />
          </div>
          <div className="filterColors">
            <div className="brown"></div>
            <div className="lightBrown"></div>
            <div className="black"></div>
            <div className="red"></div>
            <div className="blue"></div>
            <div className="khaki"></div>
            <div className="beige"></div>
            <div className="white"></div>
          </div>
        </div>
        <div className="Brand">
          <div className="brandTitle">
            <h4>Brand</h4>
            <i class="fa-solid fa-chevron-up" />
          </div>
          <div className="brandCheckBoxes">
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Next</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">River Island</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Geox</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">New Balance</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">UGG</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">F&F</span>
            </div>
            <div className="checkboxItem">
              <input type="checkbox" className="checkbox" />
              <span className="checkboxText">Nike</span>
            </div>
          </div>
        </div>
        <div className="Price">
          <div className="priceTitle">
            <h4>Price</h4>
            <i class="fa-solid fa-chevron-up" />
          </div>
          <div className="priceText">
            <div className="text">Price Range:</div>
            <span className="priceRange">$0-$950</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filtersection;
