import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactUs from "../pages/Contact";
import AboutUs from "../pages/About";
import Tracking from "../pages/OrderTracking";
import Checkout from "../components/Checkout";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route
        path="/checkout"
        element={
          <Checkout
            onClose={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      />
    </Routes>
  );
}
