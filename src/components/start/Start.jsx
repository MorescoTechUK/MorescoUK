import React from 'react'
import './Start.scss'

const Start = () => {
    return (
        <>
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

export default Start
