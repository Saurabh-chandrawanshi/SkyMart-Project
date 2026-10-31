// import React, { useState } from "react";
// import Register from "./Components/Register";
// import Logo from "./Components/Logo";
// import SighIn from "./Components/SighIn";
// import FeaturedProducts from "./Components/FeaturedProducts";
import Navbar from "./Components/navbar";
import About from "./pages/About";
// import Home from "./Components/Home";
// import Footer from "./Components/Footer";
// import CategorySection from "./Components/CategorySection";
import ProductListing from "./Components/ProductListing";

const App = () => {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [isOpen, setisOpen] = useState(false);
  

  return (
<div className=""> 
 <Navbar />
 {/* <div>
  <Home />
 <CategorySection />
 <FeaturedProducts />
 <Footer />
 </div> */}
 
  {/* <ProductListing
  
/> */}
<About />
  </div>
 

    
  );
};

export default App;
