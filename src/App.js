import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import { Route, Routes, useLocation } from 'react-router-dom';

const App = () => {

  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname !== '/') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]);

  return (
   <>
   <Navbar/>
   
   <Routes>
        <Route path='/' element={<Home />} />

        

        {/* <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
          <Route path="admin/manage-product" element={<ManageProduct />} />
          <Route path="admin/create-product" element={<Product_create />} />
          <Route path="admin/create-category" element={< Create_catigory/>} />
          <Route path="admin/manage-category" element={< Manage_catigory/>} />
        </Route> */}

      </Routes>
   
   
   
   
   
   
   
   </>
  )
}

export default App