import React, { useContext } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MyContext } from '../../../App';
import './navigation.css';
//20 min

const Navigation = () => {
  const context = useContext(MyContext);

  return (
    <nav>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-3 navpart1'>
                   <div className='cartwrapper'>
                     <Button className='allcategorybtn'>
                     <RxHamburgerMenu />  <span className='mx-2'> All Categories </span>  <FaAngleDown />
                    </Button>
                      <div className='sidebar-menu'>
                        <ul className='list-unstyled m-0 p-0'>
                            {context.categoryData.map((category) => (
                              <li className='next-menu' key={category.slug}>
                                <Link to={`/cat/${category.slug}`}>{category.label}</Link>
                                {category.brands.length > 0 && <MdKeyboardArrowRight className='ml-auto'/>}
                                {category.brands.length > 0 && (
                                  <div className='category-submenu'>
                                    <ul className='list-unstyled m-0 p-0'>
                                      {category.brands.slice(0, 6).map((brand) => (
                                        <li key={brand}>
                                          <Link to={`/cat/${category.slug}`}>{brand}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                        </ul>
                     </div>
                   </div>
                </div>
                <div className='col-lg-9 navpart2'>
                    <ul className=' list list-inline d-flex justify-content-end align-items-center mb-0'>
                        <li className='list-inline-item mx-3'><Link to="/">Home </Link></li>
                        {context.navigationCategories.map((category) => (
                          <li className='list-inline-item mx-3' key={category.slug}>
                            <Link to={`/cat/${category.slug}`}>{category.label}</Link>
                            {category.products.length > 0 && (
                              <div className='submenu'>
                                <ul className='list-unstyled m-0 p-0'>
                                  {category.products.slice(0, 4).map((product) => (
                                    <li key={product.id}>
                                      <Link to={`/product/${product.id}`}>{product.title}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </li>
                        ))}
                        <li className='list-inline-item mx-3'><Link to="/cat/all">Shop</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    </nav>

  )
}

export default Navigation;
