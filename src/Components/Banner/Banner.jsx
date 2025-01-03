import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Banner.scss';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import bg1 from '../../images/bannerbg.png';
import bg2 from '../../images/bannerbg2.png';
import bg3 from '../../images/bannerbg3.png';

const Banner = () => {
  const slides = [
    { id: 1, title: 'NIKE AIR MAX', description: 'Comfort like never before', image: bg1 },
    { id: 2, title: 'ADIDAS ULTRABOOST', description: 'Run with the best', image: bg2 },
    { id: 3, title: 'PUMA FUTURE', description: 'Style meets performance', image: bg3 },
  ];

  return (
    <motion.div 
      className="banner_slider"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="banner_txt"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3>
          Do it <mark id="banner_txt">right</mark>
        </h3>
      </motion.div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="swiper_container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              className="banner_slide"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <motion.div
                className="banner_content"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.4 }}
              >
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Shop Now
                </motion.button>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Banner;
