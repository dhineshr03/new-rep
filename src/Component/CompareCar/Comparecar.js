import React, { useState } from 'react'
import './Comparecar.scss'
import { useSelector,useDispatch } from 'react-redux';
import {handleisCompare,handleCompare1,handleCompare2,handleCompareCarname1,handleCompareCarname2,
  handlecomparePrice1,handlecomparePrice2} from '../Slice.js'
import { FaSearch,FaMapMarkerAlt,FaLanguage,FaRegUserCircle} from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';



    const Comparecar=()=>{

        let state=useSelector((samp)=>samp)
        console.log(state.car.compareCar);
        let dispatch=useDispatch()

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          };
          const [open, setOpen] = React.useState(false);
          // const handleOpen = () => setOpen(true);
          

          const [age, setAge] = React.useState('');
          const[compareid,setId]=useState();
          const[ispop,setPop]=useState()
          

          const check=((bn)=>{
            console.log(bn,"check");
          })
          
          const handleOpen=((id)=>{
               setOpen(true)
               console.log(id);
               setId(id)
          })
          let selectarr;
          
          const hancarname=((carname,carsId)=>{
                console.log(carname,carsId,"carname","ID");
                selectarr= state.car.cars.filter((e)=>{  
                      if(e.carname===carname){
                          if(compareid===1){
                            dispatch(handleCompare1(e.id))
                            dispatch(handleCompareCarname1(e.carname))
                            dispatch(handlecomparePrice1(e.price))
                          }
                          else if(compareid===2){
                            dispatch(handleCompare2(e.id))
                            dispatch(handleCompareCarname2(e.carname))
                            dispatch(handlecomparePrice2(e.price))
                          }
                      }
                        return e.carname===carname
                })
                let compare=state.car.compareCar.map((e)=>{
                  console.log(e);
                      return e.id==compareid && e.iscompare===true?{...e,iscompare:false,arr:selectarr}:e   
                 })
                dispatch(handleisCompare(compare))
                setOpen(false)
                // const handleClose = () => setOpen(false);     
          })
          const hanClose=((id)=>{
            console.log("close");
            if(id===1){
              dispatch(handleCompare1(" "))
              dispatch(handleCompareCarname1(" "))
              dispatch(handlecomparePrice1(" "))
            }
            else{
              dispatch(handleCompare1(" "))
              dispatch(handleCompareCarname2(" "))
              dispatch(handlecomparePrice2(" "))
            }
            let x=state.car.compareCar.map((e)=>{
                  console.log(e,"close");
                  return e.id==id  ? {...e,iscompare:true}:e
            })
            dispatch(handleisCompare(x))
          })

          let nav=useNavigate()
          const hancomparePage=(()=>{
                nav(`/comparepage`)
          })
          const detailshandle=(id,carName)=>{
            nav(`/detailspage?id=${id}`)
           
        }

        return <>
            <div id='comparecarSection'>
                <div className='container'>
                    <div className='head'><h3>Compare Cars</h3></div>
                    <div className='row'>
                      {
                         state.car.compareCar.map((e)=>{
                          return e.iscompare?
                              <div className='col'> 
                                    <div   onClick={()=>handleOpen(e.id)}><img src={e.img}/></div>
                                    <p>Select Car</p>
                              </div>
                      :  
                          e.arr?.map((a)=>{
                              return(
                                <div  className='col1'>
                                    <h3 onClick={()=>hanClose(e.id)}><IoIosClose /></h3>
                                    <div className='imgDiv' onClick={()=>detailshandle(a.id,a.carname)}><img src={a.img} /></div>
                                    <a href='#'>{a.carname}</a>
                                    <h4><i><MdOutlineCurrencyRupee/></i>{a.price} Lakh</h4>
                                    <p>Avg Ex-Shoroom price</p>
                                </div>
                              )
                        })
                        
                    })
                  }
                    <div className='vs'><h5>VS</h5></div>
                     <Modal
                        open={open}
                        // onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description" >
                        <Box sx={style}>
                          <div className='popup-head'><h3>Select Your Brand or Model</h3></div>
                         
                           <div className='popup-searchbox'>
                                <div className='popup-icon'><i><FaSearch/></i></div>
                                <div className='popup-input'><input type='text' placeholder='Type to Select Brand '></input></div>
                            </div>
                       {state.car.comparePopup.map((e)=>{
                            return (
                                   
                              <Accordion className='Accordion'>
                                <AccordionSummary
                                  expandIcon={<ExpandMoreIcon />}
                                  aria-controls="panel1a-content"
                                  id="panel1a-header">
                                    <div className='popup-brandname'>
                                        <div className='pop-brandimg'><img src={e.img} /></div>
                                         <Typography onClick={()=>check(e.brandName)}>{e.brandName}</Typography>
                                    </div>
                                   
                                 
                                </AccordionSummary>
                              {state.car.cars.map((a)=>{
                                  return a.brandName===e.brandName ?
                                  <AccordionDetails>
                                  <Typography>
                                   <p onClick={()=>hancarname(a.carname,a.id)}>{a.carname}</p>
                                  </Typography> 
                                </AccordionDetails>
                                :""
                              })}
                              </Accordion>
                            )
                       })}
                      

                        </Box>
                    </Modal>
                    </div>
                    <div className='compareBtn'><button onClick={hancomparePage}>Compare</button></div>
                </div>
            </div>
        </>
    }
export default Comparecar   