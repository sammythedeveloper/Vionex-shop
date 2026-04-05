// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { motion } from "framer-motion";
// import HeroEarbuds from "../images/accessories/ecom2.jpg";

// const LandingPage = () => {
//     const navigate = useNavigate();
//     const categories = [
//         { id: "new", label: "New", detail: "2026 Collection", path: "/Products" },
//         { id: "audio", label: "Audio", detail: "Premium Sound", path: "/category/headphones" },
//         { id: "gaming", label: "Gaming", detail: "Pro Gear", path: "/category/gaming" },
//       ];

//   const [activeTab, setActiveTab] = useState(categories[0].id);
//   return (
//     <div className="bg-black text-white w-full">
//       <div className="relative min-h-screen w-full overflow-hidden">
//         <div className="absolute inset-0 z-0">
//           <img
//             src={HeroEarbuds}
//             alt="Hero"
//             className="w-full h-full object-cover opacity-60"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
//         </div>

//         {/* NAVIGATION BAR */}
//         <nav className="relative z-20 flex justify-between items-center px-10 py-6">
//           <div className="text-2xl font-bold tracking-tighter">NOVA SHOP</div>
//           <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide opacity-80">
//             <li className="cursor-pointer hover:opacity-100">Home</li>
//             <li className="cursor-pointer hover:opacity-100">About</li>
//             <li className="cursor-pointer hover:opacity-100">Shop</li>
//             <li className="cursor-pointer hover:opacity-100">Contact</li>
//           </ul>
//           <div className="flex items-center gap-4">
//             <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer" />
//             <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
//               Shop all items
//             </button>
//           </div>
//         </nav>
//         <main className="relative z-10 flex flex-col items-center justify-center text-center mt-20 px-4">
//           <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 mb-6 relative">
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveTab(cat.id)}
//                 className={`relative px-4 py-1 rounded-full text-[10px] uppercase font-bold transition-colors duration-300 z-10 ${
//                   activeTab === cat.id
//                     ? "text-black"
//                     : "text-white hover:text-white/80"
//                 }`}
//               >
//                 {activeTab === cat.id && (
//                   <motion.div
//                     layoutId="active-pill"
//                     className="absolute inset-0 bg-white rounded-full z-[-1]"
//                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                   />
//                 )}
//                 {cat.label}
//               </button>
//             ))}
//             <span className="text-[10px] font-medium uppercase tracking-widest px-4 text-white/60 border-l border-white/10 ml-2">
//               {categories.find((c) => c.id === activeTab).detail}
//             </span>
//           </div>

//           <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6 max-w-4xl">
//             The center of
//             <br /> your digital world.
//           </h1>
//           <p className="text-lg text-white/70 max-w-lg mb-10 leading-relaxed font-extralight">
//             From high-performance computing to seamless smart home integration.
//             Nova Shop curates the tools that define modern living.
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
//               See all collections
//             </button>
//             <button className="bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/20">
//               Contact us
//             </button>
//           </div>
//         </main>

//         <div className="absolute bottom-10 left-0 w-full flex justify-center gap-4 px-10 z-10 overflow-x-auto pb-4 scrollbar-hide">
//           {[1, 2, 3, 4, 5].map((i) => (
//             <div
//               key={i}
//               className={`h-20 w-16 flex-shrink-0 rounded-md overflow-hidden border ${
//                 i === 3 ? "border-white" : "border-transparent opacity-40"
//               }`}
//             >
//               <img
//                 src={HeroEarbuds}
//                 className="w-full h-full object-cover"
//                 alt="thumb"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="py-12 border-y border-white/10 bg-black/50 backdrop-blur-sm">
//         <div className="container mx-auto px-10">
//           <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">
//             Trusted by leading tech innovators
//           </p>
//           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-50">
//             <span className="text-2xl font-bold tracking-tighter">SAMSUNG</span>
//             <span className="text-2xl font-bold tracking-tight">ASUS</span>
//             <span className="text-2xl font-black italic">SONY</span>
//             <span className="text-2xl font-mono uppercase font-bold">
//               Apple
//             </span>
//             <span className="text-2xl font-bold">Logitech</span>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
//         <div>
//           <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
//             Every essential innovation
//             <br />
//             <span className="text-white/50 italic">in one ecosystem.</span>
//           </h2>
//           <p className="mt-6 text-white/60 text-lg max-w-md">
//             We don't just sell products; we curate experiences.
//           </p>
//         </div>

