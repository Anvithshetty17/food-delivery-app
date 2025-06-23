# Food Delivery App

A modern, single-page food delivery web application where users can browse menus, add items to a cart, and place orders. Built with React and Vite.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation & Running](#installation--running)
- [Key Components](#key-components)
- [State Management](#state-management)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Browse Menu:** View a categorized menu of food items (Salad, Rolls, Deserts, Sandwiches, Cake, Veg, Pasta, Noodles).
- **Add to Cart:** Add/remove items to/from a shopping cart; adjust quantities.
- **Cart Overview:** See itemized cart with subtotal, delivery fee, and total.
- **Order Placement:** Enter delivery information and place an order.
- **Navigation:** Navigate between Home, Cart, and Place Order pages.
- **Login Modal:** Popup login component (UI/logic scaffolded).
- **Responsive UI:** Designed for desktop and mobile.
- **Component-Based:** Modular React architecture.

---

## Tech Stack

- **Frontend:** React 18+, React Router v7
- **Build Tool:** Vite
- **State Management:** React Context API
- **Styling:** CSS (with some Tailwind utility classes if added)
- **Tooling:** ESLint, npm

---

## Folder Structure

```
food-delivery-app/
├── public/
│   └── index.html         # Main HTML entry
├── src/
│   ├── assets/            # Images and static data (food/menu lists)
│   ├── Components/
│   │   ├── FoodDisplay/   # Food listing by category
│   │   ├── FoodItem/      # Individual food card
│   │   └── ...            # NavBar, Footer, LoginPopup, etc.
│   ├── Pages/
│   │   ├── home/          # Homepage (menu, banner)
│   │   ├── Cart/          # Cart/checkout page
│   │   └── placeOrder/    # Place order form
│   ├── contaxt/           # StoreContaxt.jsx (global state/context)
│   ├── App.jsx            # App root, routing & main layout
│   └── main.jsx           # Entry point (context, router setup)
├── package.json
└── README.md
```

---

## Installation & Running

**Prerequisites:** Node.js and npm

```bash
git clone https://github.com/Anvithshetty17/food-delivery-app.git
cd food-delivery-app
npm install
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

---

## Key Components

### Global State (`StoreContaxt.jsx`)
- Stores `cartitems` (object with food IDs and quantities).
- Provides `addtocart`, `removefromcart`, and `gettotalcartamount` functions.
- Shares `food_list` (all menu items).

### Food Display (`FoodDisplay.jsx`, `FoodItem.jsx`)
- Lists food items filtered by category.
- Each item shows image, name, price, description, rating, and add/remove controls.

### Routing (`App.jsx`)
- `/` — Home page (menu, categories)
- `/Cart` — Shopping cart
- `/Order` — Place order form

### Cart & Order (`Cart`, `PlaceOrder`)
- Cart page lists selected items with quantity controls.
- Order page collects delivery info, shows cart summary and total price.

### Assets & Data (`src/assets/assets.js`)
- Contains menu and food list data with images, prices, categories.

---

## State Management

- Uses React Context API for sharing cart state and food data across components.
- No backend integration; data is static and cart is client-side only.

---

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

## License

MIT License © 2025 Anvith Shetty
