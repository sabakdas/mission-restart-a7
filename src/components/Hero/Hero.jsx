import React from 'react';
import vector1 from '../../assets/vector1.png'
const Hero = () => {
    return (
      <>
       <div className='bg-gray-100'>
        <div className='flex w-11/12 mx-auto justify-between py-10'>
        <div className='bg-gradient-to-tl w-[780px] h-auto from-[#9F62F2] to-[#632EE3] border-0 rounded-md border-0 relative items-center w-fit'>  
             
              <span className='flex'>
                 <img src={vector1} alt="" />
                 <img className='transform scale-x-[-1]' src={vector1} alt="" />
              </span> 
               <span className='absolute flex inset-0 justify-center items-center '>
                <p className='text-2xl font-light text-white'>In-Progress<br/>
                  <span className='flex justify-center items-center text-4xl font-semibold text-white'>0</span>
                </p>   
              </span>
        </div>
        <div className='bg-gradient-to-tl w-[780px] h-auto from-[#00827A] to-[#54CF68] border-0 rounded-md border-0 relative items-center w-fit'>  
             
              <span className='flex'>
                 <img src={vector1} alt="" />
                 <img className='transform scale-x-[-1]' src={vector1} alt="" />
              </span> 
               <span className='absolute flex inset-0 justify-center items-center '>
                <p className='text-2xl font-light text-white'>Resolved<br/>
                  <span className='flex justify-center items-center text-4xl font-semibold text-white'>0</span>
                </p>   
              </span>
        </div>
      
      </div>
      </div>
      </>
    );
};

export default Hero;