//         <div className="grid gap-6">
//           <div className="flex justify-between items-center bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
//             <div>
//               <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
//                 Capabilities
//               </p>
//               <h3 className="text-5xl font-bold">150+</h3>
//               <p className="text-sm text-white/60">Premium products curated</p>
//             </div>
//             <div className="p-4 bg-white text-black rounded-lg">
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
//                 ></path>
//               </svg>
//             </div>
//           </div>

//           <div className="flex justify-between items-center bg-white text-black p-8 rounded-2xl">
//             <div>
//               <p className="text-xs uppercase tracking-widest text-black/50 mb-1">
//                 Ready Shipped
//               </p>
//               <h3 className="text-5xl font-bold">24hr</h3>
//               <p className="text-sm text-black/60">Average delivery time</p>
//             </div>
//             <div className="p-4 bg-black text-white rounded-lg">
//               <svg
//                 className="w-8 h-8"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="1.5"
//                   d="M13 10V3L4 14h7v7l9-11h-7z"
//                 ></path>
//               </svg>
//             </div>
//           </div>

//           <div className="flex justify-between items-center bg-white/5 border border-white/10 p-8 rounded-2xl">
//             <div>
//               <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
//                 Ratings
//               </p>
//               <h3 className="text-5xl font-bold">4.9</h3>
//               <p className="text-sm text-white/60">Out of rating 5.0</p>
//             </div>
//             <div className="p-4 border border-white/20 rounded-lg">
//               <svg
//                 className="w-8 h-8 text-yellow-400"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//               </svg>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

