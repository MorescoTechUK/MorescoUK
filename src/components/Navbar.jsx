import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <>
          <header className="text-gray-600 body-font py-3">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
                      
                      <span className="ml-3 text-5xl text-white">MORESCO</span>
                  </a>
                  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <a className="mr-20 hover:text-white text-white">WORK</a>
                      <a className="mr-20 hover:text-white text-white">EXPERTISE</a>
                      <a className="mr-20 hover:text-white text-white">ABOUT</a>
                      <a className="mr-20 hover:text-white text-white">INSIGHTS</a>
                  </nav>
                  
              </div>
          </header>
          
    </>
  )
}

export default Navbar