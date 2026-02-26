export default function App() {
  return (
    <div>

      {/* ================= BACK TO TOP ================= */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="bg-gray-600 hover:bg-gray-700 text-white text-center py-4 cursor-pointer"
      >
        Back to top
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <footer className="bg-gray-900 text-white">

        {/* Top Links Section */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

          {/* Column 1 */}
          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:underline">About Amazon</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Press Releases</a></li>
              <li><a href="#" className="hover:underline">Amazon Science</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">Connect with Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:underline">Sell on Amazon</a></li>
              <li><a href="#" className="hover:underline">Sell under Amazon Accelerator</a></li>
              <li><a href="#" className="hover:underline">Protect and Build Your Brand</a></li>
              <li><a href="#" className="hover:underline">Amazon Global Selling</a></li>
              <li><a href="#" className="hover:underline">Supply to Amazon</a></li>
              <li><a href="#" className="hover:underline">Become an Affiliate</a></li>
              <li><a href="#" className="hover:underline">Fulfilment by Amazon</a></li>
              <li><a href="#" className="hover:underline">Advertise Your Products</a></li>
              <li><a href="#" className="hover:underline">Amazon Pay on Merchants</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:underline">Your Account</a></li>
              <li><a href="#" className="hover:underline">Returns Centre</a></li>
              <li><a href="#" className="hover:underline">Recalls and Product Safety Alerts</a></li>
              <li><a href="#" className="hover:underline">100% Purchase Protection</a></li>
              <li><a href="#" className="hover:underline">Amazon App Download</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Logo + Language + Country */}
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-center gap-6 text-sm">

          <div className="text-white font-bold text-xl">
            <img
            src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
            alt="Amazon Logo"
            className="h-8 w-24 mt-4"
          /> 
          </div>

          <button className="border border-gray-500 px-4 py-1 rounded text-gray-300 hover:border-white">
            English
          </button>

          <button className="border border-gray-500 px-4 py-1 rounded text-gray-300 hover:border-white">
            India
          </button>

        </div>

        {/* More on Amazon Section */}
        <div className="bg-gray-800 py-10 text-xs text-gray-300">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">

            <div>
              <h5 className="font-semibold text-white">AbeBooks</h5>
              <p>Books, art & collectibles</p>
            </div>

            <div>
              <h5 className="font-semibold text-white">Amazon Web Services</h5>
              <p>Scalable Cloud Computing Services</p>
            </div>

            <div>
              <h5 className="font-semibold text-white">Audible</h5>
              <p>Download Audio Books</p>
            </div>

            <div>
              <h5 className="font-semibold text-white">IMDb</h5>
              <p>Movies, TV & Celebrities</p>
            </div>

            <div>
              <h5 className="font-semibold text-white">Shopbop</h5>
              <p>Designer Fashion Brands</p>
            </div>

            <div>
              <h5 className="font-semibold text-white">Amazon Business</h5>
              <p>Everything For Your Business</p>
            </div>

            <div>
              <h5 className="font-semibold text-white">Amazon Prime Music</h5>
              <p>100 million songs, ad-free</p>
            </div>

          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="bg-gray-900 text-gray-400 text-xs text-center py-6 space-y-2">
          <div className="space-x-4">
            <a href="#" className="hover:underline">Conditions of Use & Sale</a>
            <a href="#" className="hover:underline">Privacy Notice</a>
            <a href="#" className="hover:underline">Interest-Based Ads</a>
          </div>
          <p>© 1996-2026, Amazon.com, Inc. or its affiliates</p>
        </div>

      </footer>

    </div>
  );
}