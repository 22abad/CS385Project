// src/data.js
// Mock data for the stores and "Magic Bags"
const stores = [
  {
    id: 1,
    name: "Joe's Bakery",
    category: "Baked Goods",
    price: "€3.99",
    originalPrice: "€12.00",
    itemsLeft: 3,
    distance: "0.5 km",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80" 
  },
  {
    id: 2,
    name: "Fresh Market",
    category: "Groceries",
    price: "€4.99",
    originalPrice: "€15.00",
    itemsLeft: 5,
    distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Sushi Zen",
    category: "Meals",
    price: "€5.99",
    originalPrice: "€18.00",
    itemsLeft: 1,
    distance: "2.0 km",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Pizza Place",
    category: "Meals",
    price: "€4.50",
    originalPrice: "€14.00",
    itemsLeft: 0, // Sold out example
    distance: "0.8 km",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
  }
];

export default stores;