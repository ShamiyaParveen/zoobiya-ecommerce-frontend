# Zoobiya E-Commerce Frontend

A responsive e-commerce frontend built with React. This project focuses on clean UI, reusable components, API integration, category-based product browsing, search, product details, and cart management using `localStorage`.

This project is useful for:
- portfolio showcase
- resume project links
- frontend developer interviews

## Live Demo

Add your deployed link here:

`https://zoobiya-ecommerce-frontend.vercel.app/`

## GitHub Repository

Add your repository link here:

`https://github.com/ShamiyaParveen/zoobiya-ecommerce-frontend`

## Features

- Product data fetched from a public API
- Dynamic category generation from API data
- Search by product title, category, and brand
- Category-based listing page
- Product details page using dynamic routing
- Add to cart / go to cart behavior
- Cart quantity update and item removal
- Cart persistence using `localStorage`
- Quick view product modal
- Responsive layout for mobile, tablet, and desktop
- Component-based CSS structure for maintainability

## Tech Stack

- React
- React Router DOM
- Context API
- Axios
- Material UI
- Bootstrap
- React Icons
- React Slick
- CSS

## How It Works

### 1. Product Fetching

The app fetches products from:

`https://dummyjson.com/products?limit=100`

The API call is handled in `App.js`, and the product data is stored in shared state using Context API.

### 2. Shared State Management

`App.js` acts as the central data layer of the app. It manages:

- products
- search term
- category data
- selected product for modal
- cart items
- cart totals

This shared state is passed through `MyContext`.

### 3. Search and Category Filtering

The search value is stored globally. On the listing page:

1. products are filtered by category from the route
2. search is applied on the filtered result
3. visible product count is controlled by the listing UI

### 4. Product Details

The product details page uses `useParams()` to read the product id from the URL and finds the matching product from the shared products array.

### 5. Cart Logic

When a product is added:

- if the product already exists in cart, quantity is updated
- if not, it is added as a new cart item

Cart data is saved in `localStorage`, so it remains after refresh.

## Folder Structure

```bash
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
```

## Key Pages

### Home Page

- Hero banner
- Category section
- Featured products
- Best sellers
- Promotional sections

### Listing Page

- Category-based product listing
- Search filtering
- Grid view options
- Product count control

### Product Details Page

- Product gallery
- Product info
- Quantity selector
- Add to cart / buy now
- Related products

### Cart Page

- Added products
- Quantity update
- Remove item
- Clear cart
- Subtotal and total calculation

## Styling Approach

The project uses:

- shared/global styles in `App.css`
- separate CSS files for related components and pages

This makes the code easier to read, maintain, and explain in interviews.

## Why This Project Is Good For Frontend Interviews

This project demonstrates:

- API integration
- React component architecture
- state management using Context API
- dynamic routing
- reusable UI components
- cart logic
- responsive design
- code organization

## Installation

```bash
cd client
npm install
```

## Run Locally

```bash
npm start
```

Open:

`http://localhost:3000`

## Build For Production

```bash
npm run build
```

## Resume Description

Built a responsive e-commerce frontend using React, Context API, React Router, and public REST APIs. Implemented product listing, search, dynamic routing, product details, and cart management with `localStorage` persistence.

## Future Improvements

- Backend-based cart and authentication
- Real checkout flow
- Sorting functionality with actual logic
- Price and brand filters connected to final product results
- Wishlist functionality

## Author

Shamiya Ansari

## License

This project is for learning, portfolio, and interview purposes.

