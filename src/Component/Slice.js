import { createSlice } from "@reduxjs/toolkit";
import product from './Product.json';
import Product2 from './Product2.json'

  export  const Slice=createSlice({
        name:"carwale",
        initialState:{
          car:product.carProduct,
          Brand:product.brand,
          findlakh:product.lakh,
          compareCar:product.compareCar,
          cars:Product2.cars,
          comparePopup:product.comparepopup,
          compare1:"",
          compare2:"",
          compareCarname1:"",
          compareCarname2:"",
          compareCarPrice1:"",
          compareCarPrice2:""
        },
        reducers:{
          handleIsBrand:(state,action)=>{
              state.Brand=action.payload
          },
          handleisCompare:(state,action)=>{
              state.compareCar=action.payload
          },
          handleCompare1:(state,action)=>{
              state.compare1=action.payload
          },
          handleCompare2:(state,action)=>{
             state.compare2=action.payload
          },
          handleCompareCarname1:(state,action)=>{
              state.compareCarname1=action.payload
          },
          handleCompareCarname2:(state,action)=>{
            state.compareCarname2=action.payload
          },
          handlecomparePrice1:(state,action)=>{
            state.compareCarPrice1=action.payload
          },
          handlecomparePrice2:(state,action)=>{
            state.compareCarPrice2=action.payload
          }
        }
    })

export default Slice.reducer   
export const{handleIsBrand,handleisCompare,handleCompare1,handleCompare2,handleCompareCarname1,handleCompareCarname2,
  handlecomparePrice1,handlecomparePrice2}=Slice.actions