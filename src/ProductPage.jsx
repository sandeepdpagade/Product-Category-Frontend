import React, { useState } from "react";

// The product data
const PRODUCTS_DATA = [
  {
    product_id: 1,
    name: "Bananas",
    category: "Fruits",
    price_per_unit: 0.5,
    unit_type: "kg",
    quantity_in_stock: 150,
    expiration_date: "2025-10-30",
    supplier_id: 1,
  },
  {
    product_id: 2,
    name: "Whole Milk",
    category: "Dairy",
    price_per_unit: 1.2,
    unit_type: "liters",
    quantity_in_stock: 80,
    expiration_date: "2025-11-05",
    supplier_id: 2,
  },
  {
    product_id: 3,
    name: "Bread",
    category: "Bakery",
    price_per_unit: 2.0,
    unit_type: "pieces",
    quantity_in_stock: 40,
    expiration_date: "2025-10-25",
    supplier_id: 3,
  },
  {
    product_id: 4,
    name: "Apples",
    category: "Fruits",
    price_per_unit: 0.7,
    unit_type: "kg",
    quantity_in_stock: 120,
    expiration_date: "2025-11-01",
    supplier_id: 1,
  },
  {
    product_id: 5,
    name: "Cheddar Cheese",
    category: "Dairy",
    price_per_unit: 3.5,
    unit_type: "pieces",
    quantity_in_stock: 60,
    expiration_date: "2025-12-15",
    supplier_id: 2,
  },
  {
    product_id: 6,
    name: "Orange Juice",
    category: "Beverages",
    price_per_unit: 1.5,
    unit_type: "liters",
    quantity_in_stock: 90,
    expiration_date: "2025-10-29",
    supplier_id: 4,
  },
  {
    product_id: 7,
    name: "Butter",
    category: "Dairy",
    price_per_unit: 2.8,
    unit_type: "pieces",
    quantity_in_stock: 75,
    expiration_date: "2025-11-20",
    supplier_id: 2,
  },
  {
    product_id: 8,
    name: "Tomatoes",
    category: "Vegetables",
    price_per_unit: 1.1,
    unit_type: "kg",
    quantity_in_stock: 100,
    expiration_date: "2025-10-28",
    supplier_id: 5,
  },
  {
    product_id: 9,
    name: "Rice",
    category: "Grains",
    price_per_unit: 0.9,
    unit_type: "kg",
    quantity_in_stock: 200,
    expiration_date: null,
    supplier_id: 6,
  },
  {
    product_id: 10,
    name: "Chicken Breast",
    category: "Meat",
    price_per_unit: 5.5,
    unit_type: "kg",
    quantity_in_stock: 50,
    expiration_date: "2025-10-27",
    supplier_id: 7,
  },
  {
    product_id: 11,
    name: "Eggs",
    category: "Dairy",
    price_per_unit: 0.15,
    unit_type: "pieces",
    quantity_in_stock: 300,
    expiration_date: "2025-11-02",
    supplier_id: 2,
  },
  {
    product_id: 12,
    name: "Coffee",
    category: "Beverages",
    price_per_unit: 4.0,
    unit_type: "kg",
    quantity_in_stock: 45,
    expiration_date: null,
    supplier_id: 8,
  },
  {
    product_id: 13,
    name: "Potatoes",
    category: "Vegetables",
    price_per_unit: 0.8,
    unit_type: "kg",
    quantity_in_stock: 180,
    expiration_date: "2025-10-30",
    supplier_id: 5,
  },
  {
    product_id: 14,
    name: "Orange",
    category: "Fruits",
    price_per_unit: 0.6,
    unit_type: "kg",
    quantity_in_stock: 130,
    expiration_date: "2025-11-03",
    supplier_id: 1,
  },
  {
    product_id: 15,
    name: "Cucumber",
    category: "Vegetables",
    price_per_unit: 0.7,
    unit_type: "kg",
    quantity_in_stock: 110,
    expiration_date: "2025-10-29",
    supplier_id: 5,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow " key={product.product_id}>
      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
      <p className="text-sm font-semibold  mb-3">
        Category: <span className="">{product.category}</span>
      </p>
      <div className="space-y-1 text-gray-700 text-sm">
        <p>
          <span className="font-medium">Price:</span> $
          {product.price_per_unit.toFixed(2)} / {product.unit_type}
        </p>
        <p>
          <span className="font-medium">Stock:</span>{" "}
          {product.quantity_in_stock} {product.unit_type}(s)
        </p>
        <p>
          <span className="font-medium">Expires:</span>{" "}
          {product.expiration_date || "N/A"}
        </p>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    return product.category
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
  });

  return (
    <div className="min-h-screen pb-10">
      <header className="">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center">
            Product Category Search
          </h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow mb-8">
          <label className="block text-lg font-semibold mb-2">
            Search by Category:
          </label>
          <input
            placeholder="Search category (e.g., Fruits, Dairy, Vegetables)"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none "
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.product_id} product={product} />
            ))
          ) : (
            <p className="col-span-full text-center text-xl text-gray-500 p-10 bg-white rounded-lg shadow">
              No products found in category "{searchTerm || "..."}".
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
