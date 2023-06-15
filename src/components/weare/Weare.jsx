import React from 'react'
import './Weare.css'

const Weare = () => {
    return (
        <>
            <div className="flex container justify-between mx-auto my-40">
                <div className=" w-4/6  text-start  font-bold">
                    <div className='maintext1 w-2/3' style={{ fontSize: "12rem" }}>
                        We are
                    </div>
                    <div data-aos="fade-up" className='text-6xl text-white leading-normal ' >
                        Creative Designers, Insightful Strategists, and Exceptional Engineers
                    </div>
                    <div data-aos="fade-up" className="text-2xl text-white font-normal py-20 opacity-70">
                        We are SPINX Digital in Los Angeles and as innovators in creative website design & digital marketing, we build awesome digital masterpieces!
                    </div>
                </div>
                <div className="w-2/6 flex flex-col m-auto">
                    <div className="flex flex-col text-start my-12">
                        <div className='text-7xl  text-white'>
                            18+
                        </div>
                        <div className="text-3xl  opacity-70 text-white">
                            Years in Business
                        </div>
                    </div>
                    <div className="flex flex-col text-start my-12">
                        <div className='text-7xl  text-white'>
                            250+
                        </div>
                        <div className="text-3xl  opacity-70 text-white">
                            Websites & projects launched
                        </div>
                    </div>
                    <div className="flex flex-col text-start my-12">
                        <div className='text-7xl  text-white'>
                            30+
                        </div>
                        <div className="text-3xl  opacity-70 text-white">
                            Awards & recognition
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Weare