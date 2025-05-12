import React from 'react';
import pic from '../assets/img1.jpg';
import pic1 from '../assets/img2.jpg';
import pic2 from '../assets/img3.jpg';
import pic3 from '../assets/img4.jpg';
import pic4 from '../assets/img5.jpg';
import pic5 from '../assets/img6.jpg';
import pic6 from '../assets/img7.jpg';
import pic7 from '../assets/img8.jpg';
import pic8 from '../assets/img9.jpg';

const Hero3 = () => {
  const images = [pic1, pic, pic2, pic7, pic6, pic1, pic6, pic7, pic8];

  return (
    <div className='bg-slate-900 pt-28 pb-16'>
      <h1 className='text-4xl font-medium text-white text-center mb-4'>Image Gallery</h1>
      <hr className='border-2 border-white w-80 m-auto mb-10' />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-10'>
        {images.map((img, index) => (
          <div key={index} className='flex justify-center'>
            <img
              src={img}
              alt={`Gallery Image ${index + 1}`}
              className='w-[25rem] transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-xl rounded-lg'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero3;
