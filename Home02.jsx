import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/71BSlWQ-UbL._AC_SY200_.jpg",
    link: "#"
  },
  {
    id: 2,
    image: "https://m.media-amazon.com/images/I/81BLyzEB3FL._AC_SY200_.jpg",
    link: "#"
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/61JctlgNtGL._AC_SY200_.jpg",
    link: "#"
  },
  {
    id: 4,
    image: "https://m.media-amazon.com/images/I/81FWBIAxoiL._AC_SY200_.jpg",
    link: "#"
  },
  {
    id: 5,
    image: "https://m.media-amazon.com/images/I/716zylvcBrL._AC_SY200_.jpg",
    link: "#"
  },
  {
    id: 6,
    image: "https://m.media-amazon.com/images/I/71+PL-oW4WL._AC_SY200_.jpg",
    link: "#"
  }
];

export default function SmallBusinessCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 600;
      scrollRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div className="bg-white p-6 mt-6 relative shadow-sm">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">
          Min.35% off | Best selling products from Small Businesses
        </h2>
        <a href="#" className="text-blue-600 text-sm hover:underline">
          See more
        </a>
      </div>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronLeft />
      </button>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {products.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="min-w-[200px] flex justify-center items-center bg-gray-50 hover:bg-gray-100 p-4 rounded-md transition"
          >
            <img
              src={item.image}
              alt="product"
              className="h-40 object-contain"
            />
          </a>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10"
      >
        <ChevronRight />
      </button>
    </div>
  );
}