import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import Slider from './Slider'

const Reviews = () => {
  return (
    <div id="reviews" className='scroll-offset py-16 bg-[#0f0715]'>
      <SectionHeading>Client Reviews</SectionHeading>
      <div className='w-[90%] sm:w-[80%] mx-auto mt-20'>
        <Slider />
      </div>
    </div>
  )
}

export default Reviews