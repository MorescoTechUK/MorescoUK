import React from 'react'
import './Start.scss'

const Start = () => {
    return (
        <>
            <div className="container mx-auto my-20 lg:my-40 overflow-hidden relative">
                <div class="marquee1 opacity-50 h-[20vh] lg:h-[30vh] ">
                    <div class="marquee1--inner">
                        <span>
                            <div className="text-white  font-semibold text-[24vh] lg:text-[35vh]" style={{  WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCO
                            </div>
                        </span>
                        <span>
                            <div className="text-white  font-semibold text-[24vh] lg:text-[35vh]" style={{  WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCO
                            </div>
                        </span>
                    </div>
                </div>
                <div class="marquee2 opacity-50 h-[20vh] lg:h-[30vh]">
                    <div class="marquee2--inner">
                        <span>
                            <div className="text-white  font-semibold text-[24vh] lg:text-[35vh]" style={{  WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
                                MORESCO
                            </div>
                        </span>
                        <span>
                            <div className="text-white  font-semibold text-[24vh] lg:text-[35vh]" style={{  WebkitTextFillColor: "transparent", WebkitTextStroke: "1px", lineHeight: "27rem" }}>
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

export default Start
