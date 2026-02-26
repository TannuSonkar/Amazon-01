import { useState } from "react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-100 ">

      {/* --- Your Previous Boxes Section Above This --- */}

      {/* Personalized Recommendation Section */}
      <div className="bg-white mt-10 py-12">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            See personalized recommendations
          </h2>

          {/* Sign In Button */}
          <button
            onClick={() => setOpen(true)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-md shadow-md transition"
          >
            Sign in
          </button>

          {/* New Customer Section */}
          <div className="mt-6">
            <p className="text-gray-600">
              New customer?
            </p>

            <button
              className="mt-2 text-blue-600 hover:underline font-medium"
            >
              Start here.
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MODAL ---------------- */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-xl relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold mb-6 text-center">
              Sign In
            </h3>

            <form className="space-y-4">

              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md mt-4"
              >
                Continue
              </button>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
