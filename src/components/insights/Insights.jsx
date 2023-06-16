import React from 'react'
import './Insights.css'
import arrow from '../../assets/right-arrow.png'
import search from '../../assets/search.png'

const Insights = () => {
    return (
        <>
            <div className="container mx-auto my-20 lg:my-40">
                <div className=" text-transparent  font-bold leading-normal maintext6 text-[5vw]">
                    What's on our mind?
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
            <div className="bg-white">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between py-12 lg:py-20">
                    <div className="w-full lg:w-5/12  font-bold text-[6vw] lg:text-5xl">
                        Get awesome web related content every week
                    </div>
                    <div className='w-full lg:w-1/2 email'>
                        {/* <input className='w-full h-full  '  type="email" placeholder='Email address *' name="" id="" /> */}

                        <form className="w-full h-full">
                            <div className="flex items-center border-b-2 border-gray-700 py-2">
                                <input className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none text-[5vw] lg:text-[2vw]" type="text" placeholder="Email address *" aria-label="Full name"  />
                                <button class="flex-shrink-0 border-transparent border-4 text-sm py-1 px-2 rounded" type="button">
                                    <img src={arrow} alt="" />
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-20">
                <div class="search-blog">
                    <div class="input-group w-full flex items-center border border-gray-600 text-[5vw] lg:text-[2vw]" style={{  padding: "1rem" }}>
                        <img className='px-4' src={search} alt="" />&nbsp;
                        <input class="form-control w-full text-white 
                      bg-transparent outline-none" type="text" id="search_insights_value" placeholder="Search All Insights &amp; Guides" style={{}} />

                    </div>
                </div>

            </div>
            <div className="container mx-auto my-20">
                <div className='flex lg:flex-row flex-col justify-between'>

                    <div className='flex flex-col lg:mx-4 my-8 text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>

                    <div className='flex flex-col lg:mx-4 my-8  text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>
                    <div className='flex flex-col lg:mx-4 my-8  text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>


                </div>
                <div className='flex lg:flex-row flex-col justify-between'>

                    <div className='flex flex-col  lg:mx-4 my-8 text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>

                    <div className='flex flex-col lg:mx-4 my-8  text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>
                    <div className='flex flex-col lg:mx-4 my-8  text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>


                </div>
                <div className='flex lg:flex-row flex-col justify-between'>

                    <div className='flex flex-col  lg:mx-4 my-8 text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>

                    <div className='flex flex-col lg:mx-4 my-8  text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>
                    <div className='flex flex-col lg:mx-4 my-8  text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>


                </div>

            </div>

            <div>

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
                <div  className=' bg-white'>
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
                <div  className='bg-white'>
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

export default Insights