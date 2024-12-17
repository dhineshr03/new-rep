import React,{useState} from 'react'
import './Brand.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleIsBrand } from '../Slice';


    const Brand=()=>{

        let state=useSelector((samp)=>samp)
        console.log(state.car.Brand);
        let dispatch=useDispatch()
        // console.log(state.car.Brand.map((e)=>{
        //     return  e.particularBrand
        // }) ,"details");

        let nav=useNavigate()
        const hanBrand=(id,brandName)=>{
            nav(`/branddetail?id=${brandName}`)

        let c= state.car.Brand.map((e)=>{
                return e.id===id ? e.isbrand===true?{...e,isbrand:false}:{...e,isbrand:true}:{...e,isbrand:true}
            })
            console.log(c,"isbrand");
            dispatch(handleIsBrand(c))
        }

        return <>
            <div id='brandSection'>
                <div className='container'>
                    <div className='heading'><h3>All Brands</h3></div>
                    <div className='row'>
                        {state.car.Brand.map((e)=>{
                            return(
                                <div className='col' onClick={()=>hanBrand(e.id,e.brandName)}>
                                    <div className='card'>
                                        <div className='imgDiv'><img src={e.brandImgUrl}/></div>
                                        <p>{e.brandName}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        
        </>
    }
export default Brand    