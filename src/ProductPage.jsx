import React, { useState } from "react";
import PRODUCTS_DATA from "../data.json";

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white p-6 rounded-xl border border-gray-200 shadow "
      key={product.product_id}
    >
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
