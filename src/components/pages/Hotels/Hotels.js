import React from 'react';
import useHotelList from '../../../hooks/useHotelList';
import HotelCard from '../../singleComponents/HotelCard/HotelCard';

const Hotels = () => {
    const [hotels] = useHotelList();
    return (
        <div class='bg-primary'>
            <div className='container mx-auto py-12'>
                <h2 className='text-4xl pb-4 text-left text-white'>
                    Last Minute Deals
                </h2>
                <div className='grid md:grid-cols-4 grid-cols-1 gap-8'>
                    {hotels.map((hotel) => (
                        <HotelCard key={hotel._id} hotel={hotel}></HotelCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hotels;