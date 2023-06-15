import React from 'react'
import './Banner.css'
import video from '../../assets/video.mp4'

const Banner = () => {
    return (
        <>
            <div className="container mx-auto py-4 text-center lg:text-left">
                <div data-aos="fade" className="  banneruppertext font-bold ">

                    Crafting

                </div>
                <div data-aos="fade-up" className=' text-white font-bold' style={{fontSize:"6vw"}}>
                    <p>

                        Immersive Digital Stories
                    </p>
                    <p>
                        Through Technology
                    </p>
                </div>

            </div>
        </>
    )
}

export default Banner