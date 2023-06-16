import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container mx-auto mt-20 lg:mt-40 text-white">
                <div className='flex flex-col sm:flex-row'>
                    <div className="w-full md:w-2/6 my-8 ">
                        <div className='opacity-70 text-lg lg:text-xl leading-loose'>CHAT WITH US</div>
                        <div className='text-[5vw] sm:text-[2vw] leading-loose decoration-1 underline underline-offset-8 decoration-gray-500'>213.894.9933</div>
                        <div className='text-[5vw] sm:text-[2vw] leading-loose decoration-1 underline underline-offset-8 decoration-gray-500'>hello@spinxdigital.com</div>
                    </div>
                    <div className="w-full md:w-2/6 my-8">
                        <div className='opacity-70 text-lg lg:text-xl leading-loose'>FIND US</div>
                        <div className='text-[5vw] sm:text-[2vw] leading-relaxed '>911 W.Washignton Blvd.</div>
                        <div className='text-[5vw] sm:text-[2vw] leading-relaxed '>Los Angeles, California, 90015</div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row lg:items-center justify-between lg:mt-20 py-10'>
                    <div className='flex flex-col md:flex-row lg:items-center'>
                        <div className='text-4xl my-8 md:my-[0px]'>MORESCO</div>
                        <div className='opacity-70 my-4 md:px-4'>&#169; 2023 MORESCO All Rights Reserved</div>
                    </div>
                    <div className='flex lg:flex-row'>
                        <div className=' pr-4 text-xs lg:text-base'>Contact Us</div>
                        <div className=' pr-4 text-xs lg:text-base'>Privacy Policy</div>
                        <div className='pr-4 text-xs lg:text-base'>Do Not Sell My Info</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer