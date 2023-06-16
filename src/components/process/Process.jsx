import React from 'react'
import './Process.scss'
import { useState } from 'react'


const Process = () => {


    const stopMovie = (e) => {
        e.target.pause();
        console.log('off');
    }

    const playMovie = (e) => {
        e.target.play();
        console.log('on');
    }

    const [present, setpresent] = useState('1')
    
    const togglepresent = (s) => {
        setpresent(s);
    }


    return (
        <>
            <div className="container mx-auto my-20 lg:my-40">

                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="w-full lg:w-4/6 ">
                        <div className='text-transparent  font-bold leading-normal maintext5 text-[12vw] md:text-[5.5vw]'>
                            Our Process

                        </div>
                        <div className="text-[10vw] lg:text-6xl text-white leading-normal font-bold">
                            Guiding you from design to launch
                        </div>
                        <div className="text-[5vw] lg:text-3xl my-12 text-white leading-normal font-semibold lg:font-normal opacity-75">
                            Our team of website experts will handle the entire development lifecycle of your project, from your website idea to the web development services needed to publishing.
                        </div>

                    </div>
                    <div className="w-full lg:w-2/6 text-white text-2xl opacity-70 flex justify-center items-center">

                        <div className="flex justify-center items-center  overflow-hidden">
                            <div className="border-2 bg-black play flex justify-center items-center">
                                <p>Play Video </p>
                                <a href='https://www.spinxdigital.com/app/uploads/2022/09/SPINX_Process_v4.mp4' className='h-full w-full'>
                                    <video
                                        onMouseOver={playMovie}
                                        onMouseOut={stopMovie}
                                        src='https://www.spinxdigital.com/app/uploads/2022/09/SPINX_Process_v4.mp4'
                                        autoPlay muted
                                        preload='none'
                                        loop />
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
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

                            <div className="hs-accordion  p-[4vw] lg:p-[4rem]" id="hs-basic-always-open-heading-four" style={{ border: "1px solid gray" }}>
                                <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-four">
                                    <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="nfour" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="nfour" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <div className="text-[6vw] lg:text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>

                                </button>
                                <div id="hs-basic-always-open-collapse-four" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-four">
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

                            <div className="hs-accordion  p-[4vw] lg:p-[4rem]" id="hs-basic-always-open-heading-five" style={{ border: "1px solid gray" }}>
                                <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-five">
                                    <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="nfive" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="nfive" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <div className="text-[6vw] sm:text-[6vw] lg:text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>

                                </button>
                                <div id="hs-basic-always-open-collapse-five" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-five">
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
        </>
    )
}

export default Process