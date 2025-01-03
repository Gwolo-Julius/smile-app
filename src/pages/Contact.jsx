import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='border-t text-center text-2xl pt-10'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
     <div className='flex flex-col md:flex-row justify-center gap-10 mb-28 my-10'>
      <img src={assets.contact_img} alt="" />
     </div>
    </div>
  )
}

export default Contact
