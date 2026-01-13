import React from 'react'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
   <div>
     <div>
      <div className="text-center text-2xl pt-10 text-gray-300">
        <p>CONTACT <span className="text-white font-semibold">US</span></p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[460px] rounded-lg" src={assets.contact_img} alt="contact-image"/>
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-white">OUR OFFICE</p>
          <p className="text-gray-200">48-527/3, Ganesh Nagar, Qutubullapur, Medchal<br/> HYDERABAD, TELANGANA, INDIA</p>
          <p className="text-gray-200">Tel: +91-903-053-7606 <br/> Email: altocumulustechnologies@gmail.com</p>
          <p className="font-semibold text-lg text-white">CAREERS AT ALTOCUMULUS</p>
          <p className="text-gray-200">Learn more about our teams and job openings.</p>
          <button className="border border-gray-400 px-8 py-4 text-sm text-white hover:bg-gray-900 transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
    <NewsLetterBox/>
   </div>
  )
}

export default Contact