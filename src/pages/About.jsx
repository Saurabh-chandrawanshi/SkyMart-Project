import React from "react";
import {
  Zap,
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";

const About = ({ onBrowseProducts }) => {
  // Statistics
  const stats = [
    {
      icon: Package,
      value: "20K+",
      label: "Products",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Happy Customers",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Avg. Rating",
    },
    {
      icon: Truck,
      value: "99%",
      label: "On-time Delivery",
    },
  ];

  // Company Values
  const values = [
    {
      icon: ShieldCheck,
      title: "Trust",
      description:
        "Every product is verified for quality and authenticity before listing.",
    },
    {
      icon: Truck,
      title: "Speed",
      description:
        "We obsess over delivery times so your orders arrive when promised.",
    },
    {
      icon: HeartHandshake,
      title: "Community",
      description:
        "Built around real customer feedback, not just business metrics.",
    },
    {
      icon: Star,
      title: "Quality",
      description:
        "We curate the best — no filler, no junk, just great products.",
    },
  ];

  // Team Members
  const team = [
    {
      initial: "A",
      name: "Aryan Shah",
      role: "Founder & CEO",
      color: "bg-[#C6FF00]",
    },
    {
      initial: "P",
      name: "Priya Mehta",
      role: "Head of Product",
      color: "bg-blue-500",
    },
    {
      initial: "R",
      name: "Rohan Verma",
      role: "Lead Engineer",
      color: "bg-purple-500",
    },
    {
      initial: "S",
      name: "Sneha Kapoor",
      role: "Design Director",
      color: "bg-rose-500",
    },
  ];

  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#0B0B0B] px-5 pb-20 pt-28 text-white sm:px-8">
      <div className="mx-auto  max-w-[1160px]">
        {/* ================= ABOUT HERO ================= */}

        <section className="pb-20 pt-5 text-center">
          {/* Logo Icon */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#C6FF00] text-black">
            <Zap size={36} fill="black" strokeWidth={2.5} />
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[56px]">
            About <span className="text-[#C6FF00]">SkyMart</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-[780px] text-base font-medium leading-8 text-gray-500 sm:text-lg">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>

          {/* Statistics */}
          <div className="mx-auto mt-20 grid max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex min-h-[152px] flex-col items-center justify-center rounded-[22px] border border-white/80 bg-[#111111] p-6 transition duration-300 hover:border-[#C6FF00]"
                >
                  <Icon
                    size={25}
                    className="mb-4 text-[#C6FF00]"
                    strokeWidth={2}
                  />

                  <h2 className="text-3xl font-bold text-white">
                    {item.value}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">{item.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= OUR STORY ================= */}

        <section className="rounded-[28px] border border-white/80 bg-[#111111] px-6 py-10 sm:px-10 sm:py-12">
          <h2 className="mb-6 text-2xl font-bold sm:text-[28px]">Our Story</h2>

          <div className="space-y-5 text-sm font-medium leading-7 text-gray-500 sm:text-base">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked ourselves:
              what if shopping online was actually{" "}
              <span className="italic text-gray-400">enjoyable?</span>
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across the
              country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </section>

        {/* ================= OUR VALUES ================= */}

        <section className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-[28px]">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`flex gap-5 rounded-[22px] border ${
                    index === 1 ? "border-[#C6FF00]/30" : "border-white/80"
                  } bg-[#111111] p-6 sm:p-7 transition duration-300 hover:border-[#C6FF00]/50`}
                >
                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C6FF00]/10">
                    <Icon
                      size={23}
                      className="text-[#C6FF00]"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-500 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= TEAM SECTION ================= */}

        <section className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold sm:text-[28px]">
            Meet the Team
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div
                key={index}
                className="flex min-h-[175px] flex-col items-center justify-center rounded-[22px] border border-white/80 bg-[#111111] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#C6FF00]/50"
              >
                {/* Initial Avatar */}
                <div
                  className={`mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-[20px] ${member.color} text-2xl font-bold text-black`}
                >
                  {member.initial}
                </div>

                <h3 className="text-base font-bold text-gray-300">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CTA SECTION ================= */}

        <section className="mt-16 rounded-[28px] border border-[#C6FF00]/30 bg-[#0D0D0D] px-6 py-12 text-center sm:py-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to shop?
          </h2>

          <p className="mt-5 text-sm text-gray-500 sm:text-base">
            Explore thousands of products at unbeatable prices.
          </p>

          <button
            onClick={onBrowseProducts}
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-[#C6FF00] px-8 py-5 text-base font-semibold text-black transition duration-300 hover:scale-105 hover:bg-[#b5eb00] sm:text-lg"
          >
            Browse Products
            <ArrowRight size={22} />
          </button>
        </section>
      </div>
    </main>
  );
};

export default About;
