export default function App() {
  const holiBoxes = [
    {
      title: "Holi Offer Flat 30% Off on Holi Colors",
      img: "https://tse2.mm.bing.net/th/id/OIP.ZqDlvmWs7TuK1nFlcxNwQAHaEo?pid=Api&P=0&h=180",
    },
    {
      title: "Deals up to 20% Off on Holi Special T-Shirts",
      img: "https://homafy.com/wp-content/uploads/2023/02/holi-hai-tshirt-1024x1024.jpeg",
    },
    {
      title: "Holi Hampers Under Rs299",
      img: "https://www.fnp.com/images/pr/l/v20240304142457/personalised-assorted-goodies-holi-hamper_1.jpg",
    },
  ];

  return (
    <div className="bg-gray-100  p-6">
      
      {/* Other content above this */}

      {/* Holi Section */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {holiBoxes.map((box, index) => (
            <div
              key={index}
              className="relative h-80 rounded-xl overflow-hidden shadow-lg group"
            >
              <img
                src={box.img}
                alt="holi"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Title Inside Image */}
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <h2 className="text-white text-xl md:text-2xl font-bold">
                  {box.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}