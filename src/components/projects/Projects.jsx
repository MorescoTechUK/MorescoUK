import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="heading1 text-center text-[10vw] md:text-[9vw]  xl:text-8xl font-semibold md:text-end md:mb-20">
          Featured Projects
        </div>
        <div className="flex flex-col-reverse lg:flex-row py-20">
          <div className='w-full lg:w-2/7 flex flex-col text-white mr-0'>
            <span className='text-[4vw] my-4  lg:text-3xl opacity-80'>Willkie Website Redesign &amp; Development</span>
            <h3 className='text-[5vw] font-bold md:font-semibold md:text-5xl'>A High Stakes Legal Website Redesign</h3>
          </div>
          <div className="w-full lg:w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

            <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

          </div>



        </div>
      </div>
      <div data-aos="fade-right" className=' bg-white'>
        <div className="container mx-auto   ">
          <div className="flex flex-col-reverse lg:flex-row py-20">
            <div className='w-full lg:w-2/7 flex flex-col text-black mr-0'>
              <span className='text-[4vw] my-4  lg:text-3xl opacity-80'>Willkie Website Redesign &amp; Development</span>
              <h3 className='text-[5vw] font-bold md:font-semibold md:text-5xl'>A High Stakes Legal Website Redesign</h3>
            </div>
            <div className="w-full lg:w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

              <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

            </div>



          </div>
        </div>

      </div>
      <div data-aos="fade-left" className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row py-20">
          <div className='w-full lg:w-2/7 flex flex-col text-white mr-0'>
            <span className='text-[4vw] my-4  lg:text-3xl opacity-80'>Willkie Website Redesign &amp; Development</span>
            <h3 className='text-[5vw] font-bold md:font-semibold md:text-5xl'>A High Stakes Legal Website Redesign</h3>
          </div>
          <div className="w-full lg:w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

            <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

          </div>



        </div>
      </div>
      <div data-aos="fade-right" className='bg-white'>
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row py-20">
            <div className='w-full lg:w-2/7 flex flex-col text-black mr-0'>
              <span className='text-[4vw] my-4  lg:text-3xl opacity-80'>Willkie Website Redesign &amp; Development</span>
              <h3 className='text-[5vw] font-bold md:font-semibold md:text-5xl'>A High Stakes Legal Website Redesign</h3>
            </div>
            <div className="w-full lg:w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

              <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

            </div>



          </div>


        </div >

      </div>
      <div data-aos="fade-left" className="container mx-auto">
        <div className="flex flex-col-reverse lg:flex-row py-8 lg:py-20">
          <div className='w-full lg:w-2/7 flex flex-col text-white mr-0'>
            <span className='text-[4vw] my-4  lg:text-3xl opacity-80'>Willkie Website Redesign &amp; Development</span>
            <h3 className='text-[5vw] font-bold md:font-semibold md:text-5xl'>A High Stakes Legal Website Redesign</h3>
          </div>
          <div className="w-full lg:w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

            <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

          </div>



        </div>
      </div>
      <div className='text-end text-xl lg:text-4xl text-white py-4 container mx-auto underline underline-offset-8 decoration-2 decoration-slate-400'>
        <a href="">See More Work</a>
      </div>
    </>
  )
}

export default Projects