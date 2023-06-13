import React, { useEffect } from 'react'
import "./Block.css"
import { motion, useWillChange,useScroll,useAnimation } from "framer-motion";

const Block = () => {

    const willChange = useWillChange()
    const { scrollYProgress } = useScroll();

    useEffect(() => {
      console.log(window.scrollY)
    }, [window.scrollY])
    

    return (
        <>
            <div className=" container relative mx-auto flex my-80 " style={{ height: "24rem" }}>
                
                <motion.div style={{ scaleX: scrollYProgress }}     className="absolute z-10 w-1/5 " >
                    <img src="https://www.spinxdigital.com/app/uploads/2022/09/image-intro1.jpg" alt="" />
                </motion.div>
                <div className="w-5/6 ps-48 flex flex-col justify-between h-full">
                    <p className="z-20 heading text-7xl font-semibold ">

                        We are a web design company in Los Angeles
                    </p>
                    <p className=' opacity-80  text-white  bottom-0' style={{fontSize:"2.5rem",lineHeight:"3.2rem"}}>

                        At Moresco, our team of innovators and digital marketers in tech and design bring skills above and beyond the ordinary to every project.
                    </p>
                </div>

            </div>
        </>
    )
}

export default Block