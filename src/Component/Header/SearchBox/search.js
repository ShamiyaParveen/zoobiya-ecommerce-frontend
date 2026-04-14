import React, { useContext } from 'react'
import { IoSearch } from "react-icons/io5";
import { MyContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import './search.css';

const SearchBox = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/cat/all");
  };

  return (
            <form className='headerSearch' onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder='Search for products....'
                  value={context.searchTerm}
                  onChange={(event) => context.setSearchTerm(event.target.value)}
                />
                <button type="submit" className='header-search-btn p-0'>
                    <IoSearch />
                </button>
            </form>


  )
}

export default SearchBox;
