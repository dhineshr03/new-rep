import React from 'react'
import './Footer.scss'
import { FaFacebookF,FaTwitter,FaYoutube,FaLinkedin,FaInstagram } from "react-icons/fa";  
    const Footer=()=>{

        return <>
            <div id='footerSec'>
                <div className='container'>
                    <div className='row1'>
                        <div className='col'><h3>carWale</h3></div>
                        <div className='col'><h3>carTrade</h3></div>
                        <div className='col'><h3>bikeWale</h3></div>
                        <div className='col'><h3>Mobility</h3><h3>Outlook</h3></div>
                        <div className='col'><h3>carwale</h3></div>
                    </div>
                </div>    
                    <div className='row2'>
                        <div className='col1'>
                            <div className='language'>
                                <div><p>Language:</p></div>
                                <div className='ans'><p>English</p></div>
                            </div>
                            <div className='about'>
                                <div><p>About Us</p></div>
                                <div className='ans'><p>Terms & Condition</p></div>
                            </div>
                            <div className='career'>
                                <div><p>Careers</p></div>
                                <div className='ans'><p>Advertise</p></div>
                            </div>
                        </div>
                        <div className='col2'>
                            <p>Download Mobile App</p>
                            <div className='storeimg'>
                                <div className='imgDiv'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2'/></div>
                                <div className='imgDiv'><img src='https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2' /></div>
                            </div>
                            <p>Connect with us</p>
                            <div className='icons'>
                                <div className='icon'><a href='#'><FaFacebookF/></a></div>
                                <div className='icon'><a href='#'><FaTwitter/></a></div>
                                <div className='icon'><a href='#'><FaYoutube/></a></div>
                                <div className='icon'><a href='#'><FaLinkedin/></a></div>
                                <div className='icon'><a href='#'><FaInstagram /></a></div>
                            </div>
                        </div>
                    </div>
                    <div className='row3'>
                        <div className='col3'>
                            <p>© 2006 - 2023. www.carwale.com</p>
                        </div>
                        <div className='col4' >
                            <a href='#'>Visitor Agreement & Privacy Policy</a>
                        </div>
                    </div>
            </div>
        </>
    }

export default Footer