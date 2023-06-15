import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
          <header className="text-gray-600 body-font py-3">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <Link to="/"  className="flex title-font font-medium items-center  mb-4 md:mb-0">
                      
                      <span className="ml-3 text-5xl text-white">MORESCO</span>
                  </Link>
                  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <Link to="/work" className="mr-20 hover:text-white 
                      hover:underline hover:underline-offset-8 hover:decoration-green-600
                      hover:decoration-2 text-white">WORK</Link>
                      {/* <a href="" className="mr-20 hover:text-white 
                      hover:underline hover:underline-offset-8 hover:decoration-green-600
                      hover:decoration-2 text-white">EXPERTISE</a> */}

                      <Link to="/expertise" className="mr-20 hover:text-white 
                      hover:underline hover:underline-offset-8 hover:decoration-green-600
                      hover:decoration-2 text-white">EXPERTISE</Link>

                      <Link to="/about" className="mr-20 hover:text-white 
                      hover:underline hover:underline-offset-8 hover:decoration-green-600
                      hover:decoration-2 text-white">ABOUT</Link>
                      <Link to="/insights" className="mr-20 hover:text-white 
                      hover:underline hover:underline-offset-8 hover:decoration-green-600
                      hover:decoration-2 text-white">INSIGHTS</Link>
                  </nav>
                  
              </div>
          </header>
          
    </>
  )
}

export default Navbar