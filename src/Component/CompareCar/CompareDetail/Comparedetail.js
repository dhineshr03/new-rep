import React, { useState } from 'react'
import './Comparedetail.scss'
import { useSelector } from 'react-redux';
import Comparecar from '../Comparecar';
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';




    const Comparedetail=()=>{

        let state=useSelector((samp)=>samp)
        console.log(state.car.compare1);
        console.log(state.car.compare2);
        console.log(state.car.compareCarname1,"carname1");
        console.log(state.car.compareCarPrice1,"price1");
        const[compareid1,setCompare1]=useState(state.car.compare1)
        const[compareid2,setCompare2]=useState(state.car.compare2)
        const[compareCarname1,setCarname1]=useState(state.car.compareCarname1)
        const[compareCarname2,setCarname2]=useState(state.car.compareCarname2)
        const[comparePrice1,setPrice1]=useState(state.car.compareCarPrice1)
        const[comparePrice2,setPrice2]=useState(state.car.compareCarPrice2)
        
        let arr=state.car.cars.filter((e)=>{
            return e.id===compareid1 || e.id===compareid2      
        })
        console.log(arr);
        console.log();
        let nav=useNavigate()
        const detailshandle=(id,carName)=>{
            nav(`/detailspage?id=${id}`)
           
        }
        return <>
            <div id='compareDetailSection'>
                <div className='compareDetail-container'>
                    <div className='compare-title'>
                        <h3>{compareCarname1} VS {compareCarname2}</h3>
                          <p>CarWale brings you comparison of {compareCarname1} and {compareCarname2}. The Hyundai Creta price is Rs. {comparePrice1} Lakh 
                                    and Tata Safari price is Rs. {comparePrice2} Lakh. The {compareCarname1} is available in 1493 cc engine with 1 fuel type
                                     options: Diesel and {compareCarname2} is available in 1956 cc engine with 1 fuel type options: Diesel. 
                                     Safari provides the mileage of 16.3 kmpl.</p>
                    </div>
                    <div className='comparecar'>
                        <div className='comparecar-row'>
                            {arr.map((e)=>{
                                return <>
                                    <div className='comparecar-col'>
                                        <div onClick={()=>detailshandle(e.id,e.carname)}><img src={e.img} /></div>
                                        <a href='#'>{e.carname}</a>
                                        <h4><i><MdOutlineCurrencyRupee/></i>{e.price} Lakh</h4>
                                        <p>Avg Ex-Shoroom price</p>
                                        <button>Get Offers</button>
                                    </div>
                                </>
                            })}
                            <div className='vs'><h5>VS</h5></div>
                        </div>
                    </div>
                    <div className='options'>
                        <div className='option'style={{borderBottom:"3px solid #04cf70"}}><p style={{color:"#04cf70"}}>SPECIFICATIONS</p></div>
                        <div className='option'><p>FEATURES</p></div>
                        <div className='option'><p>BROCHURE</p></div>
                        <div className='option'><p>EXPERTSOPINION</p></div>
                        <div className='option'><p>COLOURS</p></div>
                        <div className='option-icon'><i><FaAngleRight /></i></div>
                        <div className='option-searchbox'>
                            <div className='option-searchbox-icon'><i><CiSearch /></i></div>
                            <div className='option-searchbox-input'><input type='text' placeholder='Search a spec or feature'></input></div>
                        </div>
                    </div>
                    <div className='comparecarsbox'>
                        <div className='top-head'><h3>Specifications and Finance</h3></div>
                        <div className='side-head'><h5>Engine & Transmission</h5></div>
                        <div className='engine-flex'>
                            <div className='engine-col1'>
                                <h6>Engine <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Engine Type <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Fuel Type<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Max Power (bhp@rpm) <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Max Torque (Nm@rpm)  <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Mileage (ARAI) (kmpl)<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Driving Range (Km) <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Drivetrain <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Transmission <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Emission Standard <br></br><a href='#'>(Known More)</a></h6>
                            </div>
                            <div className='engine-col2'>
                                <p>1197 cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC</p>
                                <p>1.2 Kappa</p>
                                <p>Petrol</p>
                                <p>82 bhp @ 6000 rpm</p>
                                <p>114 Nm @ 4000 rpm</p> 
                                <p>18.5 <a href='#'>View Mileage Details</a></p>
                                <p>684</p>
                                <p>FWD</p>
                                <p>Manual - 5 Gears</p>
                                <p>BS 6</p>
                            </div>
                            <div className='engine-col3'>
                                <p>1197 cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC</p>
                                <p>K15C Smart Hybrid</p>
                                <p>Petrol</p>
                                <p>102 bhp @ 6000 rpm</p>
                                <p>136.8 Nm @ 4400 rpm</p>
                                <p>20.3 <a href='#'>View Mileage Details</a></p>
                                <p>753</p>
                                <p>FWD</p>
                                <p>Manual - 5 Gears</p>
                                <p>BS 6</p>
                            </div>
                        </div>
                        <div className='side-head'><h5>Dimensions & Weight</h5></div>
                        <div className='engine-flex'>
                            <div className='engine-col1'>
                                <h6>Length (mm)<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Width (mm)<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Height (mm)<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Wheelbase (mm)<br></br><a href='#'>(Known More)</a></h6>
                                
                            </div>
                            <div className='engine-col2'>
                                <p>3990</p>
                                <p>1755</p>
                                <p>1523</p>
                                <p>2501</p>
                            </div>
                            <div className='engine-col3'>
                                <p>3995</p>
                                <p>1755</p>
                                <p>1506</p>
                                <p>2580</p>
                            </div>
                        </div>
                        <div className='side-head'><h5>Capacity</h5></div>
                        <div className='engine-flex'>
                            <div className='engine-col1'>
                                <h6>Doors (Doors)<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Seating Capacity<br></br><a href='#'>(Known More)</a></h6>
                                <h6>No of Rows (Rows)<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Bootspace (litres)<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Fuel Tank Capacity (litres)<br></br><a href='#'>(Known More)</a></h6>
                                
                            </div>
                            <div className='engine-col2'>
                                <p>5</p>
                                <p>5</p>
                                <p>2</p>
                                <p>260</p>
                                <p>37</p>
                            </div>
                            <div className='engine-col3'>
                                <p>5</p>
                                <p>5</p>
                                <p>2</p>
                                <p>328</p>
                                <p>42</p>
                            </div>
                        </div>
                        <div className='side-head'><h5>Suspensions, Brakes, Steering & Tyres</h5></div>
                        <div className='engine-flex'>
                            <div className='engine-col1'>
                                <h6>Front Suspension <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Rear Suspension <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Front Brake Type<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Rear Brake Type <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Minimum Turning Radius (metres) <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Steering Type<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Wheels<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Spare Wheel <br></br><a href='#'>(Known More)</a></h6>
                                <h6>Front Tyres<br></br><a href='#'>(Known More)</a></h6>
                                <h6>Rear Tyres<br></br><a href='#'>(Known More)</a></h6>
                            </div>
                            <div className='engine-col2'>
                                <p>McPherson Strut</p>
                                <p>Coupled Torsion Beam Axle</p>
                                <p>Disc</p>
                                <p>Drum</p>
                                <p>----</p> 
                                <p>Power assisted (Electric)</p>
                                <p>Steel Rims</p>
                                <p>Steel</p>
                                <p>175 / 60 R15</p>
                                <p>175 / 60 R15</p>
                            </div>
                            <div className='engine-col3'>
                                <p>Mac Pherson Strut & coil</p>
                                <p>Torsion Beam & CoiL Spring</p>
                                <p>Ventilated Disc</p>
                                <p>Drum</p>
                                <p>----</p>
                                <p>Power assisted (Electric)</p>
                                <p>Steel Rims</p>
                                <p>Steel</p>
                                <p>215 / 60 R16</p>
                                <p>215 / 60 R16</p>
                            </div>
                        </div>
                     
                    </div>
                    <div className='Disclaimer'>
                        <p>Disclaimer: For the above Comparison of Compare Grand i10 Nios, Brezza and Sonet, CarWale has taken utmost
                             care in gathering precise and accurate information about price, specs, features, colours etc, however,
                              CarWale cannot be held liable for any direct or indirect damage/loss. For Compare Grand i10 Nios, Brezza
                               and Sonet comparison, we have considered most popular variant on CarWale as default, however, any
                                variant of these cars can be compared.</p>
                    </div>
                </div>
            </div>
        </>
    }
 export default Comparedetail