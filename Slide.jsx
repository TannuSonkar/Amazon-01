import { useEffect, useState } from "react";

export default function App() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      bg: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
      content: (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Starting Rs199
          </h1>
          <h2 className="text-xl md:text-2xl mt-3 text-white">
            Deals on fashion & beauty
          </h2>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.R7q_pIgQ0P72-DVmWKuAMQHaE8?pid=Api&P=0&h=180"
            alt="Fashion"
            className="w-100 mt-6 rounded-xl shadow-lg"
          />
        </>
      ),
    },
    {
      bg: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500",
      content: (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Shop Sarees
          </h1>
          <h2 className="text-xl mt-2 text-white">Under Rs 399</h2>
          <h3 className="text-lg mt-2 text-white">
            TOP BRAND | LATEST TREND
          </h3>
          <img
            src="https://www.samyakk.com/blog/wp-content/uploads/2024/12/Trending-Sarees-by-Samyakk-1024x1024.jpg"
            alt="Sarees"
            className="w-64 mt-6 rounded-xl shadow-lg"
          />
        </>
      ),
    },
    {
      bg: "bg-gradient-to-r from-green-400 via-teal-500 to-blue-500",
      content: (
        <>
          <h3 className="text-xl text-white">Home Makeover Days</h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Starting Rs99
          </h1>
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
            alt="Home Decor"
            className="w-64 mt-6 rounded-xl shadow-lg"
          />
        </>
      ),
    },
    {
      bg: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
      content: (
        <>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            UP TO 50% OFF
          </h1>
          <h3 className="text-xl mt-2 text-white">Everyday Needs</h3>
          <img
            src="https://media.wishque.com/data/images/products/6494/47887793_617386249618_0.55779300-1672042928.jpg"
            alt="Everyday Needs"
            className="w-64 mt-6 rounded-xl shadow-lg"
          />
        </>
      ),
    },
    {
      bg: "bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600",
      content: (
        <>
          <h3 className="text-xl text-white">Trendy Sneakers</h3>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 text-white">
            Under Rs599
          </h1>
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Sneakers"
            className="w-64 mt-6 rounded-xl shadow-lg"
          />
        </>
      ),
    },
  ];

  // Auto slide change every 3 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 180000); // 3 minutes

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full flex flex-col items-center justify-center text-center transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          } ${slide.bg}`}
        >
          {slide.content}
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-3 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}