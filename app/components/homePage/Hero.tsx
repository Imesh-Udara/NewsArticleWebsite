import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='container'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-2 gap-2 '>
            <div className='xl:col-span-2 xl:row-start-1 xl:row-end-[-1]'>
                <img 
                className='w-full h-full object-cover rounded '
                src='/a-1.jpg'
                alt='article-01'
                 />
                 
                 <div className='absolute md:max-w-[839px] sm:ml-0 ml-8 top-[85.5%] sm:space-y-4 md:overflow-hidden  '>
                    <button className='md:bg-slate-900 hover:bg-opacity-40 hover:-translate-y-1   md:bg-opacity-30 md:overflow-hidden text-left text-2xl hidden sm:block text-white hover:scale-105 ease-in duration-500'>Spotlight on Kataragama Dewalaya deviating from God worship to land grab</button>
                    {/* <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Dried fruit</h2> */}
                    
                 </div>
                 
            </div>
            
            <div className='relative'>
                <img 
                className='w-full h-full object-cover rounded '
                src='/a-3.jpg'
                alt='article-01'
                 />
                 <div className='absolute max-w-[640px] md:ml-0 sm:ml-0 ml-8 top-[66%] sm:space-y-4 '>
                    <button className='md:bg-slate-900 hover:bg-opacity-40 hover:-translate-y-1 hover:scale-105 ease-in duration-500 md:bg-opacity-30 text-left text-2xl hidden sm:block text-white'>Palestinians in Gaza urged Gaza area 'smells of blood' after deadly hospital blast  </button>
                    {/* <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Dried fruit</h2> */}
                    
                 </div>
            </div>

            <div className='relative'>
                <img 
                className='w-full h-full object-cover rounded '
                src='/a-2.jpg'
                alt='article-01'
                 />
                 <div className='absolute max-w-[640px] md:ml-0 sm:ml-0 ml-8 md:top-[66%] sm:space-y-4 '>
                    <button className='md:bg-slate-900 hover:bg-opacity-40  md:bg-opacity-30 text-left text-2xl hidden sm:block text-white'>The Iten killings: Deaths of elite athletes cast spotlight on domestic violence</button>
                    {/* <h2 className='text-2xl sm:text-4xl md:text-6xl font-bold'>Dried fruit</h2> */}
                    {/* <button className="md:bg-sky-500/100 z-40"></button> */}
                    
                 </div>
                 
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero