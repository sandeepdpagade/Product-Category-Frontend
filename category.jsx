import { useEffect, useState } from "react";
import "./App.css";
import products from "./data.json";
function CategoryPage() {
  const [category, setcategory] = useState("");
  const catsFromProducts = products.map((p) => {
    return p.category;
  });
  const cats = catsFromProducts.filter((c) => {
    const seen = new Set();
    const val = c[key];
    if (seen.has(val)) return false;
    return true;
  });
  const categories = ["All", ...cats];
  const [filteredProducts, setFilteredProucts] = useState([]);
  useEffect(() => {
    if (category) {
      const fil = products.filter((p) => {
        return p.category === category;
      });
      setFilteredProucts(fil);
    }
  });
  return (
    <>
      <div>
        <h1>Products</h1>
      </div>
    </>
  );
}

export default CategoryPage;
