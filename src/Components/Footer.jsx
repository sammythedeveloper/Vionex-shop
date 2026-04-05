import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Swapped FB for Insta for a techier vibe

function Footer() {
  return (
    <footer
      id="contact-section"
      className=" bg-black text-white pt-24 pb-12 border-t border-white/10"
    >
      <div className="max-w-[1600px] mx-auto px-10">
        {/* Top Section: Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">NOVA SHOP</h2>
            <p className="text-white/50 font-extralight leading-relaxed max-w-sm">
              Defining the future of digital lifestyle through curated hardware
              and seamless shopping experiences.
            </p>
            <div className="flex space-x-6 text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/30 mb-6">
                Support
              </h3>
              <ul className="space-y-4 font-extralight text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping & Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Store Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/30 mb-6">
                Company
              </h3>
              <ul className="space-y-4 font-extralight text-sm text-white/70">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Journal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/30 mb-6">
              Stay Updated
            </h3>
            <form className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-white/20 py-3 w-full outline-none focus:border-white transition-colors font-extralight text-lg"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-3 text-sm uppercase tracking-widest font-bold hover:text-red-500 transition-colors"
              >
                Join
              </button>
            </form>
            <p className="text-[10px] text-white/30 mt-4 uppercase tracking-widest">
              <a href="#contact"></a>
              By subscribing, you agree to our Terms.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          <p>&copy; 2025 Nova Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
