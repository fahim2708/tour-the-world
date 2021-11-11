import React from 'react';
import useTourList from '../../../hooks/useTourList';

const HikingStyleSection = () => {
    const [tours] = useTourList()
    return (
        <div>
            <div className='container mx-auto pb-12'>
                <p className='text-center text-yellow-600 w-1/2 mx-auto py-12'>
                    Since 2014, we’ve helped more than 500,000 people of all
                    ages enjoy the best outdoor experience of their lives.
                    Whether it’s for one day or a two-week vacation, close to
                    home or a foreign land.
                </p>
                <h2 className='text-4xl pb-8 text-center font-extrabold'>Choose Your Hiking Style</h2>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                    {tours.slice(0, 8).map((tour) => (
                        <div className='relative'>
                            <img src={tour.hotelImg} alt='' />
                            <h2 className='absolute top-1/2 inset-x-6 text-2xl text-white text-center'>
                                <h2>{tour.tourName}</h2>
                            </h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HikingStyleSection;