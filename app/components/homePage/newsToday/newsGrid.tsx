import React from 'react'

const NewsGrid = () => {
  return (
    <>
    <div className='mb-0'>
        <img 
                className='w-full h-full object-cover rounded '
                src='/a-1.jpg'
                alt='article-01'
                 />
                 <div className="text-right">
                    <p className="text-sm mt-1">Octomber 9 2023</p>
                 </div>
                 <div className="mt-2 text-lg">
                    <p className="font-semibold">This the newas article that I have news dnn jjff</p>
                 </div>
                 <div className="text-left">
                    <p className="text-sm">Sri Lankan Ambassador to Israel Nimal Bandara states that at least 27 Sri Lankans living in northern Gaza are reportedly moving to souther</p>
                 </div>
        </div>
    </>
  )
}

export default NewsGrid