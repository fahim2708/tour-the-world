import React from 'react';
import useTourList from '../../../hooks/useTourList';
import TourCard from '../../singleComponents/TourCard/TourCard';

const Tour = () => {
    const [tours] = useTourList();
    return (
        <div className=''>
            <div className='container mx-auto pb-24'>
                <h2 className='text-4xl pt-24 pb-12 mx-4 md:mx-0'>Feature Hiking Tours</h2>

                <div className='grid md:grid-cols-4 gap-8 grid-cols-1'>
                    {tours.map((tour) => (
                        <TourCard key={tour._id} tour={tour}></TourCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tour;