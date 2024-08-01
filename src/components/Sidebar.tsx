import React, { useEffect, useState } from "react";

interface Product {
  category: string;
}

interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const [catgories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "apple",
    "watch",
    "Fashion",
    "trend",
    "shoes",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const reponse = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await reponse.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        console.log(uniqueCategories);
      } catch (err) {
        console.error("Error fetching", err);
      }
    };

    fetchCategories();
  }, []);
  return <div>sidebar</div>;
};

export default Sidebar;
