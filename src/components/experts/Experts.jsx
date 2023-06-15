import React from 'react'
import "./Experts.css"

const Experts = () => {
  return (
      <>
          <div className="container mx-auto mt-80 mb-40">

              <div className="flex justify-between">
                  <div className=" text-transparent text-center font-bold leading-normal maintext4" style={{fontSize:"5rem"}}>
                      We are experts in leading industry standard platforms & technologies.
                  </div>
                  

              </div>
          </div>

          <div className='flex flex-row '>
            
                  <div className="bg-white client-block flex justify-center items-center flex-col">
                      <img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/client-magento.svg" title="client-magento" height="80" width="100" alt="Magento"/>
                      <span className="d-block">Magento</span>
                  </div>
                  <div className="bg-white client-block flex justify-center items-center flex-col">
                      <img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/icon-wordpress.svg" title="icon-wordpress" height="80" width="100" alt="Wordpress"/>
                      <span className="d-block">Wordpress</span>
                  </div>
                  <div className="bg-white client-block flex justify-center items-center flex-col">
                      <img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/icon-shopify.svg" title="icon-shopify" height="80" width="100" alt="Shopify"/>
                      <span className="d-block">Shopify</span>
                  </div>
                  <div className="bg-white client-block flex justify-center items-center flex-col">
                      <img className="" src="https://www.spinxdigital.com/app/uploads/2023/01/icon-umbraco.svg" title="icon-umbraco" height="80" width="100" alt="Umbraco"/>
                      <span className="d-block">Umbraco</span>
                  </div>
                  <div className="bg-white client-block flex justify-center items-center flex-col">
                     < img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/microsoft-net.svg" title="microsoft-net" height="80" width="100" alt="Microsoft .NET"/>
                      <span className="d-block">Microsoft .NET</span>
                  </div>
                  <div className="bg-white client-block flex justify-center items-center flex-col">
                      <img className="" src="https://www.spinxdigital.com/app/uploads/2023/01/Property-1Sitefinity-2.svg" title="Property 1=Sitefinity" height="80" width="100" alt="Progress Sitefinity"/>
                      <span className="d-block">Progress Sitefinity</span>
                  </div>
                  
              
              
          </div>



          <div className="client-section dark-bg mb-40">
              <div className="client-slider">
                  <div className="flex client-slide is-inview" >
                      <div className="client-block flex justify-center items-center flex-col">
                          <span className="img-wrapper"><img className="" src="https://www.spinxdigital.com/app/uploads/2023/01/Shape.png" title="Shape" height="80" width="100" alt="Drupal"/></span>
                          <span className="d-block">Drupal</span>
                      </div>
                      <div className="client-block flex justify-center items-center flex-col">
                          <span className="img-wrapper"><img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/icon-sitecore.svg" title="icon-sitecore" height="80" width="100" alt="Sitecore"/></span>
                          <span className="d-block">Sitecore</span>
                      </div>
                      <div className="client-block flex justify-center items-center flex-col">
                          <span className="img-wrapper"><img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/icon-kentico.svg" title="icon-kentico" height="80" width="100" alt="Kentico"/></span>
                          <span className="d-block">Kentico</span>
                      </div>
                      <div className="client-block flex justify-center items-center flex-col">
                          <span className="img-wrapper"><img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/icon-react.svg" title="icon-react" height="80" width="100" alt="React JS"/></span>
                          <span className="d-block">React JS</span>
                      </div>
                      <div className="client-block flex justify-center items-center flex-col">
                          <span className="img-wrapper"><img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/icon-apple.svg" title="icon-apple" height="80" width="100" alt="Apple iOS"/></span>
                          <span className="d-block">Apple iOS</span>
                      </div>
                      <div className="client-block flex justify-center items-center flex-col">
                          <span className="img-wrapper"><img className="" src="https://www.spinxdigital.com/app/uploads/2022/09/icon-android.svg" title="icon-android" height="80" width="100" alt="Android"/></span>
                          <span className="d-block">Android</span>
                      </div>
                      
                  </div>
              </div>
          </div>

          <div className='text-white container mx-auto flex flex-col justify-start mb-40'>
              <div className='opacity-70 text-3xl w-1/2 mb-24'>
                  
              We've spent almost 2 decades in web design, and have crafted solutions using a wide variety of platforms.
              </div>
              <div className=' text-2xl w-1/2 mb-24 underline underline-offset-8 decoration-1 decoration-slate-700'>
                  
              Which platform is right for you?
              </div>
          </div>
      </>
  )
}

export default Experts