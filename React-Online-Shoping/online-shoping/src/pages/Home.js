import React from "react";
import Announcement from "../Components/Announcement/Announcement";
import Navbar from "../navbar/Navbar";
import Slider from "../slider/Slider";

const Home = () =>{

    return(
        <div className="home-container">
            <Announcement/>
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home;