import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { motion } from "framer-motion";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

// Import the same hero asset used in LandingPage
import HeroImage from "../images/accessories/ecom3.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    setError("");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (userCredential) navigate("/");
      })
      .catch((err) => {
        let friendlyMessage = "";
        switch (err.code) {
          case "auth/invalid-email":
            friendlyMessage = "Please enter a valid email address.";
            break;
          case "auth/user-not-found":
            friendlyMessage = "No account found with this email.";
            break;
          case "auth/wrong-password":
            friendlyMessage = "Incorrect password. Please try again.";
            break;
          default:
            friendlyMessage =
              "Authentication failed. Please check your credentials.";
        }
        setError(friendlyMessage);
      });
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-black text-white selection:bg-red-500">
      {/* LEFT SECTION: BRANDING & VISUAL */}
      <div className="relative flex-1 md:flex flex-col justify-between p-12 overflow-hidden border-r border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HeroImage}
            alt="Nova Aesthetic"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/20 to-transparent"></div>
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
          <p className="hidden sm:block text-white/60 font-extralight max-w-sm leading-relaxed text-sm md:text-base">
            Create an account to unlock exclusive drops and experience seamless
            shopping.
          </p>
        </motion.div>
      </div>

      {/* RIGHT SECTION: LOGIN FORM */}
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md space-y-8"
        >
          {/* Header */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight">Sign In</h1>
            <p className="text-white/40 font-extralight mt-2">
              Enter your credentials to manage your Nova account.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
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
                  placeholder="••••••••"
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
              onClick={signIn}
              className="w-full bg-white text-black font-bold py-4 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform active:scale-[0.98]"
            >
              Access Account
            </button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-white/40 font-extralight">
              New to Nova?{" "}
              <Link
                to="/Signup"
                className="text-white hover:text-red-500 font-bold transition-colors underline decoration-white/10 underline-offset-4"
              >
                Create an account
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
