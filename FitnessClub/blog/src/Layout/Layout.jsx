import React from 'react'
import Navbar from '../Pages/Navbar/Navbar'
import HomePage from '../Pages/LandPage/Homepage'
import Blog from '../Pages/BlogCard/Blog'
import Footer from '../Pages/Footer/Footer'
import { Outlet } from 'react-router-dom'
import About from '../Pages/About/About'
import PopularBlogs from '../Pages/BlogCard/PopularBlog'

const Layout = () => {
  return (
    <>
    
    <Navbar/>

    <div id='home'>
        <HomePage/>
    </div>
    <div id='about'>
        <About/>
    </div>
    <div id='popular'>
        <PopularBlogs/>
    </div>

    <div id='blog'>
        <Blog/>
    </div>
    <div id='contact'>
        <Footer/>
    </div>
    <Outlet/>
    </>
  )
}

export default Layout