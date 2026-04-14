import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog";
import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import Slide from "@mui/material/Slide";
import { MyContext } from "../../App";
import './country.css';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDrodown = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const context = useContext(MyContext);

  const [selectTab, setSelectTab] = useState(null);

  const [countryList, setCountryList] = useState([]);

  const selectCountry = (index, country) => {
    setSelectTab(index);
    setIsOpenModal(false);
    context.setSelectedCountry(country);
  };

  useEffect(() => {
    setCountryList(context.countryList);
  }, [context.countryList]);

  const filterList = (e) => {
    const keyword = e.target.value.toLowerCase();

    if (keyword !== "") {
      const List = countryList.filter((item) => {
        return item.country.toLowerCase().includes(keyword);
      });
      setCountryList(List);
    } else {
      setCountryList(context.countryList);
    }
  };

  return (
    <div>
      <Button className="countryDrop " onClick={() => setIsOpenModal(true)}>
        <div className="d-flex flex-column align-items-start">
          <span className="location">Your Location </span>
          <span className="location-selector">
            {context.selectedCountry !== ""
              ? context.selectedCountry.length > 12 ? context.selectedCountry.substr(0,12)+'...' : context.selectedCountry: "Select Location "}
          </span>
        </div>
        <span className="ml-auto FaAngleDown">
          <FaAngleDown />
        </span>
      </Button>

      <Dialog
        open={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        TransitionComponent={Transition}
      >
        <h5>Choose your Delivery Location</h5>
        <p>Enter your address and we will specify the offer for your area.</p>
        <Button className="close_" onClick={() => setIsOpenModal(false)}>
          <IoClose></IoClose>
        </Button>

        <div className="headerSearch">
          <input
            type="text"
            placeholder="Search for products...."
            onChange={filterList}
          />
          <Button className="p-0">
            <IoSearch />
          </Button>
        </div>

        <ul className="countryList">
          {countryList?.length !== 0 &&
            countryList?.map((item, index) => {
              return (
                <li key={index} className="countryItem">
                  <Button
                    onClick={() => selectCountry(index, item.country)}
                    className={`${selectTab === index ? "active" : ""}`}
                  >
                    {item.country}
                  </Button>
                </li>
              );
            })}
        </ul>
      </Dialog>
    </div>
  );
};

export default CountryDrodown;
