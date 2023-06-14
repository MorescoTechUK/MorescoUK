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


    return (
        <>
            <div className="container mx-auto mt-80 mb-40">

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
            </div>
        </>
    )
}

export default Process