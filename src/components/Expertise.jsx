import React from 'react'
import './Expertise.css'

const Expertise = () => {
    return (
        <>
            <div className="container mx-auto mt-80 mb-40">

                <div className="flex justify-between">
                    <div className="w-2/6  ">
                        <div className="text-white font-semibold text-lg my-4">OUR EXPERTISE</div>
                        <div className="maintext3 text-6xl font-bold text-transparent">

                            We are innovators in creative web design in Los Angeles.
                        </div>
                    </div>
                    <div className="w-4/6 text-white text-2xl  flex justify-end items-center">
                        <div className="w-5/6">
                            <div className="hs-accordion-group" data-hs-accordion-always-open>
                                <div className="hs-accordion active" id="hs-basic-always-open-heading-one" style={{border:"1px solid gray",padding:"1.7rem"}}>
                                    <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-one">
                                        <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <div className="text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>

                                    </button>
                                    <div id="hs-basic-always-open-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-one">
                                        <div className="flex flex-row justify-between text-gray-600 dark:text-white">
                                            <div className='w-3/6 text-2xl'>
                                                <div>
                                                A thorough discovery is at the core of every successful digital solution we craft. Understanding who you are building for and why you are building it is more important than the colors or technology you use. If you don't know these things first, the rest is pointless

                                                </div>
                                                <div className="py-8 underline underline-offset-4 decoration-slate-300">Learn More</div>
                                            </div>

                                            <div className="w-2/6 ">
                                                <p className='font-bold  text-black '>
                                                    More
                                                </p>
                                                <div className='text-lg underline underline-offset-4 py-2'>  User Research</div>
                                                <div className='text-lg underline underline-offset-4 py-2'>User Interview</div>
                                                <div className='text-lg underline underline-offset-4 py-2'>Usability Testing</div>
                                                <div className='text-lg underline underline-offset-4 py-2'> Market & Competitive Analysis </div>
                                                <div className='text-lg underline underline-offset-4 py-2'> Sandbox </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="hs-accordion" id="hs-basic-always-open-heading-two" style={{ border: "1px solid gray", padding: "1.7rem" }}>
                                    <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-two">
                                        <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <div className="text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>
                                    </button>
                                    <div id="hs-basic-always-open-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-two">
                                        <p className="text-gray-800 dark:text-gray-200">
                                            <em>This is the second item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </p>
                                    </div>
                                </div>

                                <div className="hs-accordion" id="hs-basic-always-open-heading-three" style={{ border: "1px solid gray", padding: "1.7rem" }}>
                                    <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-three">
                                        <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white  group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        
                                        <div className="text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>
                                    </button>
                                    <div id="hs-basic-always-open-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-three">
                                        <p className="text-gray-800 dark:text-gray-200">
                                            <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </p>
                                    </div>
                                </div>
                                <div className="hs-accordion" id="hs-basic-always-open-heading-three" style={{ border: "1px solid gray", padding: "1.7rem" }}>
                                    <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-three">
                                        <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white  group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        
                                        <div className="text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>
                                    </button>
                                    <div id="hs-basic-always-open-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-three">
                                        <p className="text-gray-800 dark:text-gray-200">
                                            <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </p>
                                    </div>
                                </div>
                                <div className="hs-accordion" id="hs-basic-always-open-heading-three" style={{ border: "1px solid gray", padding: "1.7rem" }}>
                                    <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-three">
                                        <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white  group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        
                                        <div className="text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>
                                    </button>
                                    <div id="hs-basic-always-open-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-three">
                                        <p className="text-gray-800 dark:text-gray-200">
                                            <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </p>
                                    </div>
                                </div>
                                <div className="hs-accordion" id="hs-basic-always-open-heading-three" style={{ border: "1px solid gray", padding: "1.7rem" }}>
                                    <button className="hs-accordion-toggle hs-accordion-active:text-black py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-white dark:hs-accordion-active:text-black dark:text-gray-200 dark:hover:text-white" aria-controls="hs-basic-always-open-collapse-three">
                                        <svg className="hs-accordion-active:hidden hs-accordion-active:text-black hs-accordion-active:group-hover:text-black block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M8.12421 13.36V2.35999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        <svg className="hs-accordion-active:block hs-accordion-active:text-black hs-accordion-active:group-hover:text-black hidden w-3 h-3 text-white  group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.62421 7.86L13.6242 7.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        
                                        <div className="text-5xl font-bold leading-relaxed text-white hs-accordion-active:text-black ">Discovery</div>
                                    </button>
                                    <div id="hs-basic-always-open-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-always-open-heading-three">
                                        <p className="text-gray-800 dark:text-gray-200">
                                            <em>This is the first item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                                        </p>
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

export default Expertise