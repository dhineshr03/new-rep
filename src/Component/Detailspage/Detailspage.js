import React from 'react'
import './Detailspage.scss'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import { IoPlayCircleOutline,IoPricetag} from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { AiTwotoneDelete } from "react-icons/ai";
import { VscMilestone } from "react-icons/vsc";
import { PiEngine } from "react-icons/pi";
import {LuFuel} from "react-icons/lu";
import {TbTransformFilled} from "react-icons/tb";
import { MdOutlineAirlineSeatReclineExtra} from "react-icons/md";
import { GrNotes} from "react-icons/gr";
import { FaStar} from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";



    const Detailspage=()=>{

        let state=useSelector((samp)=>samp)

        let [param]=useSearchParams()
        console.log(param.get('id'),"carId");

        let arr=state.car.cars.find((e)=>{
                return e.id===Number(param.get('id'))
        })
        console.log(arr,"detailscarArry");
        console.log(arr.carname);

        return <>
            <div id='detailsPageSection'>
                <div className='container'>
                    <div className='detail-top-adds'><img src='https://tpc.googlesyndication.com/simgad/16530968551337684404'/></div>
                    <div className='carname'><h3>{arr.carname}</h3></div>
                    <div className='stars-rating'>
                        <div className='stars'>
                            <div className='star'><i><FaStar /></i></div>
                            <div className='star'><i><FaStar /></i></div>
                            <div className='star'><i><FaStar /></i></div>                         
                            <div className='star'><i><FaRegStarHalfStroke /></i></div>
                            <div className='star'><i><FaRegStar /></i></div>
                        </div>
                        <div className='rating'>
                            <a href='#'>{arr.ratingcount} Ratings</a>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <div className='imgDiv'><img src={arr.img} /></div>
                            <div className='colors'>
                                <div className='color'><i><IoColorPaletteOutline /></i>&nbsp;<span>Colours</span></div>
                                <div className='color'><i><FaRegImages /></i>&nbsp;<span>Images</span></div>
                                <div className='color'><i><IoPlayCircleOutline /></i>&nbsp;<span>Videos</span></div>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='variant-flex'>
                                <div className='variant'>
                                    <div>
                                        <h5>Variant</h5>
                                        <p>Select Variant</p>
                                    </div>
                                    <div className='right-arrow'><i><IoIosArrowForward /></i></div>
                                </div>
                                <div className='variant'>
                                    <div>
                                        <h5>City</h5>
                                        <p>Show price in my city</p>
                                    </div>
                                    <div className='right-arrow'><i><IoIosArrowForward /></i></div>
                                </div>
                            </div>
                            <div className='amount'>
                                <h3>Rs. 7.47 - 13.14 Lakh</h3>
                                <p className='avg'>Avg. Ex-Showroom price</p>
                                <i><AiTwotoneDelete /> Available only in Nexa showroom</i>
                                <div className='calculates'>
                                    <div className='calculate'>
                                        <p>Calculate your EMI</p>
                                        <a href='#'>EMI Calculator</a>
                                    </div>
                                    <div className='emioffer-btn'>
                                        <button>Get EMI Offers</button>
                                    </div>
                                </div>
                               <div className='year-end-btn'><button>Get Year-End Offers</button></div> 
                            </div>
                        </div>
                    </div>

                    <div className='CarSpecifications'>
                       <div className='carname'> <h3>{arr.carname} Car Specifications</h3></div>
                        <div className='speci-row'>
                            <div className='speci-col1'>
                                <div className='speci-col1-1'>
                                    <div className='speci-inlineflex'><i><IoPricetag/></i>&nbsp;<p>Price</p></div>
                                    <p>Rs.{arr.price} Lakh onwards</p>
                                </div>
                                <div className='speci-col1-1'>
                                    <div className='speci-inlineflex'><i><VscMilestone/></i>&nbsp;<p>Mileage</p></div>
                                    <p>{arr.kmpl} kmpl </p>
                                </div>
                                <div className='speci-col1-1'>
                                    <div className='speci-inlineflex'><i><PiEngine /></i>&nbsp;<p>Engine</p></div>
                                    <p>{arr.bhp} cc</p>
                                </div>
                                <div className='speci-col1-1'>
                                    <div className='speci-inlineflex'><i><LuFuel /></i>&nbsp;<p>Fuel Type</p></div>
                                    <p>{arr.fuelType}</p>
                                </div>
                                <div className='speci-col1-1'>
                                    <div className='speci-inlineflex'><i>< TbTransformFilled/></i>&nbsp;<p>Transmission</p></div>
                                    <p>Manual & Automatic</p>
                                </div>
                                <div className='speci-col1-1'>
                                    <div className='speci-inlineflex'><i><MdOutlineAirlineSeatReclineExtra/></i>&nbsp;<p>Seating Capacity</p></div>
                                    <p>{arr.seatcount} Seater</p>
                                </div>
                            </div>
                            <div className='speci-col2'>
                                    <div className='speci-add'><img src='https://tpc.googlesyndication.com/simgad/5403870899736542904' /></div>
                            </div>
                        </div>
                    </div>

                    <div className='carSummary'>
                        <div className='summary-title'><h3>All New {arr.carname} Summary</h3></div>
                        <div className='summary-content'>
                            <h5>Latest Update</h5>
                            <p>New {arr.carname} launched,price announced</p>
                            <p>Price</p>
                            <a href='#'>Read More</a>
                        </div>
                    </div>

                    <div className='car-Price-detail'>
                        <div className='priceDetail-row'>
                            <div className='priceDetail-col'>
                                <div className='priceDetail-title'>
                                    <h3>{arr.carname} Price</h3><br></br>
                                    <p>{arr.carname} price for the base model starts at Rs. 7.47 Lakh and the top model price
                                         goes upto Rs. 13.14 Lakh (Avg. ex-showroom). Fronx price for 4 variants is listed below.</p>
                                </div>
                                <div className='price-btns'>
                                    <h5>Filter By Fuel type & Transmission</h5>   
                                    <div className='filter-btns'>
                                        <div className='filter-btn'><button>Petrol</button></div>
                                        <div className='filter-btn'><button>CNG</button></div>
                                        <div className='filter-btn'><button>Manual</button></div>
                                        <div className='filter-btn'><button>Automatic(AMT)</button></div>
                                        <div className='filter-btn'><button>Automatic(TC)</button></div>
                                    </div>
                                </div>
                            <div className='price-box'>
                                <div className='price-box-row'>
                                    <div className='price-box-heading'>
                                        <h3>Variants</h3>
                                        <div className='price-box-carname'>
                                            <h6>Fronx Sigma 1.2L MT</h6>
                                            <p>1197 cc, Petrol, Manual, 21.79 kmpl, 89 bhp</p>
                                        </div>
                                        <div className='price-box-carname'>
                                            <h6>Fronx Delta 1.2L MT</h6>
                                            <p>1197 cc, Petrol, Manual, 21.79 kmpl, 89 bhp</p>
                                        </div>
                                        <div className='price-box-carname'>
                                            <h6>Fronx Sigma 1.2L CNG</h6>
                                            <p>1197 cc, Petrol, Manual, 21.79 kmpl, 89 bhp</p>
                                        </div>
                                        <div className='price-box-carname'>
                                            <h6>Fronx Delta plus 1.2L MT</h6>
                                            <p>1197 cc, Petrol, Manual, 21.79 kmpl, 89 bhp</p>
                                        </div>
                                    </div>
                                    <div  className='price-box-heading'>
                                        <h3 >Ex-Showroom price</h3>
                                        <div className='price-box-amount'><h4>Rs. 7.47 Lakh</h4></div>
                                        <div className='price-box-amount'><h4>Rs. 8.32 Lakh</h4></div>
                                        <div className='price-box-amount'><h4>Rs. 8.41 Lakh</h4></div>
                                        <div className='price-box-amount'><h4>Rs. 8.73 Lakh</h4></div>
                                    </div>
                                    <div  className='price-box-heading'>
                                        <h3>Compare</h3>
                                        <div className='price-box-checkbox'>
                                            <div className='checkbox-div'>
                                                <lable>Add to compare</lable>&nbsp;
                                                <input type='checkbox'></input>
                                            </div><br></br>
                                            <div className='price-offers'>
                                                <a href='#' className='right-border'>Show price in my city</a>
                                                <a href='#'>Get Offers</a>
                                            </div>
                                           
                                        </div>
                                        <div className='price-box-checkbox'>
                                            <div className='checkbox-div'>
                                                <lable>Add to compare</lable>&nbsp;
                                                <input type='checkbox'></input>
                                            </div><br></br>
                                            <div className='price-offers'>
                                                <a href='#' className='right-border'>Show price in my city</a>
                                                <a href='#'>Get Offers</a>
                                            </div>
                                        </div>
                                        <div className='price-box-checkbox'>
                                             <div className='checkbox-div'>
                                                 <lable>Add to compare</lable>&nbsp;
                                                 <input type='checkbox'></input>
                                            </div><br></br>
                                            <div className='price-offers'>
                                                <a href='#' className='right-border'>Show price in my city</a>
                                                <a href='#'>Get Offers</a>
                                            </div>
                                        </div>
                                        <div className='price-box-checkbox'>
                                            <div className='checkbox-div'>
                                                <lable>Add to compare</lable>&nbsp;
                                                <input type='checkbox'></input>
                                            </div><br></br>
                                            <div className='price-offers'>
                                                <a href='#' className='right-border'>Show price in my city</a>
                                                <a href='#'>Get Offers</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='view-more-variants'>
                                    <a href='#'>View More Variants</a>
                                </div>
                            </div>
                            </div>
                            <div className='priceDetail-col2'>
                                    <div clasName='priceDetail-col2-add1'>
                                        <img src='https://tpc.googlesyndication.com/simgad/7637257884259887912'/>
                                    </div>
                                    <div clasName='priceDetail-col2-add2'>
                                        <img src='https://tpc.googlesyndication.com/simgad/5403870899736542904' />
                                    </div>
                            </div>
                        </div>
                        <div className='Brochure'>
                            <div className='brochure-icon'><i><GrNotes /></i></div>
                            <div className='brochure-carname'>
                                <h4>{arr.carname} 2023 Brochure</h4>
                                <p>Download the brochure in just one click to view {arr.carname} Price,
                                Specs and features of all the variants </p>
                                <a href='#'>Check OtherCar's Brochure </a><i><IoIosArrowForward/></i>
                            </div>
                            <div className='brochure-button'>
                                <button>Download Brochure</button>
                            </div>
                        </div>
                    </div>

                    <div className='mileagedetails-Section'>
                        <div className='mileage-title'>
                            <h3>{arr.carname} Mileage</h3>
                            <p>{arr.carname} mileage claimed by ARAI is {arr.kmpl} kmpl</p>
                        </div>
                        <div className='mileage-row'>
                            <div className='mileage-col1'>
                                <div className='mileage-Table'>
                                    <div className='mileage-table-col'>
                                        <h4>Fuel Type</h4>
                                        <h5>Petrol | <span>1197 cc</span></h5>
                                        <h5>Petrol | <span>1197 cc</span></h5>
                                        <h5>Petrol | <span>1198 cc</span></h5>
                                        <h5>Petrol | <span>1198 cc</span></h5>

                                    </div>
                                    <div className='mileage-table-col'>
                                        <h4>Transmission</h4>
                                        <h5>Manual</h5>
                                        <h5>Automatic[AMT]</h5>
                                        <h5>Manual</h5>
                                        <h5>Automatic[TC]</h5>
                                    </div>
                                    <div className='mileage-table-col'>
                                        <h4>ARAI Mileage</h4>
                                        <h5>{arr.manual97Millage} kmpl</h5>
                                        <h5>{arr.automaticMillage} kmpl</h5>
                                        <h5>{arr.manual98Millage} kmpl</h5>
                                        <h5>{arr.automaticTcMillage} kmpl</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='mileage-col2'>
                                <h3>Car Buyer's Tools</h3>
                                <div className='mileage-col2-addCard'>
                                    <div className='mileage-col2-addCard-img'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/car-loans-02.svg'></img></div>
                                    <div className='mileage-col2-addcontent'>
                                        <h5>Instant Car Loan</h5>
                                        <p>Apply and Get Best Car Loan Offers within minutes</p>
                                    </div>
                                </div>
                                <div className='mileage-col2-addCard'>
                                    <div className='mileage-col2-addCard-img'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/tools/locate-dealer.svg' ></img></div>
                                    <div  className='mileage-col2-addcontent'>
                                        <h5>Instant Car Loan</h5>
                                        <p>Apply and Get Best Car Loan Offers within minutes</p>
                                    </div>
                                </div>
                                <div className='mileage-col2-addCard'>
                                    <div className='mileage-col2-addCard-img'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/circle/select-car.svg'/></div>
                                    <div  className='mileage-col2-addcontent'>
                                        <h5>Instant Car Loan</h5>
                                        <p>Apply and Get Best Car Loan Offers within minutes</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>


                    <div className='details-carImages'>
                        <div className='details-carImages-title'><h3>{arr.carname} Images</h3></div>
                        <div className='details-carImages-row'>
                            <div className='details-carImages-col1'>
                                <div className='details-carImages-col1-row'>
                                    <div className='detail-carimage1'><img src={arr.img1}/></div>
                                    <div  className='detail-carimage2'><img src={arr.img2}/></div>
                                    <div  className='detail-carimage3'><img src={arr.img3}/></div>
                                    <div className='detail-carimage4flex'>
                                        <div  className='detail-carimage4'><img src={arr.img4}/></div>

                                        <div  className='detail-carimage5'>
                                            <img src={arr.img5}/>
                                            <img className='detail-carimage-blur' src={arr.img6}/>
                                            <div className='detail-carimage5-child'>
                                                <h4>View All Images(160)</h4>
                                            </div>
                                        </div>

                                    </div>
                                    
                                </div>
                            </div>
                            <div  className='details-carImages-col2'>
                                    <div  className='details-carImages-col2-adds'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxgRhbDPXpLtShzWGLgfn4mm7nKkaywyxzg&usqp=CAU'/></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        
        </>
    }
export default Detailspage
