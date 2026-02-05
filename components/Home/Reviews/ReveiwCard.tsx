import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

type Props = {
  review: {
    name: string;
    review: string;
    rating: number;
    profession: string;
    image: string;
  };
};
const ReveiwCard = ({ review }: Props) => {
  const { image, name, profession, rating, review: clientReview } = review;
  return (
    <div className='rounded-md overflow-hidden bg-[#140c1c] m-4 flex flex-col h-full min-h-[300px]'>
      <div className='p-6 flex-1 flex flex-col justify-between'>
        <div>
          <Image src="/images/q.png" alt="image" width={50} height={50} />
        </div>

        <p className='text-white text-opacity-70 mt-4'>{clientReview}</p>

        <div className='mt-4 flex justify-end'>
          <Image src="/images/q.png" alt="image" width={50} height={50} />
        </div>
      </div>

      <div className='px-6 py-3 mb-3 w-fit mx-auto rounded-full flex items-center space-x-3 bg-indigo-900 text-white font-bold'>
        <span>{rating}/5</span>
        <FaStar className='text-yellow-500' />
      </div>

      <div className='bg-gray-100'>
        <div className='p-6 flex items-center space-x-6'>
          <div>
            <Image src={image} alt={name} width={40} height={40} className='rounded-full'/>
          </div>
          <div>
            <h1 className='text-lg font-bold'>{name}</h1>
            <p className='text-base text-gray-700'>{profession}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReveiwCard