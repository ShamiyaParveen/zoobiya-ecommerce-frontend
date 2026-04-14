# 🛒 Zoobiya E-Commerce Frontend

A fully responsive e-commerce frontend built using React. This project demonstrates modern frontend development practices including API integration, reusable component architecture, dynamic routing, and cart management using localStorage.

---

## 🔗 Live Demo

https://zoobiya-ecommerce-frontend.vercel.app/

## 💻 GitHub Repository

https://github.com/ShamiyaParveen/zoobiya-ecommerce-frontend

---

## 🚀 Features

- 📦 Fetches product data from public API  
- 🗂️ Dynamic category generation from API data  
- 🔍 Search functionality (title, category, brand)  
- 📄 Category-based product listing page  
- 🔗 Product details page with dynamic routing  
- 🛒 Add to cart and go-to-cart functionality  
- ➕ Cart quantity update and item removal  
- 💾 Cart persistence using localStorage  
- 👁️ Quick view product modal  
- 📱 Fully responsive design (mobile, tablet, desktop)  
- 🧩 Component-based structure for scalability  

---

## 🛠️ Tech Stack

- React.js  
- React Router DOM  
- Context API (State Management)  
- Axios  
- Material UI  
- Bootstrap  
- React Icons  
- React Slick  
- CSS  

---

## ⚙️ How It Works

### 1. Product Fetching

Products are fetched from:

https://dummyjson.com/products?limit=100

The API call is handled in `App.js`, and data is stored globally using Context API.

---

### 2. Global State Management

`App.js` works as the central data layer managing:

- Products  
- Search term  
- Categories  
- Selected product (for modal)  
- Cart items  
- Cart totals  

This state is shared across components using Context API.

---

### 3. Search & Category Filtering

- Category is selected via route parameters  
- Products are filtered by category  
- Search is applied on filtered results  
- UI controls how many products are displayed  

---

### 4. Product Details

- Uses `useParams()` to get product ID  
- Matches product from global state  
- Displays full product information  

---

### 5. Cart Logic

- If product exists → quantity updates  
- If new → added to cart  
- Cart data stored in `localStorage` (persists after refresh)  

---

## 📂 Folder Structure

client/
├── public/  
├── src/  
│   ├── assets/  
│   ├── Component/  
│   ├── Pages/  
│   ├── App.js  
│   ├── App.css  
│   └── index.js  
├── package.json  
└── README.md  

---

## 📄 Key Pages

### 🏠 Home Page
- Hero banner  
- Categories  
- Featured products  
- Best sellers  
- Promotional sections  

### 📦 Listing Page
- Category-based products  
- Search filtering  
- Grid layout  
- Product count control  

### 🔍 Product Details Page
- Product gallery  
- Product info  
- Quantity selector  
- Add to cart / Buy now  
- Related products  

### 🛒 Cart Page
- Cart items  
- Quantity update  
- Remove item  
- Clear cart  
- Total calculation  

---

## 🎨 Styling Approach

- Global styles in `App.css`  
- Component-level CSS for modularity  

This improves:
- Readability  
- Maintainability  
- Scalability  

---

## 🎯 Why This Project Stands Out

This project demonstrates:

- API integration  
- Component-based architecture  
- State management using Context API  
- Dynamic routing  
- Cart logic with persistence  
- Responsive UI design  
- Clean and scalable code structure  

---

## ⚙️ Installation

cd client  
npm install  

---

## ▶️ Run Locally

npm start  

Open:  
http://localhost:3000  

---

## 📦 Build

npm run build  

---

## 📄 Resume Description

Built a responsive e-commerce frontend using React, Context API, and REST APIs. Implemented product listing, search, dynamic routing, product details, and cart management with localStorage persistence.

---

## 🚀 Future Improvements

- Backend integration (auth + cart sync)  
- Real checkout flow  
- Advanced filtering & sorting  
- Wishlist functionality  

---

## 🙋‍♀️ Author

Shamiya Parveen  

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
