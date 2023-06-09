import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ErrorBounday from './../ErrorBoundary/ErrorBounday';
import Home from '../Pages/Home';
import Registration from '../Components/Register/Registration';
import Dashboard from '../Components/Dashboard/Dashboard';
import Search from '../Components/search/Search';

const PageRoute = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/registration" element={<Registration/>}/>
          
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="*" element={<ErrorBounday/>} />
        </Routes>
    </>
  )
}

export default PageRoute