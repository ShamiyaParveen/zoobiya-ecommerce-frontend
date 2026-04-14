import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Header from "./Component/Header/header";
import { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import Footer from "./Component/Footer/Footer";
import ProductModal from "./Component/ProductModal/ProductModal";
import Listing from "./Pages/Listing/Listing";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

const MyContext = createContext();
const CART_STORAGE_KEY = "ecommerce-cart";
const PRODUCTS_API_URL = "https://dummyjson.com/products?limit=100";

const formatLabel = (value = "") =>
  value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const matchesSearch = (product, searchValue) => {
  const query = searchValue.trim().toLowerCase();

  if (!query) {
    return true;
  }

  return (
    product.title.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.brand?.toLowerCase().includes(query)
  );
};

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const getCountry = async (url) => {
    const response = await axios.get(url);
    setCountryList(response.data.data);
  };

  const getProducts = async () => {
    try {
      setProductsLoading(true);
      setProductsError("");
      const response = await axios.get(PRODUCTS_API_URL);
      setProducts(response.data.products || []);
    } catch (error) {
      setProductsError("Unable to load products right now. Please try again in a moment.");
    } finally {
      setProductsLoading(false);
    }
  };

  const filteredProducts = products.filter((product) =>
    matchesSearch(product, searchTerm)
  );

  const featuredProducts = filteredProducts.slice(0, 8);
  const bestSellerProducts = filteredProducts.slice(8, 16);
  const categoryData = useMemo(() => {
    const groupedCategories = {};

    products.forEach((product) => {
      const categoryName = product.category;

      if (!groupedCategories[categoryName]) {
        groupedCategories[categoryName] = {
          slug: categoryName,
          label: formatLabel(categoryName),
          count: 0,
          image: product.thumbnail,
          products: [],
          brands: []
        };
      }

      groupedCategories[categoryName].count += 1;
      groupedCategories[categoryName].products.push(product);

      if (
        product.brand &&
        !groupedCategories[categoryName].brands.includes(product.brand)
      ) {
        groupedCategories[categoryName].brands.push(product.brand);
      }
    });

    return Object.values(groupedCategories).sort((first, second) =>
      first.label.localeCompare(second.label)
    );
  }, [products]);
  const topCategories = categoryData.slice(0, 8);
  const navigationCategories = categoryData.slice(0, 6);
  const brandOptions = useMemo(
    () => Array.from(new Set(products.map((product) => product.brand).filter(Boolean))).sort(),
    [products]
  );

  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingProduct = prevItems.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevItems, { ...product, quantity }];
    });
  };

  const updateCartQuantity = (productId, type) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id !== productId) {
          return item;
        }

        let updatedQuantity = item.quantity;

        if (type === "increase") {
          updatedQuantity += 1;
        } else {
          updatedQuantity -= 1;
        }

        if (updatedQuantity < 1) {
          updatedQuantity = 1;
        }

        return { ...item, quantity: updatedQuantity };
      })
    );
  };

  const removeCartItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsOpenProductModal(true);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = cartSubtotal > 0 ? 5 : 0;
  const cartTotal = cartSubtotal + shippingCost;


  const value = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    setIsOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    isOpenProductModal,
    isLogin,
    setIsLogin,
    products,
    filteredProducts,
    featuredProducts,
    bestSellerProducts,
    categoryData,
    topCategories,
    navigationCategories,
    brandOptions,
    formatLabel,
    productsLoading,
    productsError,
    searchTerm,
    setSearchTerm,
    selectedProduct,
    setSelectedProduct,
    openProductModal,
    addToCart,
    cartItems,
    cartCount,
    cartSubtotal,
    cartTotal,
    shippingCost,
    updateCartQuantity,
    removeCartItem,
    clearCart
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={value}>
        {isHeaderFooterShow === true && <Header />}

        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/cat/:id" exact={true} element={<Listing />} />
          <Route path="/product/:id" exact={true} element={<ProductDetails />} />
          <Route path="/cart" exact={true} element={<Cart />} />
          <Route path="/signIn" exact={true} element={<SignIn />} />
          <Route path="/signUp" exact={true} element={<SignUp />} />
        </Routes>

        {isHeaderFooterShow === true && <Footer />}

        {isOpenProductModal === true && <ProductModal />}

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
