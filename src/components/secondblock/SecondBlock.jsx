import React from 'react'
import './SecondBlock.css'

const SecondBlock = () => {
  return (
      <>
          <div className="secondblock container relative mx-auto flex my-40 lg:my-80  text-white text-[8vw] lg:text-[4vw] font-semibold" > 

              <div className='w-full lg:w-4/6 h-full mx-auto' >
                  <span>Our Los Angeles&nbsp;</span>
                  <a className='z-20 decoration-1 underline underline-offset-8 relative'  href="https://www.spinxdigital.com/website-solutions">web design</a> <span>and&nbsp;</span>
                  <a className='z-20 decoration-1 underline underline-offset-8 relative' href="https://www.spinxdigital.com/development/">development</a>
                  <span>&nbsp;team is involved in professional B2B and B2C web design and development,&nbsp;</span>
                  <a className='z-20 decoration-1 underline underline-offset-8 relative' href="https://www.spinxdigital.com/app-development-company/">mobile applications</a>
                  <span>, &nbsp;</span>
                  <a className='z-20 decoration-1 underline underline-offset-8 relative' href="https://www.spinxdigital.com/strategy-planning/">digital strategy</a>
                  <span>, user experience, advertising, social media,</span>
                  <a className='z-20 decoration-1 underline underline-offset-8 relative' href="https://www.spinxdigital.com/enterprise-cms-solutions/">content management systems</a>
                  <span>, and&nbsp;</span>
                  <a className='z-20 decoration-1 underline underline-offset-8 relative' href="https://www.spinxdigital.com/email-marketing/">email marketing initiatives.</a>
              </div>
              <div className="absolute left-0 bottom-0 w-5/12 md:w-3/12 z-10">
              <img src="https://www.spinxdigital.com/app/uploads/2022/09/image-intro3.jpg" alt="" />
                  
              </div>
              <div className="absolute right-0 top-[20%] md:top-[0] w-5/12 md:w-3/12 z-10">
              <img src="https://www.spinxdigital.com/app/uploads/2022/09/image-intro2.jpg" alt="" />
                  
              </div>

          </div>
      </>
  )
}

export default SecondBlock