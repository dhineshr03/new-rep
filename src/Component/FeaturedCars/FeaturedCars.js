import React from 'react'
import './FeaturedCars.scss'
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';
import { FaInfo } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { BiSolidOffer } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";

    const FeaturedCars=()=>{

      let state=useSelector((samp)=>samp)
      console.log(state.car);

        var settings = {
            dots:false,
            infinite: false,
            autoplay:true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

      const[istrend,setTrend]=useState(true)
      const[ispopular,setPopular]=useState(false)
      const[isupcome,setUpcome]=useState(false)    

      let trandingCar=state.car.cars.filter((e)=>{
                return e.trandCar===true
      })

      let popularCar=state.car.cars.filter((e)=>{
        return e.popularCar===true
      })
      let upcomingCar=state.car.cars.filter((e)=>{
        return e.upcomeCar===true
      })
      console.log(trandingCar,"tranding");
      console.log(popularCar,"popularcar");
      console.log(upcomingCar,"upcome");

      
        const hantrend=()=>{
          setTrend(true)
          setPopular(false)
          setUpcome(false)
          
          
        }
        const hanpopular=()=>{
          setTrend(false)
          setPopular(true)
          setUpcome(false)
        }
        const hanupcome=()=>{
          setTrend(false)
          setPopular(false)
          setUpcome(true)
        }
       let nav=useNavigate()
        const detailshandle=(id,carName)=>{
            nav(`/detailspage?id=${id}`)
           
        }

        return <>
            <div id='carfeaturedSection'>
                <div className='container'>
                    <h3>Featured Cars</h3>
                    <div className='types'>
                        <div className='type'>{istrend ? <p onClick={hantrend} style={{color:"#00AFA0",fontWeight:"bolder",borderBottom:"3px solid #00AFA0"}}>TRENDING</p>:<p onClick={hantrend}>TRENDING</p>}</div>
                        <div className='type'>{ispopular ? <p onClick={hanpopular} style={{color:"#00AFA0",fontWeight:"bolder",borderBottom:"3px solid #00AFA0"}}>POPULAR</p> : <p onClick={hanpopular}>POPULAR</p> }</div>
                        <div className='type'>{isupcome? <p onClick={hanupcome} style={{color:"#00AFA0",fontWeight:"bolder",borderBottom:"3px solid #00AFA0"}}>UPCOMING</p> : <p onClick={hanupcome}>UPCOMING</p>}</div>
                    </div>
                    <div className='row'>
                    { istrend?
                    <Slider {...settings}>
                    {
                            trandingCar.map((e)=>{
                                return <>
                                    <div className='col'>
                                        <div className='card' >
                                            <div className='imgDiv'onClick={()=>detailshandle(e.id,e.carname)}><img src={e.img} /></div>
                                            <div className='content'>
                                                <p className='carname'>{e.carname}</p>
                                                <p className='carprice'>Rs.{e.price} Lakh<span>&nbsp;&nbsp;onwards</span>
                                                {e.offer ? <p><i>&nbsp;<BiSolidOffer/></i>&nbsp;OFFERS<FaAngleRight/></p> : ""}</p>
                                                <p className='avg'>Avg. Ex-Showroom price</p>
                                                <div className='btnDiv'><button>Show price in my city</button></div>
                                            </div>
                                         </div>
                                    </div>
                             </>
                            })
                        }
                    </Slider>
                 :"" }  

                   { ispopular?
                    <Slider {...settings}>
                    {
                            popularCar.map((e)=>{
                                return <>
                                    <div className='col'>
                                        <div className='card'>
                                            <div className='imgDiv' onClick={()=>detailshandle(e.id,e.carname)}><img src={e.img} /></div>
                                            <div className='content'>
                                                <p className='carname'>{e.carname}</p>
                                                <p  className='carprice'>Rs.{e.price} Lakh<span>&nbsp;&nbsp;onwards</span>
                                                {e.offer ? <p><i>&nbsp;<BiSolidOffer/></i>&nbsp;OFFERS<FaAngleRight/></p> : ""}</p>
                                                <p className='avg'>Avg. Ex-Showroom price</p>
                                                <div className='btnDiv'><button>Show price in my city</button></div>
                                            </div>
                                         </div>
                                    </div>
                             </>
                            })
                        }
                    </Slider>
                 :"" }

                   { isupcome?
                    <Slider {...settings}>
                    {
                            upcomingCar.map((e)=>{
                                return <>
                                    <div className='col'>
                                        <div className='card'>
                                            <div className='imgDiv' onClick={()=>detailshandle(e.id,e.carname)}><img src={e.img} /></div>
                                            <div className='content'>
                                                <p className='carname'>{e.carname}</p>
                                                <p  className='carprice'>Rs.{e.upcomeStartPrice}&nbsp;-&nbsp;{e.upcomeEndPrice}Lakh<span>&nbsp;&nbsp;Estimated Price</span></p>
                                               
                                                <div className='dates'>
                                                  <div className='unveilDate'><p className='avg'>{e.upcomeUnveilDate}</p></div>
                                                  <div className='launchDate'><p>{e.upcomeLaunchDate}</p></div>
                                                  <div className='infoIcon'><i><FaInfo/></i></div>
                                                </div>
                                                 
                                                <div className='btnDiv'><button>Show price in my city</button></div>
                                            </div>
                                         </div>
                                    </div>
                             </>
                            })
                        }
                    </Slider>
                 :"" } 
                        
                    </div>
                </div>
            </div>
        </>
    }
export default FeaturedCars