import React from 'react'
import "./DiveIn.scss"

const DiveIn = () => {
  return (
      <>
          <div className="container mx-auto my-40">
              <div className="flex relative justify-end">
              <div className="w-4/6 z-20 flex flex-col justify-center absolute left-0 h-full ">
                  <div className="maintext8  font-bold leading-relaxed">
                      
                  Dive In
                  </div>
                  <div className='text-8xl font-semibold text-white leading-relaxed underline underline-offset-8 decoration-1'>
                      Our Work
                  </div>
                  <div className='text-8xl font-semibold text-white leading-relaxed underline underline-offset-8 decoration-1'>
                      Our Expertise
                  </div>
              </div>
              <div className="w-9/12 right-0 top-0 opacity-80 z-10">
                  <img src="https://www.spinxdigital.com/app/uploads/2022/09/image-divein-default.png" alt="" />
              </div>
                  
              </div>

      </div>
      
      </>
  )
}

export default DiveIn