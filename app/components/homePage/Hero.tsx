import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='container pt-4'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-4'>
            <div className=' xl:col-span-2 xl:row-start-1 xl:row-end-[-1] '>
                <img 
                className='w-full h-full object-cover rounded '
                src='/a-1.jpg'
                alt='article-01'
                 />
                 
                 <div className='absolute max-w-[640px] sm:ml-4 ml-8 top-[85%] sm:space-y-4 '>
                    <p className='text-2xl hidden sm:block text-white  '>Spotlight on Kataragama Dewalaya deviating from God worship to land grab</p>
                    {/* <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Dried fruit</h2> */}
                    
                 </div>
                 
            </div>
            
            <div className='relative'>
                <img 
                className='w-full h-full object-cover rounded '
                src='/a-3.jpg'
                alt='article-01'
                 />
                 <div className='absolute max-w-[640px] sm:ml-4 ml-8 top-[60%] sm:space-y-4 '>
                    <p className='text-2xl hidden sm:block text-white'>Palestinians in Gaza urged Gaza area 'smells of blood' after deadly hospital blast  </p>
                    {/* <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Dried fruit</h2> */}
                    
                 </div>
            </div>

            <div className='relative'>
                <img 
                className='w-full h-full object-cover rounded '
                src='/a-2.jpg'
                alt='article-01'
                 />
                 <div className='absolute max-w-[640px] sm:ml-4 ml-8 top-[60%] sm:space-y-4 '>
                    <p className='text-2xl hidden sm:block text-white'>The Iten killings: Deaths of elite athletes cast spotlight on domestic violence</p>
                    {/* <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Dried fruit</h2> */}
                    
                 </div>
                 
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero