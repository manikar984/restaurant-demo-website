# Spice Garden Restaurant Website

A responsive restaurant website demo built using HTML, CSS, and JavaScript.

This project demonstrates a modern restaurant website with a food menu, shopping cart, WhatsApp ordering, image gallery, customer reviews, contact information, and responsive mobile navigation.

## Live Website

https://manikar984.github.io/restaurant-demo-website/

## GitHub Repository

https://github.com/manikar984/restaurant-demo-website

---

## Project Overview

Spice Garden is a frontend restaurant website created as a demo project for local restaurant businesses.

The website is designed to provide customers with:

- A welcoming restaurant homepage
- Restaurant image slideshow
- Complete menu display
- Individual food item cards
- Shopping cart functionality
- Quantity management
- WhatsApp ordering
- Restaurant information
- Opening hours
- Customer reviews
- Image gallery
- Contact information
- Google Maps access
- Mobile-friendly navigation

The project is completely frontend-based and does not require a backend server.

---

## Features

### 1. Responsive Navigation

The website includes a navigation bar with links to:

- Home
- Menu
- About
- Reviews
- Gallery
- Contact

On smaller screens, the navigation changes to a mobile hamburger menu.

---

### 2. Hero Section

The homepage includes:

- Restaurant branding
- Welcome message
- Restaurant description
- View Menu button
- Visit Us button
- Automatic restaurant image slideshow
- Dark image overlay for better text visibility

The hero slider automatically changes images every few seconds.

---

### 3. Restaurant Menu

The menu section contains:

- Complete restaurant menu image
- Main Course category
- South Indian category
- Chef's Special category
- Food images
- Food descriptions
- Prices
- Add to Cart buttons

Example menu items include:

- Chicken Biryani
- Paneer Butter Masala
- Masala Dosa
- Plain Dosa
- Special Chicken Biryani
- Special Paneer

---

### 4. Shopping Cart

Customers can add food items to the cart.

The cart supports:

- Adding items
- Increasing quantity
- Decreasing quantity
- Removing individual items
- Clearing the entire cart
- Automatic item count
- Automatic total price calculation

The cart updates dynamically using JavaScript.

---

### 5. WhatsApp Ordering

Customers can place their cart order through WhatsApp.

The website automatically creates an order message containing:

- Food item names
- Quantities
- Individual item totals
- Overall order total

The generated order is sent to the configured WhatsApp number.

> The WhatsApp number in this demo should be replaced with the actual restaurant's number before client deployment.

---

### 6. About Section

The About section introduces the restaurant and highlights:

- Fresh ingredients
- Quality preparation
- Customer-focused service

---

### 7. Opening Hours

The website displays restaurant opening hours for:

- Monday - Friday
- Saturday
- Sunday

These values can be changed according to the actual restaurant's schedule.

---

### 8. Customer Reviews

The website includes customer review cards with:

- Star ratings
- Review text
- Customer names

The reviews included in this project are demo content and should be replaced with genuine customer reviews for a real restaurant.

---

### 9. Image Gallery

The gallery displays restaurant and food images in a responsive grid.

On desktop:

- Two-column layout

On mobile:

- Single-column layout

Images include hover zoom effects on larger screens.

---

### 10. Contact & Location

The contact section provides:

- Restaurant name
- Location
- Phone number
- Email address
- Call button
- WhatsApp button
- Google Maps button

The contact information currently contains demo data and should be replaced with the client's actual information.

---

### 11. Responsive Design

The website is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile devices

Responsive CSS adjusts:

- Navigation
- Hero content
- Menu cards
- Cart layout
- About section
- Reviews
- Gallery
- Contact section
- Footer

---

## Technologies Used

### HTML5

Used to create the structure and content of the website.

### CSS3

Used for:

- Layout
- Colors
- Typography
- Responsive design
- Cards
- Buttons
- Animations
- Hover effects
- Image layouts

### JavaScript

Used for:

- Hero image slider
- Mobile navigation
- Shopping cart
- Quantity controls
- Price calculation
- WhatsApp order generation

### Git & GitHub

Used for:

- Version control
- Project storage
- Project sharing
- Deployment

### GitHub Pages

Used to host the static website online.

---

## Project Structure

```text
restaurant-demo-website/
│
├── images/
│   ├── biryani.jpg
│   ├── dosa.jpg
│   ├── menu.jpg
│   ├── paneer.jpg
│   ├── restaurant.jpg
│   ├── restaurant2.jpg
│   ├── restaurant3.jpg
│   └── restaurant4.jpg
│
├── index.html
├── style.css
├── script.js
└── README.md
