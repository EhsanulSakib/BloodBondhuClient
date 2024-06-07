import React from 'react';
import Banner from '../../component/banner/Banner';
import HomeRegistration from '../../component/homeRegistration/HomeRegistration';
import FAQ from '../../component/faq/FAQ';
import HomeComplainBox from '../../component/homeComplainBox/HomeComplainBox';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeRegistration></HomeRegistration>
            <h2 className='text-4xl xl:text-5xl text-center my-4 lg:my-8'>রক্তদান কর্মসূচি</h2>
            <FAQ></FAQ>
            <HomeComplainBox></HomeComplainBox>
        </div>
    );
};

export default Home;