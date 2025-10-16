import React from "react";

export default function HeroBanner() {
  return (
    <section className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-orange-500 text-white shadow-lg">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 text-center md:flex-row md:text-left">
        {/* Logo */}
        <img
          src="/logo.svg" // 🔸 Replace with your actual logo path
          alt="Tably logo"
          className="h-24 w-24 rounded-2xl bg-white/20 p-3 backdrop-blur-md sm:h-28 sm:w-28 md:h-32 md:w-32"
        />

        {/* Text block */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
            Welcome to <span className="text-yellow-300">Tably</span>
          </h1>
          <p className="mt-3 max-w-lg text-base text-white/90 sm:text-lg md:text-xl">
            What’s your vibe today? Choose your mood and we’ll show you the best
            nearby restaurants — fast, fresh, and personalized.
          </p>

          {/* Animated tags */}
          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            {["🍔 Burgers", "🍕 Pizza", "🍣 Sushi", "☕ Coffee", "🥗 Vegan", "🍰 Desserts"].map(
              (tag, i) => (
                <span
                  key={tag}
                  className="animate-[float_6s_ease-in-out_infinite] rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-md hover:bg-white/25"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
