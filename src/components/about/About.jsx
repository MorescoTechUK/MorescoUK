import React from 'react'
import './About.css'
import { useState } from 'react';

const About = () => {

    const [present, setpresent] = useState('1');

    const handleClick = (s) => {
        setpresent(s)
    }

    return (
        <>
            <div className="flex flex-col lg:flex-row container justify-between mx-auto my-20 lg:my-40">
                <div className="w-full lg:w-4/6  text-start  font-bold">
                    <div className='maintext1 w-2/5 sm:w-4/6 text-[13vw] md:text-[12vw] lg:text-[10vw]' >
                        Hello,
                    </div>
                    <div className='text-[10vw] md:text-[7vw] lg:text-[5vw] sm:text-5xl sm:w-full md:w-3/4 text-white leading-normal lg:font-bold' >
                        we're MORESCO.
                    </div>
                    <div className="lg:w-5/6 py-8 opacity-70 text-[6vw] sm:text-[2.2vw] text-white font-normal lg:py-20 ">
                        We are a design and technology agency that builds world class products for the digital age.
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
            <div className="container mx-auto mt-20 mb-40">
                <div className=" scroll-parent">
                    <div className="scroll-element primary">
                        <div className="flex">
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" style={{height:"40vh"}} />
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" style={{height:"40vh"}} />

                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" style={{height:"40vh"}} />
                        </div>

                    </div>
                    <div className="scroll-element secondary">
                        <div className="flex">
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" style={{height:"40vh"}} />
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362"  style={{height:"40vh"}} />
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" style={{height:"40vh"}} />

                        </div>
                    </div>



                </div>
            </div>
            <div className="flex flex-col lg:flex-row container justify-between mx-auto my-20 lg:my-40">
                <div className="w-full lg:w-4/6  text-start  font-bold">
                    <div className='maintext1 w-2/5 sm:w-4/6 text-[11vw] md:text-[12vw] lg:text-[10vw]' >
                        We are
                    </div>
                    <div  className='text-[9vw] sm:text-5xl sm:w-full md:w-3/4 text-white leading-normal lg:font-semibold' >
                        Creative Designers, Insightful Strategists, and Exceptional Engineers
                    </div>
                    
                </div>
                <div className="w-full lg:w-2/6 flex flex-col m-auto">
                    <div className="lg:w-5/6 py-8  text-[6vw] sm:text-[2.2vw] text-white font-normal lg:py-20 ">
                        We are a design and technology agency that builds world class products for the digital age.
                    </div>
                </div>

            </div>
            <div className='container mx-auto text-white my-20 lg:my-40'>
                <div className='text-[6vw] lg:text-3xl opacity-60 font-bold'>
                    What makes us one of the top rated web design companies?
                </div>
                <br />


                <hr />

                <div  className=" flex flex-col lg:flex-row justify-between my-4 lg:my-16">
                    <div className="text-4xl lg:text-7xl w-full lg:w-2/6 my-4 font-bold lg:font-semibold">
                        Longevity
                    </div>
                    <div className="w-full  lg:w-3/6 description text-xl opacity-90">
                        <div className='w-full lg:w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex flex-col lg:flex-row justify-between my-4 lg:my-16">
                    <div className="text-4xl lg:text-7xl w-full lg:w-2/6 my-4 font-bold lg:font-semibold">
                        Longevity
                    </div>
                    <div className="w-full  lg:w-3/6 description text-xl opacity-90">
                        <div className='w-full lg:w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex flex-col lg:flex-row justify-between my-4 lg:my-16">
                    <div className="text-4xl lg:text-7xl w-full lg:w-2/6 my-4 font-bold lg:font-semibold">
                        Longevity
                    </div>
                    <div className="w-full  lg:w-3/6 description text-xl opacity-90">
                        <div className='w-full lg:w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex flex-col lg:flex-row justify-between my-4 lg:my-16">
                    <div className="text-4xl lg:text-7xl w-full lg:w-2/6 my-4 font-bold lg:font-semibold">
                        Longevity
                    </div>
                    <div className="w-full  lg:w-3/6 description text-xl opacity-90">
                        <div className='w-full lg:w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex flex-col lg:flex-row justify-between my-4 lg:my-16">
                    <div className="text-4xl lg:text-7xl w-full lg:w-2/6 my-4 font-bold lg:font-semibold">
                        Longevity
                    </div>
                    <div className="w-full  lg:w-3/6 description text-xl opacity-90">
                        <div className='w-full lg:w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex flex-col lg:flex-row justify-between my-4 lg:my-16">
                    <div className="text-4xl lg:text-7xl w-full lg:w-2/6 my-4 font-bold lg:font-semibold">
                        Longevity
                    </div>
                    <div className="w-full  lg:w-3/6 description text-xl opacity-90">
                        <div className='w-full lg:w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div className="w-full lg:w-4/6 text-white text-2xl  flex justify-end items-center py-20">
                    <div className="w-full lg:w-5/6">
                        <div className="hs-accordion-group" data-hs-accordion-always-open>
                            <div className="hs-accordion active p-[4vw] lg:p-[4rem]" id="hs-basic-always-open-heading-one" style={{ border: "1px solid gray" }}>
                                <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-one">
                                    <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <div className="text-[6vw] lg:text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>

                                </button>
                                <div id="hs-basic-always-open-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-one">
                                    <div className="flex flex-col lg:flex-row justify-between text-gray-600 dark:text-white">
                                        <div className='w-full lg:w-3/6 text-[4.5vw] lg:text-2xl leading-normal sm:text-[3vw]'>
                                            <div>
                                                A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don't know these things first, the rest is pointless

                                            </div>
                                            <div className="py-8 underline underline-offset-4 decoration-slate-300">Learn More</div>
                                        </div>

                                        <div className="w-full lg:w-2/6 ">
                                            <p className='font-bold  text-black '>
                                                More
                                            </p>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-00 underline underline-offset-4  py-2'>  User Research</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-00 underline underline-offset-4  py-2'>User Interview</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-00 underline underline-offset-4  py-2'>Usability Testing</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-00 underline underline-offset-4  py-2'> Market & Competitive Analysis </div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-00 underline underline-offset-4  py-2'> Sandbox </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hs-accordion  p-[4vw] lg:p-[4rem]" id="hs-basic-always-open-heading-two" style={{ border: "1px solid gray" }}>
                                <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-two">
                                    <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="ntwo" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="ntwo" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <div className="text-[6vw] lg:text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>

                                </button>
                                <div id="hs-basic-always-open-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-two">
                                    <div className="flex flex-col lg:flex-row justify-between text-gray-600 dark:text-white">
                                        <div className='w-full lg:w-3/6 text-[4.5vw] lg:text-2xl leading-normal sm:text-[3vw]'>
                                            <div>
                                                A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don't know these things first, the rest is pointless

                                            </div>
                                            <div className="py-8 underline underline-offset-4 decoration-slate-300">Learn More</div>
                                        </div>

                                        <div className="w-full lg:w-2/6 ">
                                            <p className='font-bold  text-black '>
                                                More
                                            </p>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'>  User Research</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'>User Interview</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'>Usability Testing</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'> Market & Competitive Analysis </div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'> Sandbox </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="hs-accordion  p-[4vw] lg:p-[4rem]" id="hs-basic-always-open-heading-three" style={{ border: "1px solid gray" }}>
                                <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-three">
                                    <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="nthree" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="nthree" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <div className="text-[6vw] lg:text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>

                                </button>
                                <div id="hs-basic-always-open-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-three">
                                    <div className="flex flex-col lg:flex-row justify-between text-gray-600 dark:text-white">
                                        <div className='w-full lg:w-3/6 text-[4.5vw] lg:text-2xl leading-normal sm:text-[3vw]'>
                                            <div>
                                                A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don't know these things first, the rest is pointless

                                            </div>
                                            <div className="py-8 underline underline-offset-4 decoration-slate-300">Learn More</div>
                                        </div>

                                        <div className="w-full lg:w-2/6 ">
                                            <p className='font-bold  text-black '>
                                                More
                                            </p>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'>  User Research</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'>User Interview</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'>Usability Testing</div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'> Market & Competitive Analysis </div>
                                            <div className='text-sm lg:text-lg decoration-2 decoration-gray-300 underline underline-offset-4  py-2'> Sandbox </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            


                        </div>

                    </div>
                </div>
            
            </div>
            
            <div className="container mx-auto my-20 lg:my-40">
                <div className="flex relative justify-end">
                    <div className="w-4/6 z-20 flex flex-col justify-center absolute left-0 h-full ">
                        <div className="maintext8  font-bold leading-relaxed text-[12vw] md:text-[5.5vw]">

                            Dive In
                        </div>
                        <div className=' font-bold lg:font-semibold text-white leading-relaxed underline underline-offset-8 decoration-1 text-[8vw] md:text-[5.5vw]'>
                            Our Work
                        </div>
                        <div className='text-[8vw] md:text-[5.5vw] font-bold lg:font-semibold text-white leading-relaxed underline underline-offset-8 decoration-1'>
                            Our Expertise
                        </div>
                    </div>
                    <div className="w-9/12 right-0 top-0 opacity-60 z-10 ">
                        <img src="https://www.spinxdigital.com/app/uploads/2022/09/image-divein-default.png" alt="" />
                    </div>

                </div>

            </div>
            <div className="container mx-auto my-20 lg:my-40 overflow-hidden relative">
                <div class="marquee1 opacity-50 h-[20vh] lg:h-[30vh]">
                    <div class="marquee1--inner">
                        <span>
                            <div className="text-white  font-semibold text-[24vh] lg:text-[35vh]" style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCO
                            </div>
                        </span>
                        <span>
                            <div className="text-white  font-semibold text-[24vh] lg:text-[35vh]" style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCO
                            </div>
                        </span>
                    </div>
                </div>
                <div class="marquee2 opacity-50 h-[20vh] lg:h-[30vh]">
                    <div class="marquee2--inner">
                        <span>
                            <div className="text-white  font-semibold text-[24vh] lg:text-[35vh]" style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCO
                            </div>
                        </span>
                        <span>
                            <div className="text-white  font-semibold text-[24vh] lg:text-[35vh]" style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCO
                            </div>
                        </span>
                    </div>
                </div>

                <div className='absolute top-0 flex items-center justify-center h-full w-full text-[12vw] lg:text-[6.5vw] text-white font-bold'>
                    Start a Project
                </div>

            </div>
        </>
    )
}

export default About