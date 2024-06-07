import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div className='mb-4 md:mb-8 lg:mb-12'>
            <div className='relative'>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 2000 }}
                >
                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/GVbxmkD/230614-Blood-Donation-Blog-cover.webp")` }} className='flex items-center justify-center z-1 w-full h-96 md:h-[400px] lg:h-[650px] xl:h-[750px] 2xl:h-[1200px] bg-cover bg-bottom relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/sth48zs/NRP-WBDD-Header.webp")` }} className='flex items-center justify-center z-1 w-full h-96 md:h-[400px] lg:h-[650px] xl:h-[750px] 2xl:h-[1200px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/4t9qGW0/KIMSBlood-Donation2.jpg")` }} className='flex items-center justify-center z-1 w-full h-96 md:h-[400px] lg:h-[650px] xl:h-[750px] 2xl:h-[1200px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>

                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/Tw0mdLf/background.png")` }} className='flex items-center justify-center z-1 w-full h-96 md:h-[400px] lg:h-[650px] xl:h-[750px] 2xl:h-[1200px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/zN3LKpJ/Blood-Donation-1200x549-facebook-1200x628.jpg")` }} className='flex items-center justify-center z-1 w-full h-96 md:h-[400px] lg:h-[650px] xl:h-[750px] 2xl:h-[1200px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ backgroundImage: `url("https://i.ibb.co/1fwbRS4/2150254046.jpg")` }} className='flex items-center justify-center z-1 w-full h-96 md:h-[400px] lg:h-[650px] xl:h-[750px] 2xl:h-[1200px] bg-cover bg-center relative'>
                            <div className='absolute w-full h-full bg-black opacity-50'>
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
                <h2 className='text-white drop-shadow-lg font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center md:text-left inline-block w-2/3 2xl:w-1/3 left-[18%] md:left-16 xl:left-24 text absolute top-[30%] 2xl:top-[38%] md:tracking-wide space z-10 leading-relaxed'>
                    <h1 className='text-red-400 text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4'> ব্লাড বন্ধু</h1>
                    <span className='leading-relaxed'>কমিউনিটিতে আপনাকে স্বাগতম</span>
                    <br />
                    <h2 className=' leading-relaxed'>যেখানে আপনি বিনামূল্যে</h2>
                    <span className=' leading-relaxed' style={{ color: 'white', fontWeight: 'bold', margin: '5px 0' }}>
                        <Typewriter
                            words={['রক্তদান করতে পারবেন', 'রক্ত গ্রহণ করতে পারবেন']}
                            loop={false}
                            cursor
                            typeSpeed={50}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h2>
            </div>


        </div>

    );
};

export default Banner;