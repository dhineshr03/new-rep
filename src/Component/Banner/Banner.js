import React from 'react'
import './Banner.scss'
import { FaAngleDown ,FaSearch} from "react-icons/fa";

    const Banner=()=>{


        return <>
            <div id='bannerSec'>
                <div className='bg-img'>
                    <div className='content'>
                        <div className='head'><h5>FIND THE RIGHT CAR</h5></div>
                        <div className='row2'>
                            <div className='col1'>
                                <div><p>New</p></div>
                                <div className='downArrow'><i><FaAngleDown /></i></div>
                            </div>
                            <div className='col2'>
                                <div className='iconDiv'><i><FaSearch/></i></div> 
                                <div className='inputDiv'><input type='text' placeholder='Type to select car name'></input></div>
                            </div>
                            <div className='col3'><button>Search</button></div>
                        </div>
                        <div className='row3'>
                            <div className='eg'>
                                <div><p>e.g.</p></div>
                                <div><a href='#'>Porsche Panamera</a></div>
                            </div>
                           <div className='col4'>
                                <div><a href='#'>New Car Discounts |</a></div>
                                <div><a href='#'>Help Me Find A Car |</a></div>
                                <div><a href='#'>Sell My Car</a></div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }
export default Banner