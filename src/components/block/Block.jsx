import React, { useEffect } from 'react'
import "./Block.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Block = () => {
   useEffect(() => {
       AOS.init({duration:800,delay:25,easing:'ease-in'});
   }, [])
   

    return (
        <>
            <div  className=" container relative mx-auto flex my-80 " style={{ height: "24rem" }}>
                
                <div  className="absolute z-10 w-1/5 " >
                    <img src="https://www.spinxdigital.com/app/uploads/2022/09/image-intro1.jpg" alt="" />
                </div>
                <div data-aos="fade-in" className="w-5/6 ps-48 flex flex-col justify-between h-full">
                    <p className="z-20 heading  font-semibold " style={{fontSize:"4.5vw"}}>

                        We are a web design company in Los Angeles
                    </p>
                    <p className=' opacity-80  text-white  bottom-0' style={{fontSize:"2.5vw",lineHeight:"3.2rem"}}>

                        At Moresco, our team of innovators and digital marketers in tech and design bring skills above and beyond the ordinary to every project.
                    </p>
                </div>

            </div>
        </>
    )
}

export default Block