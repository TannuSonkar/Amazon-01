import { useState } from "react";
import { Menu, X } from "lucide-react";

function App() {
  const [cartCount] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      {/* ================= TOP NAVBAR ================= */}
      <nav className="bg-black w-full p-3 flex items-center">

        {/* Amazon Logo */}
        <div className="flex items-end">
          <img
            src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
            alt="Amazon Logo"
            className="h-8 w-24 mt-4"
          /> 
          <span className="text-white text-lg ml-[5px] mb-2">.in</span>
        </div>

        {/* Location */}
        <div className="flex items-center ml-[4px] cursor-pointer hover:border hover:border-white px-2 py-1">
          <div className="text-white mr-1">📍</div>
          <div className="text-white leading-tight">
            <div className="text-xs">Delivering to Delhi 110001</div>
            <div className="text-sm font-semibold">Update location</div>
          </div>
        </div>

        {/* Search */}
        <div className="ml-[50px] flex items-center bg-white rounded-md overflow-hidden">
          <select className="bg-gray-200 p-1 outline-none">
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Books</option>
          </select>

          <input
            type="text"
            placeholder="Search amazon.in"
            className="p-2 w-96 outline-none"
          />

          <button className="bg-yellow-400 px-4 py-2">🔍</button>
        </div>

        {/* Account */}
        <div className="ml-[20px] text-white cursor-pointer hover:border hover:border-white px-2 py-1">
          <div className="text-xs">Hello, sign in</div>
          <div className="text-sm font-semibold">Account & Lists ▼</div>
        </div>

        {/* Orders */}
        <div className="ml-[20px] text-white cursor-pointer hover:border hover:border-white px-2 py-1">
          <div className="text-xs">Returns</div>
          <div className="text-sm font-semibold">& Orders</div>
        </div>

        {/* Language */}
        <div className="ml-[20px]">
          <select className="p-1 rounded-md">
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Tamil</option>
            <option>Telugu</option>
            <option>Bengali</option>
            <option>Malayalam</option>
          </select>
        </div>

        {/* Cart */}
        <div className="ml-[20px] relative text-white cursor-pointer">
          🛒
          <span className="absolute -top-2 -right-3 bg-red-600 text-xs px-2 py-1 rounded-full">
            {cartCount}
          </span>
          <span className="ml-1">Cart</span>
        </div>
      </nav>

      {/* ================= BOTTOM CATEGORY NAVBAR ================= */}
      <nav className="bg-gray-800 text-white flex items-center p-3 overflow-x-auto whitespace-nowrap">

        {/* All Button */}
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 font-semibold"
        >
          <Menu size={20} />
          All
        </button>

        {/* Horizontal Menu */}
        <div className="ml-[4px] flex gap-6 text-sm">
          <span>MX Player</span>
          <span>Sell</span>
          <span>BestSeller</span>
          <span>Mobiles</span>
          <span>Today's Deals</span>
          <span>Customer Services</span>
          <span>New Releases</span>
          <span>Prime</span>
          <span>Fashion</span>
          <span>Amazon Pay</span>
          <span>Electronics</span>
        </div>
      </nav>

      {/* ================= SIDEBAR ================= */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white text-black overflow-y-auto shadow-lg z-50 transition-transform duration-300">

            {/* Header */}
            <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Hello, Sign in</h2>
              <X size={22} className="cursor-pointer" onClick={() => setOpen(false)} />
            </div>

            <div className="p-4 space-y-6">

              {/* Trending */}
              <Section
                title="Trending"
                items={["Bestseller", "New Releases", "Movers and Shakers"]}
              />

              {/* Digital */}
              <Section
                title="Digital Content and Devices"
                items={[
                  "Echo and Alexa",
                  "Fire TV",
                  "Amazon Prime Video",
                  "Amazon Prime Music",
                  "Audible Audiobooks",
                  "Kindle e-books & e-Readers",
                ]}
              />

              {/* Programs */}
              <Section
                title="Programs and Features"
                items={[
                  "Amazon Business",
                  "Handloom & Handcrafted",
                  "Gift Card & Mobile Recharge",
                ]}
              />

              {/* Shop */}
              <Section
                title="Shop by Category"
                items={[
                  "Mobile & Computer",
                  "TV & Electronics",
                  "Women's Fashion",
                  "Men's Fashion",
                ]}
              />

              {/* Help */}
              <Section
                title="Help & Settings"
                items={["Your Account", "Customer Services", "Sign In"]}
              />

            </div>
          </div>
        </>
      )}
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, items }) {
  return (
    <div>
      <h3 className="font-bold mb-2">{title}</h3>
      <ul className="space-y-1 text-sm">
        {items.map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-orange-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
