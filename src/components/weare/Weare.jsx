import React from 'react'
import './Weare.css'

const Weare = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row container justify-between mx-auto my-20 lg:my-40">
                <div className="w-full lg:w-4/6  text-start  font-bold">
                    <div className='maintext1 w-2/5 sm:w-4/6 text-[11vw] md:text-[12vw] lg:text-[10vw]' >
                        We are
                    </div>
                    <div data-aos="fade-up" className='text-[9vw] sm:text-5xl sm:w-full md:w-3/4 text-white leading-normal lg:font-semibold' >
                        Creative Designers, Insightful Strategists, and Exceptional Engineers
                    </div>
                    <div data-aos="fade-up" className="lg:w-5/6 py-8 opacity-70 text-[6vw] sm:text-[2.2vw] text-white font-normal lg:py-20 ">
                        We are SPINX Digital in Los Angeles and as innovators in creative website design & digital marketing, we build awesome digital masterpieces!
                    </div>
                </div>
                <div className="w-full lg:w-2/6 flex flex-col m-auto">
                    <div className="flex flex-col text-start my-12">
                        <div className='text-[10.5vw] font-semibold sm:text-6xl xl:text-7xl  text-white'>
                            18+
                        </div>
                        <div className="sm:text-3xl text-[6vw] opacity-70 text-white">
                            Years in Business
                        </div>
                    </div>
                    <div className="flex flex-col text-start my-12">
                        <div className='text-[10.5vw] font-semibold sm:text-6xl xl:text-7xl  text-white'>
                            250+
                        </div>
                        <div className="sm:text-3xl text-[6vw]  opacity-70 text-white">
                            Websites & projects launched
                        </div>
                    </div>
                    <div className="flex flex-col text-start my-12">
                        <div className='text-[10.5vw] font-semibold sm:text-6xl xl:text-7xl  text-white'>
                            30+
                        </div>
                        <div className="sm:text-3xl text-[6vw]  opacity-70 text-white">
                            Awards & recognition
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Weare