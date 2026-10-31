import React, { useMemo, useState } from "react";
import { Search, ChevronDown } from "lucide-react";
// import ProductCard from "./ProductCard";

const ProductListing = ({ Products = [], addToCart }) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("Featured");

  // Unique categories
  const categories = [
    "All Categories",
    ...new Set(Products.map((item) => item.category)),
  ];

  // Search, category filter and sorting
  const filteredProducts = useMemo(() => {
    let result = [...Products];

    // Search filter
    if (search.trim()) {
      result = result.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category filter
    if (selectedCategory !== "All Categories") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Sorting
    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;

      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "Top Rated":
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;

      case "Featured":
      default:
        break;
    }

    return result;
  }, [Products, search, selectedCategory, sortBy]);

  return (
    <section className="min-h-screen bg-[#0B0B0B] px-5 pb-16 pt-28 sm:px-8 lg:px-10">
      <div className="mx-auto ml-20 mr-20 max-w-[1520px]">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            All Products
          </h1>

          <p className="mt-3 text-base text-gray-500">
            {filteredProducts.length} products found
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col gap-3 rounded-[20px] border border-white/80 p-4 sm:p-5 lg:flex-row lg:items-center">
          {/* Search Input */}
          <div className="flex h-[50px] flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-[#1C1C1C] px-4 transition focus-within:border-[#C6FF00]">
            <Search size={20} className="shrink-0 text-gray-500" />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-full w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative w-full lg:w-[200px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="h-[50px] w-full cursor-pointer appearance-none rounded-2xl border border-white/10 bg-[#1C1C1C] px-5 pr-10 text-sm font-medium text-white outline-none transition hover:border-[#C6FF00] focus:border-[#C6FF00]"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-[#1C1C1C] text-white"
                >
                  {category}
                </option>
              ))}
            </select>

            <ChevronDown
              size={17}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>

          {/* Sorting Dropdown */}
          <div className="relative w-full lg:w-[230px]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-[50px] w-full cursor-pointer appearance-none rounded-2xl border border-[#C6FF00] bg-[#292929] px-5 pr-10 text-sm font-medium text-white outline-none shadow-[0_0_0_2px_rgba(198,255,0,0.15)]"
            >
              <option value="Featured">Featured</option>
              <option value="Top Rated">Top Rated</option>
              <option value="Price: Low to High">Price: Low to High</option>
              <option value="Price: High to Low">Price: High to Low</option>
            </select>

            <ChevronDown
              size={17}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Your Existing Product Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <Search size={45} className="mx-auto mb-4 text-gray-600" />

            <h2 className="text-xl font-semibold text-white">
              No products found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with a different name or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("All Categories");
                setSortBy("Featured");
              }}
              className="mt-5 rounded-xl bg-[#C6FF00] px-6 py-3 font-semibold text-black hover:bg-[#b5eb00]"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductListing;
