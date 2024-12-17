import React from "react";
import './Navbar.scss'
import logo from '../../images/logo.svg'
import { FaSearch,FaMapMarkerAlt,FaLanguage,FaRegUserCircle} from "react-icons/fa";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import FeaturedCars from "../FeaturedCars/FeaturedCars";
import Brand from "../Brands/Brand";
import Findlakh from "../FindLakh/Findlakh";
import Comparecar from "../CompareCar/Comparecar";

    const Navbar=()=>{

        return <>
            <div id="navbarSec">
                <div className="container">
                    <div className="row">
                        <div className="col1">
                            <div className="logoDiv"><img src={logo} /></div>
                        </div>
                        <div className="col2">
                            <div className="row2">
                                <div><p>NEW CARS</p></div>
                                <div><p>USED CARS</p></div>
                                <div><p>REVIEWS & NEWS</p></div>
                            </div>
                        </div>
                        <div className="col3">
                            <div className="row3">
                                <div className="inputDiv"><input type="text" placeholder="Search"></input></div>
                                <div className="search-icon-Div"><i><FaSearch/></i></div>
                            </div>
                            <div className="col3-icons">
                                <div className="icon"><i><FaMapMarkerAlt/></i></div>
                                <div className="icon"><i><FaLanguage/></i></div>
                                <div className="icon"><i><FaRegUserCircle/></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Banner/>
            <FeaturedCars/>
            <Brand/>
            <Findlakh/>
            <Comparecar/>
            <Footer/> */}
        </>
    }

export default Navbar