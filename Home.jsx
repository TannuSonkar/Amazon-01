import React, { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    image: "https://images-eu.ssl-images-amazon.com/images/I/917i-ytzpSL._AC_UL165_SR165,165_.jpg",
    title: "Onlymat Natural Rubber Coir Oval Doormat Heavy Duty Entryway Rug",
    rating: 4.5,
    reviews: 1251,
    price: "₹1,399.00",
    delivery: "Get it by Wednesday, March 4",
  },
  {
    id: 2,
    image: "https://images-eu.ssl-images-amazon.com/images/I/81vfmtQEOBL._AC_UL165_SR165,165_.jpg",
    title: "Toilet Bowl Cleaner Tablets – Automatic Cleaner (Pack of 5)",
    rating: 5.0,
    reviews: 5,
    price: "₹149.00",
    delivery: "FREE Delivery",
  },
  {
    id: 3,
    image: "https://images-eu.ssl-images-amazon.com/images/I/51TukfPVq2L._AC_UL165_SR165,165_.jpg",
    title: "Parssufy Shoe Storage Box Clear Plastic Stackable",
    rating: 4.3,
    reviews: 267,
    price: "₹399.00",
    delivery: "Get it by Friday, February 27",
  },
  {
    id: 4,
    image: "https://images-eu.ssl-images-amazon.com/images/I/61BlrS-VqxL._AC_UL165_SR165,165_.jpg",
    title: "CASADELIGHT Mini Mason Jars 120ML Glass Set",
    rating: 4.2,
    reviews: 16,
    price: "₹299.00",
    delivery: "FREE Delivery",
  },
];

export default function ProductCarousel() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 400;
    current.scrollLeft += direction === "left" ? -scrollAmount : scrollAmount;
  };

  return (
    <div className="relative bg-white mt-6 px-6 py-6">
      
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      {/* Products */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] bg-white p-4 rounded-md hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain mb-3"
            />

            <p className="text-sm font-medium line-clamp-3 h-[60px]">
              {item.title}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2">
              <Star size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="text-sm">{item.rating}</span>
              <span className="text-xs text-gray-500">
                ({item.reviews})
              </span>
            </div>

            {/* Price */}
            <p className="text-lg font-semibold mt-2">{item.price}</p>

            {/* Delivery */}
            <p className="text-xs text-gray-600 mt-1">
              {item.delivery}
            </p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
}

