import React, { useContext, useMemo, useState } from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Slider from "react-slick";
import ProductItems from "../../Component/ProductItem/ProductItems";
import Button from "@mui/material/Button";
import { IoMdMenu } from "react-icons/io";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";
import { useParams } from "react-router-dom";
import './listing.css';

const Listing = () => {
  const context = useContext(MyContext);
  const { id } = useParams();
  const bannershop = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState('three');
  const openDropDown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [dropNum, setdropNum] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(8);
  const openDropDownnum = Boolean(dropNum);
  const handleClick1 = (event) => {
    setdropNum(event.currentTarget);
  };
  const handleClose1 = () => {
    setdropNum(null);
  };

  const selectedCategory = id === "all" ? "" : id;
  const categoryProducts = useMemo(() => {
    let baseProducts = context.products;

    if (selectedCategory) {
      baseProducts = context.products.filter(
        (product) => product.category === selectedCategory
      );
    }

    const query = context.searchTerm.trim().toLowerCase();

    if (!query) {
      return baseProducts;
    }

    return baseProducts.filter((product) => {
      return (
        product.title.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.brand?.toLowerCase().includes(query)
      );
    });
  }, [context.products, context.searchTerm, selectedCategory]);

  const visibleProducts = useMemo(
    () => categoryProducts.slice(0, itemsToShow),
    [categoryProducts, itemsToShow]
  );

  return (
    <>
      <section className="listing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 mt-5">
              <div className="shop-banner-img pt-3">
                <Slider {...bannershop}>
                  <div className="item">
                    <img
                      src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwafbae111/A-A-EOSS/EOSS-Main-Banner4.jpg"
                      alt="Banner1"
                      className="img-fluid w-100 rounded"
                    />
                  </div>

                  <div className="item">
                    <img
                      src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dw16895c1f/A-A-EOSS/EOSS-Main-Banner5.jpg"
                      alt="Banner1"
                      className="img-fluid w-100 rounded"
                    />
                  </div>
                  <div className="item">
                    <img
                      src="https://www.biba.in/dw/image/v2/BKQK_PRD/on/demandware.static/-/Library-Sites-BibaSharedLibrary/en_IN/dwe8af84b8/A-A-EOSS/EOSS-newarrval-Banner2.jpg"
                      alt="Banner1"
                      className="img-fluid w-100 rounded"
                    />
                  </div>
                </Slider>
              </div>
              <div className="shop-filter px-2 my-4 d-flex justify-content-between align-items-center">
                <div>
                  <Button className="active" onClick={() => setProductView('one')}>
                    <IoMdMenu />
                  </Button>
                  <Button onClick={() => setProductView('two')}>
                    <IoGrid />
                  </Button>
                  <Button onClick={() => setProductView('three')}>
                    <BsGrid3X3GapFill />
                  </Button>
                  <Button onClick={() => setProductView('four')}>
                    <TfiLayoutGrid4Alt />
                  </Button>
                </div>

                <div className="filteration ml-auto pr-3">
                  <span className="selected-category-label">
                    {selectedCategory
                      ? context.formatLabel(selectedCategory)
                      : "All Products"}
                  </span>
                  <span onClick={handleClick}>
                    Sort by <FaAngleDown />
                  </span>
                  <Menu
                    id="basic-menu"
                    className="filtershort"
                    anchorEl={anchorEl}
                    open={openDropDown}
                    onClose={handleClose}
                    slotProps={{
                      list: {
                        "aria-labelledby": "basic-button",
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      Short by popularity
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Short by Avarage Rating
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Short by Latest</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Short by Price: Low to High
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Short by Price: High to Low
                    </MenuItem>
                  </Menu>

                  <span onClick={handleClick1}>
                    Show <FaAngleDown />
                  </span>
                  <Menu
                    id="basic-menu"
                    className="numdropmenu"
                    anchorEl={dropNum}
                    open={openDropDownnum}
                    onClose={handleClose1}
                    slotProps={{
                      list: {
                        "aria-labelledby": "basic-button",
                      },
                    }}
                  >
                    {[4, 6, 8, 10, 12].map((count) => (
                      <MenuItem
                        key={count}
                        onClick={() => {
                          setItemsToShow(count);
                          handleClose1();
                        }}
                      >
                        {count}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>

              <div className="Product-listing-cards">
                {context.productsLoading && <p className="status-message">Products loading...</p>}
                {!context.productsLoading && context.productsError && (
                  <p className="status-message error-message">{context.productsError}</p>
                )}
                {!context.productsLoading && !context.productsError && visibleProducts.length === 0 && (
                  <p className="status-message">No products matched your search.</p>
                )}
                {!context.productsLoading &&
                  !context.productsError &&
                  visibleProducts.map((product) => (
                    <ProductItems key={product.id} itemView={productView} product={product} />
                  ))}
              </div>


              <div className="d-flex justify-content-center my-4">
                      <Pagination count={Math.max(1, Math.ceil(categoryProducts.length / itemsToShow))} color="primary pagination" />
                </div>

{/* 35 min */}

            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
