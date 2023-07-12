import React from 'react'
import icon from "../../public/icons/03.png"

function CurrentWeather() {
  return (
    <div className=' mt-10 w-[30rem] bg-gradient-to-tl from-sky-50 to-sky-500 rounded-2xl text-white p-7 flex justify-between items-center ring-2 ring-sky-100'>
        <div>
            <h1 className=' text-lg font-medium'>Yangon</h1>
            <span className=' text-md'>Sunny</span>
            <h1 className=' mt-5 text-5xl'>20°</h1>
        </div>
        <img src={icon} className=' h-28' />
    </div>
  )
}

export default CurrentWeather
