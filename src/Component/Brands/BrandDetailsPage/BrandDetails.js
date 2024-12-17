import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaAngleRight,FaStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import './Branddetail.scss'
import { handleIsBrand } from '../../Slice';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

    const BrandDetail=()=>{

        let state=useSelector((samp)=>samp)
        let dispatch=useDispatch()

        const[isread,setRead]=useState(false)

        let [param]=useSearchParams()
        console.log(param.get('id'));
        let y;
        y=state.car.cars.filter((e)=>{
                return e.brandName==param.get('id')
        })
        console.log(y);
        // let x=state.car.Brand.map((e)=>{
        //     return e.id==param.get('id') ?y= e.particularBrand.filter((a)=>{
        //             return a
        //     }):e
        // })
        let name=y.map((e)=>{
            return e.brandName
        });
        console.log(name[0]);
        let nav=useNavigate()
        const hanBrand=(id,brandName)=>{
            nav(`/branddetail?id=${brandName}`)

        let c = state.car.Brand.map((e)=>{
                return e.id===id ? e.isbrand===true?{...e,isbrand:false}:{...e,isbrand:true}:{...e,isbrand:true}
            })
            console.log(c,"isbrand");
            dispatch(handleIsBrand(c))
        }
        
        const detailshandle=(id,carName)=>{
            nav(`/detailspage?id=${id}`)
           
        }

        return <>
           
             <div id='branddetailSection'>
                <div className='container'>
                    <div className='title'>
                        <h1>{name[0]} Cars</h1>
                        <p>{name[0]} car price starts at Rs 3.99 Lakh for the cheapest model which is Alto K10 and the price of most expensive model, which is Invicto starts at Rs 24.80 Lakh.
                            {name[0]} offers 17 car models in India, including 2 cars in SUV category, 1 car in Sedan category, 
                             7 cars in Hatchback category, 2 cars in Compact SUV </p>
                        <a href='#'>Read more</a>     
                    </div>
                   
                    <div className='row'>         
                        <div className='carscol'>
                        <h3 className='modelname'>{name[0]} Car Models</h3>
                        {y.map((e)=>{
                            return (
                                <div className='col'>
                                    <div className='card'>
                                        <div className='imgDiv' onClick={()=>detailshandle(e.id,e.carname)}><img src={e.img} /></div>
                                        <div className='content'>
                                            <div className='namerate'>
                                                <div className='name'><p>{e.carname}</p><i><FaAngleRight /></i></div>
                                                <div className='rating'>
                                                    <div className='starrate'><i><FaStar/></i><p>{e.rating}<sub>/5</sub></p></div>
                                                    <div className='ratecount'><p>{e.ratingcount} Ratings</p></div>
                                                </div>
                                            </div>
                                            <div className='km-bhp'>
                                               {e.isstar?<div className='star'><p>{e.star}</p></div>:""} 
                                                <div className='kmpl'><p>{e.kmpl} kmpl</p></div>
                                                <div className='bhp'><p>{e.bhp} bhp</p></div>
                                            </div>
                                            <div className='amount'>
                                                <h3>Rs.{e.price} Lakh</h3>
                                                <span>&nbsp;onwards</span>
                                              {e.offer ? <p><i>&nbsp;<BiSolidOffer/></i>&nbsp;Offers</p> : ""}  
                                            </div>
                                            <p className='avg'>Avg. Ex-Showroom price</p>
                                            <div className='getoffer'><a href='#'>Get Best Offer</a></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                        <div className='col2'>                                                                                                                            
                                {state.car.Brand?.map((e)=>{
                                    return e.isbrand?(
                                        <div className='row2'>
                                            <div className='card2' onClick={()=>hanBrand(e.id,e.brandName)}>
                                                <div className='imgDiv2'><img src={e.brandImgUrl}/></div>
                                                <p>{e.brandName}</p>
                                            </div>
                                        </div>
                                    ):""
                                })}
                            
                        </div>
                    </div>
                </div>
            </div> 
        </>
    }
export default BrandDetail    