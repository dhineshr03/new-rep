import { configureStore } from "@reduxjs/toolkit";
import carProduct from './Slice.js'
   export const Store=configureStore({
        reducer:{
            car:carProduct
        }
    })