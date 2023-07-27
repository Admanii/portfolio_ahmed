import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

import './Testimonials.scss';
import { NavigationDots, NavigationDotsHorizontal } from '../../components';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [brands, setBrands] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });

    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const logAllCompanies = (testimonialsArray) => {
    let arr = [];
    if (testimonialsArray && Array.isArray(testimonialsArray)) {
      testimonialsArray.forEach((testimonial) => {
        arr.push(testimonial.company);

      });
    } else {
      console.error("Invalid testimonials data.");
    }

    return arr
  };

  const allCompanyTestimonials = logAllCompanies(testimonials);



  return (
    <>
      <h2 className='head-text'>Testimonials</h2>
    
      {/* {console.log("Array",allCompanyTestimonials)} */}
      {testimonials.length && (
        <>
         
            <div className="app__testimonial-item app__flex">
              <img src={urlFor(testimonials[currentIndex].imageurl)} alt={testimonials[currentIndex]?.name} />
              <div className="app__testimonial-content">
                <p className="p-text">"{testimonials[currentIndex]?.feedback}"</p>
                <div>
                  <h4 className="bold-text">{testimonials[currentIndex]?.name}</h4>
                  <h5 className="p-text">{testimonials[currentIndex]?.company}</h5>
                </div>
              </div>
            </div>

          <div>
            {/* <NavigationDotsHorizontal array={allCompanyTestimonials} active={currentIndex} /> */}
            <div className="app__testimonial-btns app__flex">
              <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>

              <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>
          </div>

        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <Tippy content={<span className='skills-tooltip'>{brand.name}</span>}>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 3, type: 'tween' }}
              key={brand._id}
            >
              <img src={urlFor(brand?.imgUrl)} alt={brand.name} />
            </motion.div>
          </Tippy>
        ))}
      </div>
    </>
  );
};

export default AppWrap(Testimonials, 'testimonials')

