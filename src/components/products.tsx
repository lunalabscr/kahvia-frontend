
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Ethiopia Yirgacheffe",
    description: "Floral notes with citrus acidity and a tea-like body.",
    price: "$18.00",
    image: "https://placehold.co/400x400?text=Ethiopia+Yirgacheffe",
  },
  {
    id: 2,
    name: "Colombia Huila",
    description: "Balanced with notes of cocoa, caramel, and red fruit.",
    price: "$16.00",
    image: "https://placehold.co/400x400?text=Colombia+Huila",
  },
  {
    id: 3,
    name: "Costa Rica Tarrazú",
    description: "Honey processed, bright acidity with stone fruit sweetness.",
    price: "$19.00",
    image: "https://placehold.co/400x400?text=Costa+Rica+Tarrazu",
  },
  {
    id: 4,
    name: "House Espresso Blend",
    description: "Bold and nutty, perfect for milk-based drinks.",
    price: "$15.00",
    image: "https://placehold.co/400x400?text=Espresso+Blend",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-doto font-bold text-neutral-900 mb-4">
            Our Selections
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto font-roboto">
            Curated beans from the best coffee growing regions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="aspect-square bg-neutral-100 relative overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 flex-grow font-roboto">
                  {product.description}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-primary-600 font-bold text-lg">
                    {product.price}
                  </span>
                  <button className="text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 px-4 py-2 rounded-md transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}