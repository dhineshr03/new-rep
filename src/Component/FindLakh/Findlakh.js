import React from 'react'
import './Findlakh.scss'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

    const Findlakh=()=>{
        
        let state=useSelector((samp)=>samp)
        console.log(state.car.findlakh);

        let nav=useNavigate()
        const handleBtn=(price)=>{
                nav(`lakhFilterPage?price=${price}`)
        }

        return <>
            <div id='findSection'>
                <div className='container'>
                    <div className='head'><h3>Find The Cars Of Your Choice</h3></div>
                    <div className='row'>
                        {state.car.findlakh.map((e)=>{
                            return (
                                <div className='col'>
                                    <div className='btnDiv'><button onClick={()=>handleBtn(e.price)}>{e.price}</button></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    }
export default Findlakh    