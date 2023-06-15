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
            <div className="container mx-auto mt-20 mb-40">

                <div className="flex justify-between">
                    <div className=" w-4/6  text-start  font-bold">
                        <div className='maintext1 ' style={{ fontSize: "10vw" }}>
                            World Class
                        </div>
                        <div className='text-6xl text-white leading-normal ' >
                            Digital destinations, from idea to execution
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
            </div>
            <div className="container mx-auto">

                <div className="flex flex-row py-20">
                    <div className='w-2/7 flex flex-col text-white'>
                        <span className='text-4xl opacity-80'>Willkie Website Redesign &amp; Development</span><br />
                        <h3 className='font-semibold text-5xl'>A High Stakes Legal Website Redesign</h3>
                    </div>
                    <div className="w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

                        <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

                    </div>

                </div>
            </div>
            <div className=' bg-white'>
                <div className="container mx-auto   ">
                    <div className="flex flex-row py-20">
                        <div className='w-2/7 flex flex-col text-black'>
                            <span className='text-4xl opacity-80'>Willkie Website Redesign &amp; Development</span><br />
                            <h3 className='font-semibold text-5xl'>A High Stakes Legal Website Redesign</h3>
                        </div>
                        <div className="w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

                            <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

                        </div>

                    </div>
                </div>

            </div>
            <div className="container mx-auto">
                <div className="flex flex-row py-20">
                    <div className='w-2/7 flex flex-col text-white'>
                        <span className='text-4xl opacity-80'>Willkie Website Redesign &amp; Development</span><br />
                        <h3 className='font-semibold text-5xl'>A High Stakes Legal Website Redesign</h3>
                    </div>
                    <div className="w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

                        <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

                    </div>

                </div>
            </div>

            <div className="container mx-auto">
                <div className="flex ">
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{  height: "100%", background:"#E7E7E8"}}>
                                <div className="image" style={{width:"90%",height:"90%"}}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full'/>
                                </div>
                            </div>
                            <div className='opacity-70 text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-3xl font-bold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                <div className="image" style={{ width: "90%", height: "90%" }}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <div className='opacity-70 text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-3xl font-bold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                <div className="image" style={{ width: "90%", height: "90%" }}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <div className='opacity-70 text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-3xl font-bold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center h-full ">
                            <div className="flex flex-col justify-center w-5/6 ">
                                <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                    <div className="image" style={{ width: "90%", height: "90%" }}>
                                        <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                    </div>
                                </div>
                                <div className='opacity-70 text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                                <div className='text-3xl font-bold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex ">
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{  height: "100%", background:"#E7E7E8"}}>
                                <div className="image" style={{width:"90%",height:"90%"}}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full'/>
                                </div>
                            </div>
                            <div className='opacity-70 text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-3xl font-bold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                <div className="image" style={{ width: "90%", height: "90%" }}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <div className='opacity-70 text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-3xl font-bold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center w-5/6 ">
                            <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                <div className="image" style={{ width: "90%", height: "90%" }}>
                                    <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                </div>
                            </div>
                            <div className='opacity-70 text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                            <div className='text-3xl font-bold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                        </div>
                    </div>
                    <div className="lg:columns-1 my-16 mx-auto">
                        <div className="flex flex-col justify-center h-full ">
                            <div className="flex flex-col justify-center w-5/6 ">
                                <div className="imagecover flex items-center justify-center" style={{ height: "100%", background: "#E7E7E8" }}>
                                    <div className="image" style={{ width: "90%", height: "90%" }}>
                                        <img src="https://www.spinxdigital.com/app/uploads/2022/10/Thumbnail.jpg" alt="" className='h-full w-full' />
                                    </div>
                                </div>
                                <div className='opacity-70 text-xl text-white lg:mt-8 my-4'>BSM Consulting Website and Portal Redesign</div>
                                <div className='text-3xl font-bold text-white '>A Medical Consulting Group’s Website Goes Under the Knife</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-40">
                <div className=" text-transparent font-bold leading-normal maintext6">
                    Learn
                </div>
                {/* <br /> */}
                <hr />
                <div className='w-5/6 my-20'>
                    <div className='text-white text-xl leading-relaxed opacity-70'>Insight</div>
                    <div className='text-white text-6xl font-bold my-8'>43 Award-Winning Best Website Designs to look in 2023</div>
                    <div className='text-white text-sm opacity-70'>
                        <span>UX,&nbsp;&nbsp;</span>
                        <span>Web Development,&nbsp;&nbsp;</span>
                        <span>Website Redesign,&nbsp;</span>
                    </div>
                </div>
                <hr />
                <div className='w-5/6 my-20'>
                    <div className='text-white text-xl leading-relaxed opacity-70'>Insight</div>
                    <div className='text-white text-6xl font-bold my-8'>43 Award-Winning Best Website Designs to look in 2023</div>
                    <div className='text-white text-sm opacity-70'>
                        <span>UX,&nbsp;&nbsp;</span>
                        <span>Web Development,&nbsp;&nbsp;</span>
                        <span>Website Redesign,&nbsp;</span>
                    </div>
                </div>
                <hr />
                <div className='w-5/6 my-20'>
                    <div className='text-white text-xl leading-relaxed opacity-70'>Insight</div>
                    <div className='text-white text-6xl font-bold my-8'>43 Award-Winning Best Website Designs to look in 2023</div>
                    <div className='text-white text-sm opacity-70'>
                        <span>UX,&nbsp;&nbsp;</span>
                        <span>Web Development,&nbsp;&nbsp;</span>
                        <span>Website Redesign,&nbsp;</span>
                    </div>
                </div>
                <div className='text-3xl  text-white underline underline-offset-4 decoration-gray-600 decoration-1'>View More Insights</div>


            </div>
        </>
    )
}

export default Work