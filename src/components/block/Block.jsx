import React, { useEffect } from 'react'
import "./Block.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Block = () => {
   useEffect(() => {
       AOS.init({duration:800,delay:25,easing:'ease-in',once:"true"});
   }, [])
   

    return (
        <>
            <div className=" container relative mx-auto flex my-40 lg:my-80 "
                // style={{ height: "24rem" }}
            >
                
                <div  className="absolute top-[50%] lg:top-[10%] z-10 w-1/4 " >
                    <img src="https://www.spinxdigital.com/app/uploads/2022/09/image-intro1.jpg" alt="" />
                </div>
                <div data-aos="fade-in" className="w-full lg:w-10/12 lg:ps-48 flex flex-col justify-between h-full">
                    <p className="z-20 heading  font-bold lg:font-semibold text-[9.5vw] sm:text-[7vw] lg:text-[5vw]" >

                        We are a web design company in Los Angeles
                    </p>
                    <p className=' opacity-80  text-white  bottom-0 text-[5.8vw] sm:text-[4vw] lg:text-[2.5vw] py-8' >

                        At Moresco, our team of innovators and digital marketers in tech and design bring skills above and beyond the ordinary to every project.
                    </p>
                </div>

            </div>
        </>
    )
}

export default Block