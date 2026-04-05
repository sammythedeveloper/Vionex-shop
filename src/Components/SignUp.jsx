import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Using a desk setup or similar asset for the signup page
import SignupHero from "../images/accessories/ecom3.jpg";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const register = (e) => {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((err) => {
        const cleanMessage = err.message
          .replace(/^Firebase: /, "")
          .replace(/\s\(.+\)$/, "");
        setError(cleanMessage);
      });
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-black text-white selection:bg-red-500">
      {/* LEFT SECTION: BRANDING & VISUAL */}
      <div className="relative flex-1 md:flex flex-col justify-between p-12 overflow-hidden border-r border-white/10">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={SignupHero}
            alt="Nova Workspace"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        {/* Top: Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative z-10"
        >
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter italic flex items-center gap-2 group"
          >
            <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            NOVA SHOP
          </Link>
        </motion.div>

        {/* Bottom: Text - Visible on all screens, adjusted margins for mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 mt-12 md:mt-0"
        >
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 leading-tight">
            Join the <br />
            <span className="text-white/40 italic font-light">
              future of retail.
            </span>
          </h2>
          <p className="hidden sm:block text-white/60 font-extralight max-w-sm leading-relaxed text-sm md:text-base">
            Create an account to unlock exclusive drops and experience seamless
            shopping.
          </p>
        </motion.div>
      </div>

      {/* RIGHT SECTION: SIGNUP FORM */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Header */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight">
              Create Account
            </h1>
            <p className="text-white/40 font-extralight mt-2">
              Please fill in your details to start your journey.
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-white transition-colors font-extralight placeholder:text-white/10"
                  placeholder="name@email.com"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-xl focus:outline-none focus:border-white transition-colors font-extralight placeholder:text-white/10"
                  placeholder="Minimum 6 characters"
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-xs mt-3 font-medium"
                  >
                    {error}
                  </motion.p>
                )}
              </div>
            </div>

            <button
              onClick={register}
              className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform active:scale-[0.98]"
            >
              Initialize Account
            </button>
          </div>

          {/* Bottom Link */}
          <div className="text-center">
            <p className="text-sm text-white/40 font-extralight">
              Already a member?{" "}
              <Link
                to="/Signin"
                className="text-white hover:text-red-500 font-bold transition-colors underline decoration-white/10 underline-offset-4"
              >
                Login here
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Signup;
