import React from 'react'
import {Routes, Route} from "react-router-dom";
import { SingleProduct } from '../SingleProduct';

export const AllRoutes = () => {
  return (
    <Routes>
     <Route path='/book/:id' element={<SingleProduct />} />
    </Routes>
  )
}   
