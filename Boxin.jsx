export default function App() {
  const boxes = [
    {
      title: "Starting Rs49 Deals",
      items: [
        {
          name: "Home Tools",
          img: "https://m.media-amazon.com/images/I/71lOaAH2RGL._AC_.jpg",
        },
        {
          name: "Wall Papers",
          img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        },
        {
          name: "Soaps",
          img: "https://www.wholesalecuttingboards.com/media/ecommerce_option.photo/Pack-1-4.jpg",
        },
        {
          name: "Cleaning Supplies",
          img: "https://www.organizedmom.net/wp-content/uploads/2016/09/bathroom-cleaning-supplies.jpeg",
        },
      ],
    },
    {
      title: "Appliances for your home | Up to 55% off",
      items: [
        {
          name: "Air Conditioners",
          img: "https://tse1.mm.bing.net/th/id/OIP.cQgUsWZhsJwfYROR3DVe9AHaCr?pid=Api&P=0&h=180",
        },
        {
          name: "Washing Machine",
          img: "https://tse1.mm.bing.net/th/id/OIP.FjigAgDtXtClDdXtM544BgHaE8?pid=Api&P=0&h=180",
        },
        {
          name: "Microwaves",
          img: "https://tse1.mm.bing.net/th/id/OIP.TYz7oRm-zZ2VtIvXDqVUqAHaE8?pid=Api&P=0&h=180",
        },
        {
          name: "Refrigerator",
          img: "https://api.photon.aremedia.net.au/wp-content/uploads/sites/9/homes/2022/08/15/1660519308969_Liebherrdoublerefrigerator.jpg?resize=751%2C900",
        },
      ],
    },
    {
      title: "Revamp your home in style",
      items: [
        {
          name: "Cushion Covers",
          img: "https://images.unsplash.com/photo-1615873968403-89e068629265",
        },
        {
          name: "Bedsheets & More",
          img: "https://m.media-amazon.com/images/I/6189NPU1FNL._AC_UF894,1000_QL80_.jpg",
        },
        {
          name: "Home Storage",
          img: "https://tse1.mm.bing.net/th/id/OIP.RY0tA_OlOdVXxPoC0DKinQHaHa?pid=Api&P=0&h=180",
        },
        {
          name: "Lighting Solutions",
          img: "https://tse4.mm.bing.net/th/id/OIP.0uY4GZoVzx0hI96WzkbyowHaE8?pid=Api&P=0&h=180",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold mb-4">
              {box.title}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {box.items.map((item, i) => (
                <div
                  key={i}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition duration-300"
                  />

                  {/* Overlay Heading */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-white font-semibold text-center px-2">
                      {item.name}
                    </p>
                  </div>

                  {/* Always Visible Small Title */}
                  <p className="text-sm mt-2 text-center font-medium">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}