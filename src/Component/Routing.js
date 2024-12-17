import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import FeaturedCars from "./FeaturedCars/FeaturedCars";
import Brand from "./Brands/Brand";
import Findlakh from "./FindLakh/Findlakh"; 
import Comparecar from "./CompareCar/Comparecar";
import Detailspage from "./Detailspage/Detailspage";
import BrandDetail from "./Brands/BrandDetailsPage/BrandDetails";
import LakhFilterPage from "./FindLakh/LakhFilter/LakhFilter";
import Home from "./Home";
import Comparedetail from "./CompareCar/CompareDetail/Comparedetail";

    const Routing=()=>{

        return <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/detailspage" element={<Detailspage/>}></Route>
                    <Route path="/branddetail" element={<BrandDetail/>}></Route>
                    <Route path="/lakhFilterPage" element={<LakhFilterPage/>}></Route>
                    <Route path='/comparepage' element={<Comparedetail/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    }

export default Routing