// Ensure this path is correct for your project structure
import HeroEarbuds from "../images/accessories/ecom2.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  // 1. Setup Categories for the interactive bar and their routes
  const categories = [
    { id: "new", label: "New", detail: "2026 Collection", path: "/Products" },
    {
      id: "audio",
      label: "Audio",
      detail: "Premium Sound",
      path: "/category/headphones",
    },
    {
      id: "gaming",
      label: "Gaming",
      detail: "Pro Gear",
      path: "/category/gaming",
    },
    {
      id: "smart",
      label: "Smart Life",
      detail: "Home Automation",
      path: "/category/smartlife",
    },
  ];

  const [activeTab, setActiveTab] = useState(categories[0].id);

  // Handle the "Slide then Navigate" logic
  const handleNavigation = (cat) => {
    setActiveTab(cat.id);
    // 200ms delay lets the user see the white bar slide before the page changes
    setTimeout(() => {
      navigate(cat.path);
    }, 200);
  };

  return (
    <div className="bg-black text-white w-full">
      {/* --- SECTION 1: HERO (Full Screen) --- */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={HeroEarbuds}
            alt="Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
        </div>

        {/* NAVIGATION BAR */}
        <nav className="relative z-20 flex justify-between items-center px-10 py-6">
          <div className="text-2xl font-bold tracking-tighter">NOVA SHOP</div>
          <ul className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-wide opacity-80">
            <li className="cursor-pointer hover:opacity-100 transition-opacity">
              Home
            </li>
            <li className="cursor-pointer hover:opacity-100 transition-opacity">
              About
            </li>
            <Link
              to="/shop"
              className="cursor-pointer hover:opacity-100 transition-opacity"
            >
              Shop
            </Link>
            <li
              onClick={() => {
                const footer = document.getElementById("contact-section");
                footer?.scrollIntoView({ behavior: "smooth" });
              }}
              className="cursor-pointer hover:opacity-100 transition-opacity hover:text-red-500"
            >
              Contact
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
            <Link to="/shop">
              <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                Shop all items
              </button>
            </Link>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <main className="relative z-10 flex flex-col items-center justify-center text-center mt-20 px-4">
          {/* THE INTERACTIVE CATEGORY BAR */}
          <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md p-1 rounded-full border border-white/20 mb-6 relative">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleNavigation(cat)}
                className={`relative px-4 py-1.5 rounded-full text-[10px] uppercase font-bold transition-colors duration-300 z-10 ${
                  activeTab === cat.id
                    ? "text-black"
                    : "text-white hover:text-white/80"
                }`}
              >
                {/* The Moving White Background Pill */}
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white rounded-full z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat.label}
              </button>
            ))}

            {/* The Detail Text */}
            <span className="hidden sm:inline-block text-[10px] font-medium uppercase tracking-widest px-4 text-white/60 border-l border-white/10 ml-2">
              {categories.find((c) => c.id === activeTab).detail}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6 max-w-4xl">
            The center of
            <br /> your digital world.
          </h1>
          <p className="text-lg text-white/70 max-w-lg mb-10 leading-relaxed font-extralight">
            From high-performance computing to seamless smart home integration.
            Nova Shop curates the tools that define modern living.
          </p>

          <div className="flex gap-4">
            <Link
              to="/shop"
              className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Explore
            </Link>
            <button
              onClick={() => {
                const footer = document.getElementById("contact-section");
                footer?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all active:scale-95"
            >
              Contact us
            </button>
          </div>
        </main>
      </div>

      {/* --- SECTION 2: TRUSTED BRANDS --- */}
      <div className="py-12 border-y border-white/10 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-white/40 mb-8 font-bold">
            Trusted by leading tech innovators
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-50">
            <span className="text-2xl font-bold tracking-tighter ">
              SAMSUNG
            </span>
            <span className="text-2xl font-bold tracking-tight">ASUS</span>
            <span className="text-2xl font-black italic">SONY</span>
            <span className="text-2xl font-mono uppercase font-bold">
              Apple
            </span>
            <span className="text-2xl font-bold">Logitech</span>
          </div>
        </div>
      </div>

      {/* --- SECTION 3: CAPABILITIES / STATS --- */}
      <div className="container mx-auto px-10 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Headline */}
        <div>
          <h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">
            Every essential innovation <br />
            <span className="text-white/50 italic">in one ecosystem.</span>
          </h2>
          <p className="mt-6 text-white/60 text-lg max-w-md font-extralight leading-relaxed">
            We don't just sell products; we curate experiences.
          </p>
        </div>

        {/* Right Side: Grid Stats */}
        <div className="grid gap-6">
          {/* Card 1 */}
          <div className="flex justify-between items-center bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
                Capabilities
              </p>
              <h3 className="text-5xl font-bold">150+</h3>
              <p className="text-sm text-white/60">Premium products curated</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </div>
          </div>

          {/* Card 2 (Inverted) */}
          <div className="flex justify-between items-center bg-white text-black p-8 rounded-2xl">
            <div>
              <p className="text-xs uppercase tracking-widest text-black/50 mb-1">
                Ready Shipped
              </p>
              <h3 className="text-5xl font-bold">24hr</h3>
              <p className="text-sm text-black/60">Average delivery time</p>
            </div>
            <div className="p-4 bg-black text-white rounded-lg">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-between items-center bg-white/5 border border-white/10 p-8 rounded-2xl">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 mb-1">
                Ratings
              </p>
              <h3 className="text-5xl font-bold">4.9</h3>
              <p className="text-sm text-white/60">Out of 5.0 store rating</p>
            </div>
            <div className="p-4 border border-white/20 rounded-lg text-yellow-400">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
