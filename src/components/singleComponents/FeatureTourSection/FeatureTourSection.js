import React from 'react';
import useTourList from '../../../hooks/useTourList';
import TourCard from '../TourCard/TourCard';

const FeatureTourSection = () => {
    const [tours] = useTourList()
    return (
        <div className="">
            <div className='container mx-auto pb-24'>
                <h2 className="text-4xl pt-24 pb-12 text-center font-extrabold">Feature Hiking Tours</h2>

                <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
                    {
                        tours.slice(2, 10).map(tour =>
                            <TourCard key={tour._id} tour={tour}></TourCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureTourSection;