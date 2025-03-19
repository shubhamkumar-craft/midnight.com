import React from 'react'

const Main = () => {
  return (
    <div className=' ' >
      <div className='h-[400px] px-4 flex justify-start items-end bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: "url(src/assets/robert-shunev-OmOvMdiaZZ0-unsplash.jpg)" }}>
       <div className='text-white  pb-5  font-semibold font-sans space-y-2 ' >
        <h1 className=' text-3xl  md:text-5xl font-tektur ' >A Cup of Joy in  Every Sip.</h1> 
        <p className='hidden md:flex  font-md font-sans  ' >Master the perfect brew with Midnight! Learn the art and science of coffee brewing.</p>
      </div>
      <div className='hidden lg:flex absolute right-28 top-36  ' >
          <h2 className='text-4xl  font-semibold text-amber-200  font-tektur ' >Take a Trip around <br /> The world</h2>
      </div>
      </div>
     <div className='flex justify-center text-3xl md:text-5xl font-tektur font-semibold px-3 py-3 mb-10 text-gray-900 ' >
     <h1 >Our Premium Products</h1>
     </div>
      <div className=' px-3 grid grid-cols-2 gap-8 lg:space-y-2  md:flex md:justify-between   ' >
       {/* first  */}
        <div className=' flex items-center px-5  ' > 
         <a href="#"> <img className='rounded-full w-[150px] hover:motion-safe:animate-bounce  ' src="src/assets/Bestseller.webp" alt="" />
        </a>
        </div>
        {/* second  */}
        <div className=' flex items-center px-5  ' > 
         <a href="#"> <img className='rounded-full w-[150px] hover:motion-safe:animate-bounce  ' src="src/assets/Drinks.webp" alt="" />
        </a>
        </div>
        {/* third  */}
        <div className=' flex items-center px-5  ' > 
         <a href="#"> <img className='rounded-full w-[150px] hover:motion-safe:animate-bounce duration-500 ' src="src/assets/ReadyToEat.webp" alt="" />
        </a>
        </div>
        {/* fourth  */}
        <div className=' flex items-center px-5  ' > 
        <a href="#">  <img className='rounded-full w-[150px] hover:motion-safe:animate-bounce ' src="src/assets/cf8f1305-8d1c-4dc5-a2ee-650f41e2f588.jpeg" alt="" />
       </a> </div>
        {/* fifth  */}
        <div className=' grid items-center text-center px-5   ' > 
         <a href="#"> <img className='rounded-full w-[150px] hover:motion-safe:animate-bounce  ' src="src/assets/16a1fdb8-0092-440f-abe7-74042de011d8.jpeg" alt="" />
          </a>
        </div>
        {/* six */}
        <div className='md:hidden grid items-center text-center px-5   ' > 
         <a href="#"> <img className='rounded-full w-[150px] hover:motion-safe:animate-bounce  ' src="src/assets/output.jpg" alt="" />
          </a>
        </div>
      </div>
      {/* Recommends */}
     <div className='mt-10 px-8 bg-amber-100 py-2 text-3xl  font-semibold font-tektur ' >
      <h1>Recommended Products</h1>
     </div>
     <div className='flex overflow-x-scroll space-x-5 md:space-x-10 justify-center lg:justify-between  mt-5 mx-2 py-3  rounded-xl border-neutral-200 ' >
        <div className='px-2 py-2 grid  w-fit ' >
        {/* img  */}
           <div>
            <a href="#">
              <img className='w-[250px]  rounded-lg border-[1px] border-[#00754a]  ' src="src/assets/a7f7952b-b5cc-4381-949f-7b890a19c1a8.jpeg" alt="" />
            </a>
           </div>
       {/* price  */}
           <div className='flex justify-center text-center px-1 py-1 mt-4 w-[250px] ' >
            <a className='text-xl  hover:border-[2px] hover:border-black font-bold bg-[#00754a] w-full  py-2 rounded-md ' href="#">RS. 129</a>
           </div>
        </div>
        {/* first copy for create scroll bar */}
         <div className='px-2 py-2 grid  w-fit md:hidden lg:hidden ' >
        {/* img  */}
           <div>
            <a href="#">
              <img className='w-[250px]  rounded-lg border-[1px] border-[#00754a]  ' src="src/assets/a7f7952b-b5cc-4381-949f-7b890a19c1a8.jpeg" alt="" />
            </a>
           </div>
       {/* price  */}
           <div className='flex justify-center text-center px-1 py-1 mt-4 w-[250px] ' >
            <a className='text-xl  hover:border-[2px] hover:border-black font-bold bg-[#00754a] w-full  py-2 rounded-md ' href="#">RS. 129</a>
           </div>
        </div>
                {/* first copy for create scroll bar */}
         <div className='px-2 py-2 grid  w-fit lg:hidden ' >
        {/* img  */}
           <div>
            <a href="#">
              <img className='w-[250px]  rounded-lg border-[1px] border-[#00754a]  ' src="src/assets/a7f7952b-b5cc-4381-949f-7b890a19c1a8.jpeg" alt="" />
            </a>
           </div>
       {/* price  */}
           <div className='flex justify-center text-center px-1 py-1 mt-4 w-[250px] ' >
            <a className='text-xl  hover:border-[2px] hover:border-black font-bold bg-[#00754a] w-full  py-2 rounded-md ' href="#">RS. 129</a>
           </div>
        </div>
                {/* first copy for create scroll bar */}
         <div className='px-2 py-2 grid  w-fit lg:hidden ' >
        {/* img  */}
           <div>
            <a href="#">
              <img className='w-[250px]  rounded-lg border-[1px] border-[#00754a]  ' src="src/assets/a7f7952b-b5cc-4381-949f-7b890a19c1a8.jpeg" alt="" />
            </a>
           </div>
       {/* price  */}
           <div className='flex justify-center text-center px-1 py-1 mt-4 w-[250px] ' >
            <a className='text-xl  hover:border-[2px] hover:border-black font-bold bg-[#00754a] w-full  py-2 rounded-md ' href="#">RS. 129</a>
           </div>
        </div>

        {/* second  */}
        <div className='px-2 py-2 grid w-fit' >
        {/* img  */}
           <div>
            <a href="#">
              <img className='w-[250px] rounded-lg border-[1px] border-[#00754a]  ' src="src/assets/44e77574-ddb3-4b97-9dd5-5e5ca3693af9.jpeg" alt="" />
            </a>
           </div>
       {/* price  */}
           <div className='flex justify-center text-center px-1 py-1 mt-4 w-[250px]   ' >
            <a className='text-xl font-bold bg-[#00754a] w-full hover:border-[2px] hover:border-black py-2 rounded-md ' href="#">RS. 99</a>
           </div>
        </div>
        {/* third  */}
        <div className='px-2 py-2 grid w-fit' >
        {/* img  */}
           <div>
            <a href="#">
              <img className='w-[250px] rounded-lg border-[1px] border-[#00754a]  ' src="src/assets/fb466918-ec05-41db-abb6-8448a15bacfc.jpeg" alt="" />
            </a>
           </div>
       {/* price  */}
           <div className='flex justify-center text-center px-1 py-1 mt-4 w-[250px] w-[250px]  ' >
            <a className='text-xl font-bold bg-[#00754a] w-full  hover:border-[2px] hover:border-black py-2 rounded-md ' href="#">RS. 150</a>
           </div>
        </div>
        {/* fourth  */}
        <div className='px-2 py-2 grid ' >
        {/* img  */}
           <div>
            <a href="#">
              <img className='w-[250px] rounded-lg border-[1px] border-[#00754a]  ' src="src/assets/127b4f81-98f0-4f00-8e9c-f1c10215621a.jpeg" alt="" />
            </a>
           </div>
       {/* price  */}
           <div className='flex justify-center text-center px-1 py-1 mt-4 w-[250px]  ' >
            <a className='text-xl font-bold bg-[#00754a] w-full  py-2 rounded-md hover:border-[2px] hover:border-black' href="#">RS. 120</a>
           </div>
        </div>
        
        



         </div>
 
       {/* Chatbot */}
      {/* Chatbot */}
<div className="bg-black rounded-full fixed bottom-4 transition-all duration-300 ease-in-out 
               hover:bg-gray-900 hover:scale-105 
 right-6 p-1 w-[60px] md:w-[110px] shadow-lg animate-float ">
  <a href="#">
    <img 
      className="rounded-full w-[80px] md:w-[110px]  object-cover   " 
      src="/src/assets/7bc982fb-5a74-4236-bb59-835687dc64c4.jpeg" 
      alt="chatbot" 
    />
  </a>
</div>

    </div>
  )
}

export default Main
