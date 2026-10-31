import React from "react";
import { Star, Zap, ArrowRight, ShoppingBag, Shield, Tag } from "lucide-react";

const FeaturedProducts = ({ products = [], onAddToCart, onSeeAll }) => {
  // Top rated products
  const topRated = [...products]
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 5);

  // New arrivals: latest product IDs first
  const newArrivals = [...products]
    .sort((a, b) => Number(b.id) - Number(a.id))
    .slice(0, 5);

  // Product price
  const getPrice = (product) => product.discountPrice ?? product.price;

  const formatPrice = (price) => `$${Number(price).toFixed(2)}`;

  // Product List Component
  const ProductList = ({ title, icon: Icon, data, type }) => (
    <div className="rounded-[28px] bg-white p-6 sm:p-7">
      {/* Heading */}
      <div className="mb-7 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Icon
            size={21}
            strokeWidth={2.5}
            className={
              type === "rated"
                ? "fill-[#FFB800] text-[#FFB800]"
                : "fill-[#C6FF00] text-[#C6FF00]"
            }
          />

          <h2 className="text-xl font-bold text-black sm:text-2xl">{title}</h2>
        </div>

        <button
          onClick={() => onSeeAll?.(type)}
          className="group flex shrink-0 items-center gap-1 text-sm font-medium text-[#B4ED00] hover:text-black transition"
        >
          See all
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Product Items */}
      <div className="space-y-2.5">
        {data.map((product) => (
          <div
            key={product.id}
            className="flex h-[87px] items-center justify-between gap-3 rounded-[20px] border border-gray-200 px-4 transition hover:border-[#C6FF00] sm:px-5"
          >
            {/* Image and Price */}
            <div className="flex min-w-0 items-center gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden bg-gray-50">
                <img
                  src={
                    product.image ||
                    product.thumbnail ||
                    "https://placehold.co/100x100"
                  }
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-[#B4ED00] sm:text-lg">
                  {formatPrice(getPrice(product))}
                </p>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={() => onAddToCart?.(product)}
              title="Add to cart"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#C6FF00]/10 text-[#A7D900] transition hover:bg-[#C6FF00] hover:text-black active:scale-90"
            >
              <ShoppingBag size={16} strokeWidth={1.8} />
            </button>
          </div>
        ))}

        {data.length === 0 && (
          <p className="py-10 text-center text-sm text-gray-400">
            No products available
          </p>
        )}
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#0B0B0B]  px-5 pb-16 pt-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1440px] ml-20 mr-20">
        {/* Top Separator Border */}
        <div className="mb-10 border-t border-white/70" />

        {/* Top Rated + New Arrivals */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
          <ProductList
            title="Top Rated"
            icon={Star}
            data={topRated}
            type="rated"
          />

          <ProductList
            title="New Arrivals"
            icon={Zap}
            data={newArrivals}
            type="new"
          />
        </div>

        {/* Bottom Features */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Fast Delivery */}
          <div className="flex min-h-[92px] items-center gap-5 rounded-[19px] border border-white/70 bg-[#111111] px-6 py-5">
            <Zap
              size={29}
              className="shrink-0 text-[#C6FF00]"
              strokeWidth={2}
            />

            <div>
              <h3 className="font-semibold text-white">Fast Delivery</h3>
              <p className="text-sm text-gray-500">Same-day on select items</p>
            </div>
          </div>

          {/* Secure Payments */}
          <div className="flex min-h-[92px] items-center gap-5 rounded-[19px] border border-white/70 bg-[#111111] px-6 py-5">
            <Shield
              size={29}
              className="shrink-0 text-blue-400"
              strokeWidth={2}
            />

            <div>
              <h3 className="font-semibold text-white">Secure Payments</h3>
              <p className="text-sm text-gray-500">100% encrypted checkout</p>
            </div>
          </div>

          {/* Best Prices */}
          <div className="flex min-h-[92px] items-center gap-5 rounded-[19px] border border-white/70 bg-[#111111] px-6 py-5">
            <Tag
              size={29}
              className="shrink-0 text-green-400"
              strokeWidth={2}
            />

            <div>
              <h3 className="font-semibold text-white">Best Prices</h3>
              <p className="text-sm text-gray-500">Price-match guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
