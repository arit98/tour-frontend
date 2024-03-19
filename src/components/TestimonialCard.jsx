import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialCard = ({ img1, img2, img3, name1,name2,name3, role }) => {
    let review = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere cumque aliquam, ut beatae sunt quisquam"
    return (
        <div className='w-full flex items-center justify-between h-full gap-4'>
            <div className='flex flex-col items-center justify-start mt-4 gap-4'>
                <p>{review}</p>
                <div className='flex items-center justify-center'>
                    <div className='w-24'>
                        <img className='w-24 mt-4' src={img1} alt="" />
                    </div>
                    <div className='flex items-center justify-center flex-col ml-2'>
                        <p className='text-xs font-semibold'>{name1}</p>
                        <p className='text-xs'>{role}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start mt-4 gap-4'>
                <p>{review}</p>
                <div className='flex items-center justify-center'>
                    <div className='w-24'>
                        <img className='w-24 mt-4' src={img2} alt="" />
                    </div>
                    <div className='flex items-center justify-center flex-col ml-2'>
                        <p className='text-xs font-semibold'>{name2}</p>
                        <p className='text-xs'>{role}</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start mt-4 gap-4'>
                <p>{review}</p>
                <div className='flex items-center justify-center'>
                    <div className='w-24'>
                        <img className='w-24 mt-4' src={img3} alt="" />
                    </div>
                    <div className='flex items-center justify-center flex-col ml-2'>
                        <p className='text-xs font-semibold'>{name3}</p>
                        <p className='text-xs'>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;