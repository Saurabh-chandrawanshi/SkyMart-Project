import React from "react";

const Home = ({ cartItem = [], products = [] }) => {
  const totalItems = cartItem.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cartItem.reduce(
    (total, item) => total + (item.discountPrice ?? item.price) * item.quantity,
    0,
  );

  const categories = [...new Set(products.map((item) => item.category))].length;

  const stats = [
    {
      title: totalItems,
      label: "Cart Items",
      description: "In your bag",
      icon: "ri-box-3-line",
      color: "text-[#C6FF00]",
      bg: "bg-[#C6FF00]/10",
    },
    {
      title: `₹${cartTotal.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
      })}`,
      label: "Cart Value",
      description: "Ready to checkout",
      icon: "ri-funds-line",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "5",
      label: "Top Products",
      description: "Highly rated",
      icon: "ri-star-line",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
    },
    {
      title: categories,
      label: "Categories",
      description: "To explore",
      icon: "ri-price-tag-3-line",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0B] px-5 pb-16 pt-32 sm:px-8 ">
      <div className="mx-auto max-w-[1470px] ml-20 mr-20">
        {/* Welcome Hero Section */}
        <section className="relative overflow-hidden rounded-[28px] border border-white/70 bg-[#101010] px-7 py-12 sm:px-10 lg:px-14 lg:py-14">
          {/* Background Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(198,255,0,0.09) 1px, transparent 1px),
                linear-gradient(90deg, rgba(198,255,0,0.09) 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <p className="mb-4 text-base font-medium uppercase tracking-wider text-[#C6FF00]">
                GOOD EVENING 👋
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[54px]">
                Welcome back,
                <br />
                <span className="text-[#C6FF00]">sau!</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                Discover today's picks — hand-curated products across
                electronics, fashion, and more.
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="flex items-center gap-3 rounded-2xl bg-[#C6FF00] px-7 py-4 font-semibold text-black transition hover:bg-[#b5eb00] hover:scale-[1.02]"
                >
                  Shop Now
                  <i className="ri-arrow-right-line text-xl"></i>
                </a>

                <a
                  href="#products"
                  className="rounded-2xl border border-white/15 px-7 py-4 font-medium text-white transition hover:border-[#C6FF00] hover:text-[#C6FF00]"
                >
                  View All Products
                </a>
              </div>
            </div>

            {/* Right Information Cards */}
            <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-[185px] lg:flex-col">
              <div className="flex flex-1 flex-col items-center justify-center rounded-[22px] border border-[#C6FF00]/25 bg-[#C6FF00]/10 px-5 py-6">
                <h2 className="text-4xl font-bold text-[#C6FF00]">
                  {products.length}+
                </h2>
                <p className="mt-1 text-center text-sm text-gray-400">
                  Products Available
                </p>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center rounded-[22px] border border-white/80 px-5 py-6">
                <h2 className="text-3xl font-bold text-white">Free</h2>
                <p className="mt-1 text-center text-sm text-gray-400">
                  Delivery on ₹999+
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Cards */}
        <section className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-5 rounded-[28px] border border-white/70 bg-[#111111] p-7 transition duration-300 hover:border-[#C6FF00]/50 hover:bg-[#151515]"
            >
              {/* Icon */}
              <div
                className={`flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-[20px] ${item.bg}`}
              >
                <i className={`${item.icon} text-[27px] ${item.color}`}></i>
              </div>

              {/* Details */}
              <div className="min-w-0">
                <h2 className="truncate text-2xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="mt-1 text-base text-gray-400">{item.label}</p>

                <p className="mt-1 text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
