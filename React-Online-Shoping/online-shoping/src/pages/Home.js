import React from "react";
import Announcement from "../Components/Announcement/Announcement";
import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";
import Categories from "../categories/Categories";
import Bestseller from "../products/Bestseller";
import NewArrivals from "../products/NewArrivals";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

const Home = () =>{

    return(
        <div className="home-container">
            <Announcement/>
            <Navbar />
            <Slider />
            <Categories />
            <Bestseller />
            <NewArrivals />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home;