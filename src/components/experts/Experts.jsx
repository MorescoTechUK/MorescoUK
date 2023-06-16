import React from 'react'
import "./Experts.css"

const Experts = () => {
  return (
      <>
          <div className="container mx-auto my-20 lg:mt-80 lg:mb-40">

              <div className="flex justify-between">
                  <div className=" text-transparent text-center font-bold leading-normal maintext4 text-[8vw] md:text-[5.5vw] " >
                      We are experts in leading industry standard platforms & technologies.
                  </div>
                  

              </div>
          </div>

          <div className='flex flex-row '>
              <div className="h-full w-full flex justify-center items-center border border-gray-500 bg-white">
                  <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/10/Amazon.svg" title="Amazon" height="80" width="170" alt="" />
              </div>
              <div className="h-full w-full flex justify-center items-center border border-gray-500 bg-white">
                  <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/10/Beats.svg" title="Beats" height="80" width="170" alt="" />
              </div>
              <div className="h-full w-full flex justify-center items-center border border-gray-500 bg-white">
                  <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/10/Property-1GE.png" title="Property 1=GE" height="80" width="170" alt="" />
              </div>
              <div className="h-full w-full flex justify-center items-center border border-gray-500 bg-white">
                  <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/NBC.svg" title="NBC" height="80" width="170" alt="" />
              </div>
              <div className="h-full w-full flex justify-center items-center border border-gray-500 bg-white">
                  <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/CBS.svg" title="CBS" height="80" width="170" alt="" />
              </div>
              <div className="h-full w-full flex justify-center items-center border border-gray-500 bg-white">
                  <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/LACounty.svg" title="LACounty" height="80" width="170" alt="" />
              </div>

          </div>



          <div className="client-section dark-bg mb-20 lg:mb-40">

              <div className="flex client-slide w-full" >
                  <div className="h-full w-full  flex justify-center items-center border border-gray-500 bg-transparent">
                      <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/QE-white.svg" title="QE-white" height="80" width="170" alt="" />
                  </div>
                  <div className="h-full w-full  flex justify-center items-center border border-gray-500 bg-transparent">
                      <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/PhysiciansFormula-1.svg" title="PhysiciansFormula" height="80" width="170" alt="" />
                  </div>
                  <div className="h-full w-full  flex justify-center items-center border border-gray-500 bg-transparent">
                      <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/RedBarn.svg" title="RedBarn" height="80" width="170" alt="" />
                  </div>
                  <div className="h-full w-full  flex justify-center items-center border border-gray-500 bg-transparent">
                      <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/Aerovironment2.svg" title="Aerovironment2" height="80" width="170" alt="" />
                  </div>
                  <div className="h-full w-full  flex justify-center items-center border border-gray-500 bg-transparent">
                      <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/Lipsmacker2.svg" title="Lipsmacker2" height="80" width="170" alt="" />
                  </div>
                  <div className="h-full w-full  flex justify-center items-center border border-gray-500 bg-transparent">
                      <img className="img-fluid" src="https://www.spinxdigital.com/app/uploads/2022/11/TCE.svg" title="TCE" height="80" width="170" alt="" />
                  </div>


              </div>

          </div>


          <div className='text-white container mx-auto flex flex-col justify-start mb-20 lg:mb-40'>
              <div className='opacity-70 text-[4vw] lg:text-3xl w-full lg:w-1/2 mb-12 lg:mb-24'>
                  
              We've spent almost 2 decades in web design, and have crafted solutions using a wide variety of platforms.
              </div>
              <div className='text-[4vw] lg:text-2xl w-full lg:w-1/2 mb-24 underline underline-offset-8 decoration-1 decoration-slate-700'>
                  
              Which platform is right for you?
              </div>
          </div>
      </>
  )
}

export default Experts