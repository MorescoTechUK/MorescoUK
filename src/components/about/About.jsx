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
            <div className="flex container justify-between mx-auto mt-20 mb-40">
                <div className=" w-4/6  text-start  font-bold">
                    <div className='maintext1 w-2/3' style={{ fontSize: "12vw" }}>
                        Hello,
                    </div>
                    <div className='text-8xl text-white leading-normal ' >
                        we're MORESCO.
                    </div>
                    <div className="text-3xl text-white font-normal py-20 w-5/6 ">
                        We are a design and technology agency that builds world class products for the digital age.
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
            <div className="container mx-auto mt-20 mb-40">
                <div className=" scroll-parent">
                    <div className="scroll-element primary">
                        <div className="flex">
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" />
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" />

                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" />
                        </div>

                    </div>
                    <div className="scroll-element secondary">
                        <div className="flex">
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" />
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" />
                            <img className="img-fluid mx-auto" alt="" src="https://www.spinxdigital.com/app/uploads/2022/09/about-slider-img2.jpg" width="515" height="362" />

                        </div>
                    </div>



                </div>
            </div>
            <div className="flex container justify-between mx-auto my-40">
                <div className=" text-start  font-bold">
                    <div className='w-4/6 maintext1 ' style={{ fontSize: "12rem" }}>
                        We are
                    </div>
                    <div className="flex justify-between">
                        <div className='text-6xl w-4/6 text-white leading-normal ' >
                            Creative Designers, Insightful Strategists, and Exceptional Engineers
                        </div>
                        <div className='w-2/6 text-white text-2xl font-semibold opacity-90'>
                            We are SPINX Digital in Los Angeles and as innovators in creative website design & digital marketing, we build awesome digital masterpieces!
                        </div>

                    </div>

                </div>
                {/* <div className="w-2/6 h-full flex items-center justify-center m-auto text-white text-2xl">
                    
                </div> */}

            </div>
            <div className='container mx-auto text-white'>
                <div className='text-3xl opacity-60 font-bold'>
                    What makes us one of the top rated web design companies?
                </div>
                <br />


                <hr />

                <div  className=" flex justify-between my-16">
                    <div className="text-7xl w-2/6 font-semibold">
                        Longevity
                    </div>
                    <div className="w-3/6 description text-2xl opacity-90">
                        <div className='w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex justify-between my-16">
                    <div className="text-7xl w-2/6 font-semibold">
                        Longevity
                    </div>
                    <div className="w-3/6 description text-2xl opacity-90">
                        <div className='w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex justify-between my-16">
                    <div className="text-7xl w-2/6 font-semibold">
                        Longevity
                    </div>
                    <div className="w-3/6 description text-2xl opacity-90">
                        <div className='w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex justify-between my-16">
                    <div className="text-7xl w-2/6 font-semibold">
                        Longevity
                    </div>
                    <div className="w-3/6 description text-2xl opacity-90">
                        <div className='w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

                <div  className=" flex justify-between my-16">
                    <div className="text-7xl w-2/6 font-semibold">
                        Longevity
                    </div>
                    <div className="w-3/6 description text-2xl opacity-90">
                        <div className='w-4/6'>Born and bred in Los Angeles since 2004, SPINX Digital is highly respected in the industry and is a step ahead amongst the top websites and </div>

                    </div>


                </div>
                <hr />

            </div>
            <div className="container mx-auto my-20">
                <ul>
                    <li onClick={(e) => {
                        e.preventDefault()
                        handleClick('1')
                    }} className={present === '1' ? "active" : ""}>
                        <div className="section-title">
                            <h2 className='text-5xl font-bold'>01 Connect</h2>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum temporibus dicta reprehenderit tempore quisquam consequuntur porro omnis laboriosam praesentium at et sapiente, provident sit! Suscipit recusandae, ab ratione dignissimos.</p>
                        </div>
                    </li>
                    <li onClick={(e) => {
                        e.preventDefault()
                        handleClick('2')
                    }} className={present === '2' ? "active" : ""}>
                        <div className="section-title">
                            <h2 className='text-5xl font-bold'>01 Connect</h2>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora totam delectus, eius nostrum aspernatur voluptas enim fugit ipsa magni voluptatem, odio sit accusamus vel id, commodi consequuntur possimus repellat necessitatibus!</p>
                        </div>
                    </li>
                    <li onClick={(e) => {
                        e.preventDefault()
                        handleClick('3')
                    }} className={present === '3' ? "active" : ""}>
                        <div className="section-title">
                            <h2 className='text-5xl font-bold'>01 Connect</h2>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur saepe vel facilis quae nihil ad aspernatur ex delectus. Tenetur nulla voluptates similique quos, quia possimus, magnam esse natus quis ipsa.</p>
                        </div>
                    </li>

                </ul>
            </div>
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
            <div className="container mx-auto my-40 overflow-hidden relative">
                <div class="marquee1 opacity-70">
                    <div class="marquee1--inner">
                        <span>
                            <div className="text-white  font-semibold" style={{ fontSize: "11rem", WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCOMORESCO
                            </div>
                        </span>
                        <span>
                            <div className="text-white  font-semibold" style={{ fontSize: "11rem", WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCOMORESCO
                            </div>
                        </span>
                    </div>
                </div>
                <div class="marquee2 opacity-70">
                    <div class="marquee2--inner">
                        <span>
                            <div className="text-white  font-semibold" style={{ fontSize: "11rem", WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCOMORESCO
                            </div>
                        </span>
                        <span>
                            <div className="text-white  font-semibold" style={{ fontSize: "11rem", WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCOMORESCO
                            </div>
                        </span>
                    </div>
                </div>

                <div className='absolute top-0 flex items-center justify-center h-full w-full text-7xl text-white font-bold'>
                    Start a Project
                </div>

            </div>
        </>
    )
}

export default About