import React, { useContext, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Link } from "react-router-dom";
import { MyContext } from "../../App";
import './sidebar.css';

const Sidebar = () => {
  const context = useContext(MyContext);
  const [priceRange, setPriceRange] = useState([100, 60000]);

  return (
    <section className="sidebar-section">
      <div className="container">

        {/* PRODUCT CATEGORIES */}
        <div className="filter-box">
          <h6 className="filter-title">PRODUCT CATEGORIES</h6>

          <div className="filter-scroll">
            {context.categoryData.map((category) => (
              <Link key={category.slug} to={`/cat/${category.slug}`} className="filter-item category-filter-link">
                <span>{category.label}</span>
                <span>{category.count}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* PRICE FILTER */}
        <div className="filter-box mt-3">
          <h6 className="filter-title">FILTER BY PRICE</h6>

          <div className="price-box">
            <RangeSlider
              min={0}
              max={60000}
              step={100}
              value={priceRange}
              onInput={setPriceRange}
            />

            <div className="price-values">
              <span>₹{priceRange[0]}</span>
              <span>₹{priceRange[1]}</span>
            </div>
          </div>
        </div>

          {/* PRODUCT CATEGORIES */}
        <div className="filter-box mt-3">
          <h6 className="filter-title">PRODUCT STATUS</h6>


              <label className="filter-item">
                <input type="radio" name="availability" />
                <span>In Stock</span>
              </label>
               <label className="filter-item">
                <input type="radio" name="availability"/>
                <span>On Sale</span>
              </label>
        </div>


        {/* BRANDS */}
      <div className="filter-box mt-3">
          <h6 className="filter-title">BRANDS</h6>

          <div className="filter-scroll">
            {context.brandOptions.map((brand) => (
              <label key={brand} className="filter-item brand-item">
                <div className="brand-left">
                  <input type="checkbox" />
                  <span>{brand}</span>
                </div>
              
              </label>
            ))}
          </div>
        </div>

              <br />
        
          <Link to="/cat/all">
          <img src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwfc3a2084/A-A-EOSS/DOW/EOSS-1.jpg" alt="Advertisement" className="img-fluid w-100 mt-4"/>
          </Link>
        


      </div>
    </section>
  );
};

export default Sidebar;
