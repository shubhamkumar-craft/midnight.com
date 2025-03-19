import React from 'react'

const Specification = () => {
  return (
    <div className='px-5  mt-3 gap-5 '>
      <div className='grid md:grid-cols-2 bg-[#E4EFE7]  delay-150 hover:scale-95 ease-in-out  rounded-xl border-[2px] hover:shadow-xl transition-all border-neutral-400  ' >
             <div className='px-6 py-5 flex flex-col text-center justify-center ' >
                <h1 className='text-2xl md:text-4xl font-bold font-poppins '>Our oldest, smoothest <br /> cold brew yet </h1>
                
               <p className='mt-10 text-lg font-medium text-gray-600 '  >
                Discover the rich flavors and craftsmanship behind <br /> the new Midnight Cold Coffee as it journeys  from the finest <br /> coffee farms to your cup.</p>
             </div>

     <div className='flex justify-end ' >
        <img className='h-[400px] rounded-r-xl  ' src="src/assets/a7f7952b-b5cc-4381-949f-7b890a19c1a8.jpeg" alt="" />
     </div>
  </div>  
  {/* second  */}
  <div className='grid md:grid-cols-2 bg-[#E4EFE7] transition-all  delay-150 hover:scale-95 ease-in-out   mt-10 rounded-xl border-[2px] hover:shadow-xl  border-neutral-400 ' >
  <div className='flex justify-start ' >
        <img className='h-[400px]  ' src="src/assets/fb466918-ec05-41db-abb6-8448a15bacfc.jpeg" alt="" />
     </div>
             <div className='px-6 py-5 flex flex-col  text-center justify-center ' >
                <h1 className='text-2xl md:text-4xl font-bold font-poppins'>Our creamiest, most indulgent shake yet </h1>
                
               <p className='mt-10 text-lg font-medium text-gray-600 '  >
               Discover the rich flavors and velvety smoothness of <br /> the new Midnight Shake, crafted to satisfy your late-night <br /> cravings with every sip.</p>
             </div>

     
  </div>  
  {/* third  */}
  <div className='grid md:grid-cols-2 bg-[#E4EFE7]  mt-10 rounded-xl border-[2px]  delay-150 hover:scale-95 ease-in-out     hover:shadow-xl transition-all border-neutral-400 ' >
             <div className='px-6 py-5 flex flex-col text-center justify-center ' >
                <h1 className='text-2xl md:text-4xl font-bold font-poppins '>Unleash the night’s energy</h1>
                
               <p className='mt-10 text-lg font-medium text-gray-600  '  >
               Experience the rush of the new Midnight Energy <br /> Drink, crafted to keep you going with bold flavor and <br /> unstoppable power.</p>
             </div>

     <div className='flex justify-end ' >
        <img className='h-[400px] rounded-r-xl ' src="src/assets/127b4f81-98f0-4f00-8e9c-f1c10215621a.jpeg" alt="" />
     </div>
  </div> 
    
      
    </div>
  )
}

export default Specification
