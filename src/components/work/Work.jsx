import React from 'react'

const Work = () => {

    const stopMovie = (e) => {
        e.target.pause();
        console.log('off');
    }

    const playMovie = (e) => {
        e.target.play();
        console.log('on');
    }


    return (
        <>
            <div className="container mx-auto my-8 lg:my-40">

                <div className="flex lg:flex-row flex-col justify-between">
                    <div className="w-full lg:w-4/6  text-start  font-bold">
                        <div className=' maintext1 text-[12vw] lg:text-[10vw] xl:text-[9vw]'>
                            World Class
                        </div>
                        <div className='text-[8vw] lg:text-6xl text-white leading-normal ' >
                            Digital destinations, from idea to execution
                        </div>

                    </div>
                    <div className="mt-20 w-full lg:w-2/6 text-white text-2xl opacity-70 flex justify-center items-center">

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
            </div>
            <div  className="container mx-auto">
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
            <div className='bg-white'>
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
            <div  className="container mx-auto">
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

            <div className="container mx-auto">
                <div className="flex flex-col  lg:flex-row">
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-full lg:w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{  height: "100%", background:"#E7E7E8"}}>
                                <div className="image" style={{width:"90%",height:"90%"}}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full'/>
                                </div>
                            </div>
                            <div className='opacity-70 text-[4vw] md:text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-[5vw] lg:text-2xl font-bold lg:font-semibold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-full lg:w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                <div className="image" style={{ width: "90%", height: "90%" }}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <div className='opacity-70 text-[4vw] md:text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-[5vw] lg:text-2xl font-bold lg:font-semibold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  lg:flex-row">
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-full lg:w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{  height: "100%", background:"#E7E7E8"}}>
                                <div className="image" style={{width:"90%",height:"90%"}}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full'/>
                                </div>
                            </div>
                            <div className='opacity-70 text-[4vw] md:text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-[5vw] lg:text-2xl font-bold lg:font-semibold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-full lg:w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                <div className="image" style={{ width: "90%", height: "90%" }}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <div className='opacity-70 text-[4vw] md:text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-[5vw] lg:text-2xl font-bold lg:font-semibold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  lg:flex-row">
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-full lg:w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{  height: "100%", background:"#E7E7E8"}}>
                                <div className="image" style={{width:"90%",height:"90%"}}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full'/>
                                </div>
                            </div>
                            <div className='opacity-70 text-[4vw] md:text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-[5vw] lg:text-2xl font-bold lg:font-semibold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-full lg:w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                <div className="image" style={{ width: "90%", height: "90%" }}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <div className='opacity-70 text-[4vw] md:text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-[5vw] lg:text-2xl font-bold lg:font-semibold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col  lg:flex-row">
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-full lg:w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{  height: "100%", background:"#E7E7E8"}}>
                                <div className="image" style={{width:"90%",height:"90%"}}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full'/>
                                </div>
                            </div>
                            <div className='opacity-70 text-[4vw] md:text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-[5vw] lg:text-2xl font-bold lg:font-semibold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-full lg:w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                <div className="image" style={{ width: "90%", height: "90%" }}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <div className='opacity-70 text-[4vw] md:text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-[5vw] lg:text-2xl font-bold lg:font-semibold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="container mx-auto my-20 lg:my-40">
                <div className=" text-transparent  font-bold leading-normal maintext6">
                    Learn
                </div>
                {/* <br /> */}
                <hr />
                <div className='w-full my-8 lg:w-5/6 lg:my-20'>
                    <div className='text-white text-xl leading-relaxed opacity-70'>Insight</div>
                    <div className='text-white text-2xl lg:text-6xl font-bold  my-4 lg:my-8'>43 Award-Winning Best Website Designs to look in 2023</div>
                    <div className='text-white text-xs lg:text-sm opacity-70'>
                        <span>UX,&nbsp;&nbsp;</span>
                        <span>Web Development,&nbsp;&nbsp;</span>
                        <span>Website Redesign,&nbsp;</span>
                    </div>
                </div>
                <hr />
                <div className='w-full  lg:w-5/6 my-8 lg:my-20'>
                    <div className='text-white text-xl leading-relaxed opacity-70'>Insight</div>
                    <div className='text-white text-2xl lg:text-6xl font-bold  my-4 lg:my-8'>43 Award-Winning Best Website Designs to look in 2023</div>
                    <div className='text-white text-xs lg:text-sm opacity-70'>
                        <span>UX,&nbsp;&nbsp;</span>
                        <span>Web Development,&nbsp;&nbsp;</span>
                        <span>Website Redesign,&nbsp;</span>
                    </div>
                </div>
                <hr />
                <div className='w-full lg:w-5/6 my-8 lg:my-20'>
                    <div className='text-white text-xl leading-relaxed opacity-70'>Insight</div>
                    <div className='text-white text-2xl lg:text-6xl font-bold  my-4 lg:my-8'>43 Award-Winning Best Website Designs to look in 2023</div>
                    <div className='text-white text-xs lg:text-sm opacity-70'>
                        <span>UX,&nbsp;&nbsp;</span>
                        <span>Web Development,&nbsp;&nbsp;</span>
                        <span>Website Redesign,&nbsp;</span>
                    </div>
                </div>
                <hr />
                <div className='text-lg lg:text-3xl  text-white underline underline-offset-4 decoration-gray-600 decoration-1 my-8 lg:my-20'>View More Insights</div>


            </div>
        </>
    )
}

export default Work