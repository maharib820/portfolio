import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination'
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='w-full'>
            <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
            <Swiper
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex gap-5 justify-center w-full'>
                        <div className='w-full'>
                            <img className='border text-right' src="https://i.ibb.co/yPmtQWZ/3.png" alt="" />
                            <div className=''><Link><button className='btn w-full bg-primary mt-5 text-white'>Live Link</button></Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex gap-5 justify-center w-full'>
                        <div className='w-full'>
                            <img className='border text-right' src="https://i.ibb.co/L9ZXvsS/1.png" alt="" />
                            <div className=''><Link><button className='btn w-full bg-primary mt-5 text-white'>Live Link</button></Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex gap-5 justify-center w-full'>
                        <div className='w-full'>
                            <img className='border text-right' src="https://i.ibb.co/tqLr9Y8/2.png" alt="" />
                            <div className=''><Link><button className='btn w-full bg-primary mt-5 text-white'>Live Link</button></Link></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Projects;