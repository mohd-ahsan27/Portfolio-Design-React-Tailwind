import React from 'react';
import image1 from '../assets/pexel4.jpg';
import image2 from '../assets/pexels8.jpg';
import image3 from '../assets/pexels3.jpg';
import image4 from '../assets/pexels7.jpg';
import image5 from '../assets/pexels6.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen"> {/* Removed pt-24 */}
      <Swiper
        modules={[Pagination, Autoplay, Navigation]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 2000 }}
        loop={true}
        className="h-full"
      >
        {[image1, image2, image3, image4, image5].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen">
              <img
                src={img}
                className="w-full h-full object-fill object-cover"
                alt={`Slide ${index + 1}`}
              />

              {/* Bottom Overlay Text - Adjusted padding and placement */}
              <motion.div
                className="absolute bottom-10 w-full text-center z-10 text-white px-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
                  UnknownMind Developers
                </h1>
                <p className="text-sm sm:text-base mt-2 text-white">
                  Please Like, Share & Subscribe
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
