import React from 'react';
import Img01 from '../assets/images/ava-1.jpg';
import Img02 from '../assets/images/ava-2.jpg';
import Img03 from '../assets/images/ava-3.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TestimonialCard from './TestimonialCard';
import "../assets/styles/testimonialCarousel.css"

const TestimonialSection = ({ title, btn }) => {
    const renderIndicator = (onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ background: '#555', width: '8px', height: '8px', display: 'inline-block', margin: '0 5px', cursor: 'pointer' }}
              aria-label={`Slide ${index + 1}`}
              title={`${label} ${index + 1}`}
              key={index}
              onClick={onClickHandler}
            />
          );
        }
        return (
          <li
            style={{ background: '#ccc', width: '8px', height: '8px', display: 'inline-block', margin: '0 5px', cursor: 'pointer' }}
            aria-label={`Slide ${index + 1}`}
            title={`${label} ${index + 1}`}
            key={index}
            onClick={onClickHandler}
          />
        );
      };
    return (
        <div className='flex items-center justify-between w-[73%] m-auto select-none'>
            <div className='flex items-start justify-center flex-col w-full'>
                <p className='dancing-script px-2 bg-teal-400 rounded-xl'>{btn}</p>
                <p className='mt-2 text-2xl'>{title}</p>

                <div className='flex items-center justify-start gap-8 mt-4 w-[100%]'>
                    <Carousel
                    autoPlay={true}
                    interval={5000}
                    showArrows={false}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    stopOnHover={true}
                    useKeyboardArrows={true}
                    swipeable={true}
                    axis="horizontal"
                    ariaLabel="Testimonials Carousel"
                    renderIndicator={renderIndicator}
                    className='w-full text-black'>
                        <TestimonialCard img1={Img01} name1="John Doe" role="Customer" name2="Lia Franklin" img2={Img02} name3="James Bond" img3={Img03} />
                        <TestimonialCard img1={Img01} name1="John Doe" role="Customer" name2="Lia Franklin" img2={Img02} name3="James Bond" img3={Img03} />
                        <TestimonialCard img1={Img01} name1="John Doe" role="Customer" name2="Lia Franklin" img2={Img02} name3="James Bond" img3={Img03} />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
