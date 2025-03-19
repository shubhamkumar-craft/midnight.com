  import React from 'react'

const Footer = () => {
  return (
    <div className='mt-5 '>
        <div className='grid gap-y-10 text-white lg:flex justify-evenly bg-[#080404] py-10  '>
           <div className='grid space-y-2   ' >
            <h1 className='text-xl font-bold underline mb-5 ' >About Us</h1>
            <a className=' font-medium hover:scale-105 ease-in-out hover:underline  ' href="#"> Our Company</a>
            <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="#">Our Coffee</a>
            <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="#">About Midnight</a>
            <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="#">Midnight Archive </a>
            <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="#">Contact Us</a>
           </div>
           <div className='grid space-y-2 font-semibold  ' >
             <h1 className='text-xl font-bold underline mb-5'>Careers </h1>
             <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="#">Culture and Value </a>
             <a className=' font-medium hover:scale-105 ease-in-out hover:underline  ' href="#">College Achievement plan </a>
             <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="#"> Alumni Community</a>
             <a className=' font-medium hover:scale-105 ease-in-out hover:underline  ' href="#">International Careers </a>
             
           </div>
{/* third */}
           <div className='grid space-y-2 font-bold  ' >
             <h1 className='text-xl font-bold underline mb-5 '>Order and Pick Up</h1>
             <a className=' font-medium hover:scale-105 ease-in-out hover:underline '
              href="#">Order on the App</a>
             <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="#">Delivery </a>
             <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="#"> Order and Pick Up Option</a>
             <a className=' font-medium hover:scale-105 ease-in-out hover:underline ' href="# ">Explore and Find Coffee </a>
            
           </div>
        </div>
        
    </div>
  )
}

export default Footer
