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
            <div className="container mx-auto my-40">

                <div className="flex justify-between">
                    <div className="w-4/6 ">
                        <div className='text-transparent  font-bold leading-normal maintext5'>
                            Our Process

                        </div>
                        <div className="text-6xl text-white leading-normal font-bold">
                            Guiding you from design to launch
                        </div>
                        <div className="text-3xl my-12 text-white leading-normal font-normal opacity-75">
                            Our team of website experts will handle the entire development lifecycle of your project, from your website idea to the web development services needed to publishing.
                        </div>

                    </div>
                    <div className="w-2/6 text-white text-2xl opacity-70 flex justify-center items-center">

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
                <div style={{transform:"rotateZ(-90deg)"}}>
                    <div className=" text-white text-2xl  flex justify-end items-center">
                        <div className>
                            <div className="hs-accordion-group " data-hs-accordion-always-open>
                                <div className="hs-accordion active" id="hs-basic-always-open-heading-one" style={{ border: "1px solid gray", padding: "1.7rem" }}>
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
                                            <div className=' text-2xl p-8' style={{writingMode:"vertical-rl"}}>
                                                <div>
                                                    The first phase of a good web development project is Discovery. In short, it’s the process of learning.<br/><br/>

                                                    SPINX needs to learn as much as we can about you, your organization’s goals and users, and the required features and functionality of the site. With all this information in hand, we begin to lay the foundation for an optimal website.<br /><br />

                                                    The Discovery phase will begin with information gathering. Conversations between our Project Management, User Experience and Development teams, and key stakeholders at your end, will further define the goals of the new website, determine the key user personas, and detail the desired functionality for the finished product.<br /><br />


                                                </div>
                                                
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
                                        <p className="text-gray-800 p-8 dark:text-gray-200" style={{ writingMode: "vertical-rl" }}>
                                            The first phase of a good web development project is Discovery. In short, it’s the process of learning.<br /><br />

                                            SPINX needs to learn as much as we can about you, your organization’s goals and users, and the required features and functionality of the site. With all this information in hand, we begin to lay the foundation for an optimal website.<br /><br />

                                            The Discovery phase will begin with information gathering. Conversations between our Project Management, User Experience and Development teams, and key stakeholders at your end, will further define the goals of the new website, determine the key user personas, and detail the desired functionality for the finished product.<br /><br />
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
                                        <p className="text-gray-800 p-8 dark:text-gray-200" style={{ writingMode: "vertical-rl" }}>
                                            The first phase of a good web development project is Discovery. In short, it’s the process of learning.<br /><br />

                                            SPINX needs to learn as much as we can about you, your organization’s goals and users, and the required features and functionality of the site. With all this information in hand, we begin to lay the foundation for an optimal website.<br /><br />

                                            The Discovery phase will begin with information gathering. Conversations between our Project Management, User Experience and Development teams, and key stakeholders at your end, will further define the goals of the new website, determine the key user personas, and detail the desired functionality for the finished product.<br /><br />
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
                                        <p className="text-gray-800 p-8 dark:text-gray-200" style={{ writingMode: "vertical-rl" }}>
                                            The first phase of a good web development project is Discovery. In short, it’s the process of learning.<br /><br />

                                            SPINX needs to learn as much as we can about you, your organization’s goals and users, and the required features and functionality of the site. With all this information in hand, we begin to lay the foundation for an optimal website.<br /><br />

                                            The Discovery phase will begin with information gathering. Conversations between our Project Management, User Experience and Development teams, and key stakeholders at your end, will further define the goals of the new website, determine the key user personas, and detail the desired functionality for the finished product.<br /><br />
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
                                        <p className="text-gray-800 p-8 dark:text-gray-200" style={{ writingMode: "vertical-rl" }}>
                                            The first phase of a good web development project is Discovery. In short, it’s the process of learning.<br /><br />

                                            SPINX needs to learn as much as we can about you, your organization’s goals and users, and the required features and functionality of the site. With all this information in hand, we begin to lay the foundation for an optimal website.<br /><br />

                                            The Discovery phase will begin with information gathering. Conversations between our Project Management, User Experience and Development teams, and key stakeholders at your end, will further define the goals of the new website, determine the key user personas, and detail the desired functionality for the finished product.<br /><br />
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
                                        <p className="text-gray-800 dark:text-gray-200 p-8" style={{ writingMode: "vertical-rl" }}>
                                            The first phase of a good web development project is Discovery. In short, it’s the process of learning.<br /><br />

                                            SPINX needs to learn as much as we can about you, your organization’s goals and users, and the required features and functionality of the site. With all this information in hand, we begin to lay the foundation for an optimal website.<br /><br />

                                            The Discovery phase will begin with information gathering. Conversations between our Project Management, User Experience and Development teams, and key stakeholders at your end, will further define the goals of the new website, determine the key user personas, and detail the desired functionality for the finished product.<br /><br />
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

export default Process