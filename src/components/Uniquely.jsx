import React from 'react'
import './Uniquely.scss'
import { useState } from 'react';

const Uniquely = () => {

    const [present, setpresent] = useState('1');

    const handleClick = (s) => {
        setpresent(s)
    }

    return (
        <>
            <div className="container mx-auto mt-40 mb-40">
                <div className="w-4/5 text-transparent text-8xl font-bold leading-normal  maintext7">
                    Uniquely built for your brand
                </div>
                <div className='text-white text-3xl w-4/6 leading-relaxed mb-20'>Our team of web designers and developers at SPINX Digital excel at creating custom design solutions for every single client - no two sites are alike. Here's how we do it:</div>
                <ul>
                    <li onClick={(e) => {
                        e.preventDefault()
                        handleClick('1')
                    }} className={present === '1' ? "active" : ""}>
                        <div className="section-title">
                            <h2 className='text-5xl font-bold'>01 Connect</h2>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit voluptatum temporibus dicta reprehenderit tempore quisquam consequuntur porro omnis laboriosam praesentium at et sapiente, provident sit! Suscipit recusandae, ab ratione dignissimos.</p>
                        </div>
                    </li>
                    <li onClick={(e) => {
                        e.preventDefault()
                        handleClick('2')
                    }} className={present === '2' ? "active" : ""}>
                        <div className="section-title">
                            <h2 className='text-5xl font-bold'>01 Connect</h2>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora totam delectus, eius nostrum aspernatur voluptas enim fugit ipsa magni voluptatem, odio sit accusamus vel id, commodi consequuntur possimus repellat necessitatibus!</p>
                        </div>
                    </li>
                    <li onClick={(e) => {
                        e.preventDefault()
                        handleClick('3')
                    }} className={present === '3' ? "active" : ""}>
                        <div className="section-title">
                            <h2 className='text-4xl font-bold'>01 Connect</h2>
                        </div>
                        <div className="section-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur saepe vel facilis quae nihil ad aspernatur ex delectus. Tenetur nulla voluptates similique quos, quia possimus, magnam esse natus quis ipsa.</p>
                        </div>
                    </li>
                    
                </ul>
            </div>

        

           

        </>
    )
}

export default Uniquely