import React from 'react';
import { Link } from 'react-router-dom';
import useOffers from '../../../hooks/useOffers';
import OfferCard from '../../singleComponents/OfferCard/OfferCard';

const Offer = () => {
    const [offers] = useOffers();
    return (
        <div>
            <div className='container mx-auto py-12'>
                <h2 className='text-4xl mx-4 md:mx-0'>
                    We offer worldwide tour plan recently
                </h2>
                <p className='text-gray-400 py-8 mx-4 md:mx-0'>
                    Make she'd moved divided air. Whose tree that hath own upon
                    them it multiply was blessed
                </p>
                <h2 className='text-2xl mb-4 mx-4 md:mx-0'>
                    Hover on image and see the offer details
                </h2>
                <div className='grid md:grid-cols-3 gap-8 grid-cols-1'>
                    {offers.map((offer) => (
                        <OfferCard key={offer._id} offer={offer}></OfferCard>
                    ))}
                </div>
                <div className='text-center'>
                    <Link to='/add-offer'>
                        <button className='bg-black text-white mt-8 px-4 py-1 rounded mx-auto'>
                            Add New Offer
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Offer;