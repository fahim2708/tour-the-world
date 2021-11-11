import React from 'react';
import useOffers from '../../../hooks/useOffers';
import OfferCard from '../OfferCard/OfferCard';

const OfferSection = () => {
    const [offers] = useOffers()
    return (
        <div>
            <div className='container mx-auto py-12'>
                <h2 className='text-4xl font-extrabold text-center'>
                    We offering you worldwide tour plan recently
                </h2>
                <h6 className="text-center text-blue-600 mb-4">Hover on image and see the offer details</h6>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                    {offers.slice(0, 6).map((offer) => (
                        <OfferCard key={offer._id} offer={offer}></OfferCard>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OfferSection;