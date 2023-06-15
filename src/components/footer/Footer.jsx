import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container mx-auto mt-40 text-white">
                <div className='flex flex-row'>
                    <div className="w-2/6 ">
                        <div className='opacity-70 text-xl leading-loose'>CHAT WITH US</div>
                        <div className='text-4xl leading-loose decoration-1 underline underline-offset-8 decoration-gray-500'>213.894.9933</div>
                        <div className='text-4xl leading-loose decoration-1 underline underline-offset-8 decoration-gray-500'>hello@spinxdigital.com</div>
                    </div>
                    <div className="w-2/6">
                        <div className='opacity-70 text-xl leading-loose'>FIND US</div>
                        <div className=' text-4xl leading-relaxed '>911 W.Washignton Blvd.</div>
                        <div className='text-4xl leading-relaxed '>Los Angeles, California, 90015</div>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-between mt-20 py-10'>
                    <div className='flex items-center'>
                        <div className='text-4xl'>MORESCO</div>
                        <div className='opacity-70 px-4'>&#169; 2023 MORESCO All Rights Reserved</div>
                    </div>
                    <div className='flex'>
                        <div className='px-4 text-base'>Contact Us</div>
                        <div className='px-4 text-base'>Privacy Policy</div>
                        <div className='px-4 text-base'>Do Not Sell My Info</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer