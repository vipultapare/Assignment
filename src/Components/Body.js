import React from 'react'
import Browse from './Browse'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Men from './Men'
import Female from './Female'
import Laptop from './Laptop'
import Mobile from './Mobile'
import Shoes from './Shoes'
import Specs from './Specs'
import Jewellery from './Jewellery'
import Logout from './Logout'




const Body = () => {


  // const appRouter = createBrowserRouter([
  //   {
  //     path: '/',
  //     element:<Browse />
  //   },
  //   {
  //     path: '/men',
  //     element:<Men />
  //   },
  //   {
  //     path: '/female',
  //     element:<Female />
  //   },
  // ])
  return (
    // <div>
      
    //  <RouterProvider  router={appRouter}/>
    // </div>

    <BrowserRouter>
     <Routes>
       <Route path='/' element={<Browse/>} />
       <Route path='/men' element={<Men/>}/>
       <Route path='/female' element={<Female/>}/>
       <Route path='/laptop' element={<Laptop/>}/>
       <Route path='/mobile' element={<Mobile/>}/>
       <Route path='/shoes' element={<Shoes/>}/>
       <Route path='/specs' element={<Specs/>}/>
       <Route path='/jewellery' element={<Jewellery/>}/>
       <Route path='/logout' element={<Logout/>}/>

       
     </Routes>
  </BrowserRouter>
  )
}

export default Body
