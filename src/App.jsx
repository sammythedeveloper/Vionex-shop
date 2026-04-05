import React, { useEffect } from "react";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/Firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, NavBar, Products } from "./Components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SignUp from "./Components/SignUp";
import Signin from "./Components/Signin";
import LandingPage from "./Components/LandingPage";
import Checkout from "./Components/Checkout";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import Footer from "./Components/Footer";
import ProtectedRoute from "./ProtectedRoute";
import ProductPage from "./Components/ProductPage";
import ScrollToTop from "./Components/ScrollToTop";

const key = loadStripe(
  "pk_test_51OMyLMHyEXHJUIn2SiwK4uPGQ7UCWEHnnLHu00idi1F21aJF5sL2fjawdt9zjKHbLuCK7aGctzxINMaheR70WQr500uAwonRLZ"
);
const App = () => {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        dispatch({ type: "SET_USER", user: null });
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-black min-h-screen">
              <LandingPage />
              <Footer />
            </div>
          }
        />

        {/* --- PUBLIC SHOP ROUTES --- */}
        <Route
          path="/shop"
          element={
            <>
              <NavBar />
              <HomePage />
              <Footer />
            </>
          }
        />

        <Route
          path="/category/:category"
          element={
            <>
              <NavBar />
              <ProductPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/Products"
          element={
            <>
              <NavBar />
              <Products />
              <Footer />
            </>
          }
        />

        {/* --- CHECKOUT & AUTH --- */}
        <Route
          path="/Checkout"
          element={
            <>
              <NavBar />
              <Checkout />
              <Footer />
            </>
          }
        />
        <Route
          path="/SignUp"
          element={
            <>
              <SignUp />
              <Footer />
            </>
          }
        />
        <Route
          path="/Signin"
          element={
            <>
              <Signin />
              <Footer />
            </>
          }
        />

        {/* --- PROTECTED ROUTES --- */}
        {/* Only logged-in users can reach these */}
        <Route
          path="/Payment"
          element={
            <ProtectedRoute>
              <NavBar />
              <Elements stripe={key}>
                <Payment />
              </Elements>
              <Footer />
            </ProtectedRoute>
          }
        />

        <Route
          path="/Orders"
          element={
            <ProtectedRoute>
              <NavBar />
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
