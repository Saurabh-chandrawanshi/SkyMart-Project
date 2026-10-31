import React from "react";
import {
  Laptop,
  Package,
  Shirt,
  Sofa,
  House,
  Dumbbell,
  ArrowRight,
} from "lucide-react";

const CategorySection = ({ products = [], onCategoryClick }) => {
  // All Categories
  const categories = [
    {
      name: "Electronics",
      icon: Laptop,
    },
    {
      name: "Clothing",
      icon: Package,
    },
    {
      name: "Furniture",
      icon: Package,
    },
    {
      name: "Home",
      icon: Package,
    },
    {
      name: "Sports",
      icon: Package,
    },
    {
      name: "Accessories",
      icon: Package,
    },
  ];

  // Count Products
  const getCategoryCount = (category) => {
    return products.filter(
      (product) => product.category?.toLowerCase() === category.toLowerCase(),
    ).length;
  };

  return (
    <section className="w-full bg-[#0B0B0B] px-5 py-10 sm:px-8 lg:px-10">
      <div className=" ml-20 mr-20 mx-auto max-w-[1520px]">
        {/* Heading */}
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            Shop by Category
          </h2>

          <button
            onClick={() => onCategoryClick?.("All")}
            className="group flex items-center gap-2 text-sm font-medium text-[#C6FF00] transition hover:text-white sm:text-base"
          >
            View All
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const count = getCategoryCount(category.name);

            return (
              <button
                key={category.name}
                onClick={() => onCategoryClick?.(category.name)}
                className="group flex min-h-[162px] w-full flex-col items-center justify-center rounded-[20px] bg-white px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#C6FF00]/10 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6FF00]"
              >
                {/* Icon */}
                <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon
                    size={36}
                    strokeWidth={1.8}
                    className="text-[#171717]"
                  />
                </div>

                {/* Category Name */}
                <h3 className="text-lg font-medium text-[#171717]">
                  {category.name}
                </h3>

                {/* Product Count */}
                <p className="mt-1 text-sm text-gray-500">{count} items</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
