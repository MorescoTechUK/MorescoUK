import React from 'react'
import './Insights.css'
import arrow from '../../assets/right-arrow.png'
import search from '../../assets/search.png'

const Insights = () => {
    return (
        <>
            <div className="container mx-auto my-40">
                <div className=" text-transparent  font-semibold leading-normal maintext10" >
                    What’s On Our Mind
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
            <div className="bg-white">
                <div className="container mx-auto flex justify-between py-20">
                    <div className="w-5/12  font-bold text-5xl">
                        Get awesome web related content every week
                    </div>
                    <div className='w-1/2 email'>
                        {/* <input className='w-full h-full  '  type="email" placeholder='Email address *' name="" id="" /> */}

                        <form className="w-full h-full">
                            <div className="flex items-center border-b-2 border-gray-700 py-2">
                                <input className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Email address *" aria-label="Full name" style={{ fontSize: "2.5rem" }} />
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
                    <div class="input-group w-full flex items-center border border-gray-600" style={{ fontSize: "2rem", padding: "1rem" }}>
                        <img className='px-4' src={search} alt="" />&nbsp;
                        <input class="form-control w-full text-gray-600 
                      bg-transparent outline-none" type="text" id="search_insights_value" placeholder="Search All Insights &amp; Guides" style={{}} />

                    </div>
                </div>

            </div>
            <div className="container mx-auto my-20">
                <div className='flex justify-between my-20'>

                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>

                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>
                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>


                </div>
                <div className='flex justify-between my-20'>

                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>

                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>
                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>


                </div>
                <div className='flex justify-between my-20'>

                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>

                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>
                    <div className='flex flex-col   text-white'>
                        <div className='text-2xl opacity-70 leading-relaxed'>Insight</div>
                        <div className='text-4xl leading-relaxed font-semibold'>Designing Websites For Generation Z</div>
                    </div>


                </div>

            </div>

            <div>

                <div className="container mx-auto">
                    <div className="heading1  text-8xl font-semibold text-end mb-20">
                        Featured Projects
                    </div>
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
                <div className='bg-white'>
                    <div className="container mx-auto">
                        <div className="flex flex-row py-20">
                            <div className='w-2/7 flex flex-col text-black'>
                                <span className='text-4xl opacity-80'>Willkie Website Redesign &amp; Development</span><br />
                                <h3 className='font-semibold text-5xl'>A High Stakes Legal Website Redesign</h3>
                            </div>
                            <div className="w-5/7 flex items-center justify-center" style={{ backgroundColor: "#3E2268 " }}>

                                <img src="https://www.spinxdigital.com/app/uploads/2023/04/Willkie-Thumbnail.jpg" alt="" style={{ width: "85%", height: "85%", }} />

                            </div>

                        </div>


                    </div >

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
                <div className='text-end text-4xl text-white py-4 container mx-auto underline underline-offset-8 decoration-2 decoration-slate-400'>
                    <a href="">See More Work</a>
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

export default Insights