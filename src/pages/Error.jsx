import React from 'react'
import { assets } from '../assets/assets'

const Error = () => {
  return (
    <div className='w-full h-80 flex flex-wrap items-center justify-center'>
      <img className="w-80" src={assets.error_title} alt=""/>
      <img className="w-80" src={assets.error_img} alt=""/>
    </div>
  )
}

export default Error