import React from "react";
import './LakhFilter.scss'
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

    const LakhFilterPage=()=>{
 
        let state=useSelector((samp)=>samp)
      
        let [param]=useSearchParams()
        let a=param.get('price');
        let b=a.replace('Under','')
        console.log(b);
        let carPrice=b.replace('Lakh','')
        console.log(carPrice);

        let filterArr=state.car.cars.filter((e)=>{
            return parseInt(carPrice)===5?e.price<=parseInt(carPrice) && e.price>=1:
                 parseInt(carPrice)===6?e.price<=parseInt(carPrice) && e.price>=5:
                 parseInt(carPrice)===7?e.price<=parseInt(carPrice) && e.price>=6:
                 parseInt(carPrice)===8?e.price<=parseInt(carPrice) && e.price>=7:
                 parseInt(carPrice)===10?e.price<=parseInt(carPrice) && e.price>=8:
                 parseInt(carPrice)===15?e.price<=parseInt(carPrice) && e.price>=10:
                 parseInt(carPrice)===20?e.price<=parseInt(carPrice) && e.price>=15:
                 parseInt(carPrice)===25?e.price<=parseInt(carPrice) && e.price>=20:
                 parseInt(carPrice)===30?e.price<=parseInt(carPrice) && e.price>=25:
                 parseInt(carPrice)==="Luxury Cars"?e.price>30:e.price>30
        })
        console.log(filterArr,"arr");

        let nav=useNavigate()
        const detailshandle=(id,carName)=>{
            nav(`/detailspage?id=${id}`)
           
        }
        return <>
            <div id="lakhfilterSection">
                <div className="container">
                    <div className="title">
                        <h2>Best Cars Under {carPrice} Lakh</h2>
                        <p>Are you planning on buying a car under Rs. {carPrice} lakh? Well, we know that budget is one of the most crucial things while buying a car and with so many options available out there,
                         it gets really difficult to find a good car which suits your pocket. Hence, we have put together a complete list of best cars</p>
                        <a href="#">Read More</a>
                    </div>
                    <div className="carstotal">
                        <h3>{filterArr.length} Cars Under {carPrice} Lakh</h3>
                    </div>
                    <div className="row">
                        
                        {filterArr.map((e)=>{
                            return (
                                <div className="col">
                                    <div className="card">
                                        <div className="imgDiv" onClick={()=>detailshandle(e.id,e.carname)}><img src={e.img} /></div>
                                            <div className="content">
                                                <h4>{e.carname} <span><IoIosArrowForward /></span></h4>
                                                <p className="price">Rs. {e.price} Lakh</p>
                                                <p className="avg">Avg. Ex-Showroom price</p>
                                                <a href="#">Show price in my city</a>
                                            </div>
                                    </div>
                                </div>
                            )
                        })}
                      
                    </div>
                </div>
            </div>
        </>
    }
export default LakhFilterPage    