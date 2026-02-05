"use client";
import { clientReviews } from '@/Data/data';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReveiwCard from './ReveiwCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 3,
    slideToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slideToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slideToSlide: 1,
  }
};



const Slider = () => {
  return (
    <Carousel
      arrows={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      infinite
      responsive={responsive}
      itemClass='h-full p-4'
    >
      {clientReviews.map((review)=>{
        return <div key={review.image} className='h-full'>
          <ReveiwCard review={review}/>
        </div>
      })}
    </Carousel>
  )
}
export default Slider