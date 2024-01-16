import React from 'react'
import shopx from '../assets/shopx.jpg'
import cryptox from '../assets/cryptox.jpg'
import landingpage from '../assets/landingpage.jpg'

export default function MyWork() {
  return (
    <div id='mywork' className='min-h-[90vh] font-[Poppins]  bg-[#20272F] text-white' >
      <h1 className='text-[35px] font-bold text-center p-2' >My Works</h1>

      <section className='flex flex-wrap justify-between  '>

         <div className='m-5 h-[370px] w-[90vw] md:w-[27vw]   border-[whitesmoke] p-4 rounded-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-[#35414e] cursor-pointer hover:md:w-[28vw] duration-200 hover:md:h-[380px] hover:w-[91vw]'>
            <img src={shopx} alt="shopx" className='w-[450px] m-auto rounded'  draggable="false" />
            <h1 className='py-3 px-8 text-2xl text-center font-bold ' > ShopX  <span className='text-[16px] text-white'> - ecommerce site built with React and Tailwind</span></h1>
            <div className='text-center pt-5'> 
            <a href="https://shopx24.vercel.app/" target='_blank' className='p-3 bg-[#00BD95] hover:bg-[#79c2b2] m-2 rounded-[15px]  '>Visit site</a>
            <a href="https://github.com/Akash8245/ShopX" target='_blank' className='p-3 bg-[#2B3C52] m-2 rounded-[15px]  '>Code </a>
            </div>
        </div>
         {/* 2 */}
        <div className='m-5 h-[370px] w-[90vw] md:w-[27vw]   border-[whitesmoke] p-4 rounded-[15px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-[#35414e] cursor-pointer hover:md:w-[28vw] duration-200 hover:md:h-[380px] hover:w-[91vw]'>
            <img src={cryptox} alt="cryptox" className='w-[450px] m-auto rounded'  draggable="false" />
            <h1 className='py-3 px-8 text-2xl text-center font-bold ' > CryptoX  <span className='text-[16px] text-white'> - A crypto currency price tracker site </span></h1>
            <div className='text-center pt-5'> 
            <a href="https://cryptox24.netlify.app/" target='_blank' className='p-3 bg-[#00BD95] hover:bg-[#79c2b2] m-2 rounded-[15px]  '>Visit site</a>
            <a href="https://github.com/Akash8245/CryptoX" target='_blank' className='p-3 bg-[#2B3C52] m-2 rounded-[15px]  '>Code </a>
            </div>
        </div>
        {/* 3 */}
        <div className='m-5 h-[370px] w-[90vw] md:w-[27vw]   border-[whitesmoke] p-4 rounded-[15px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] shadow-[#35414e] cursor-pointer hover:md:w-[28vw] duration-200 hover:md:h-[380px] hover:w-[91vw]'>
            <img src={landingpage} alt="landingpage" className='w-[450px] m-auto rounded'  draggable="false" />
            <h1 className='py-3 px-8 text-2xl text-center font-bold ' > Landing page  <span className='text-[16px] text-white'> - A landing page build for a local business</span></h1>
            <div className='text-center pt-5'> 
            <a href="https://manustationary.000webhostapp.com/" target='_blank' className='p-3 bg-[#00BD95] hover:bg-[#79c2b2] m-2 rounded-[15px]  '>Visit site</a>
            </div>
        </div>
      </section>
    </div>
  )
}