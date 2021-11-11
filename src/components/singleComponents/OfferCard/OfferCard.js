import React from 'react';
import { Link } from 'react-router-dom';

const OfferCard = (props) => {
    const{_id, offer, tagLine, prevPrice, offerPrice, img, day} =props.offer
    return (
        <div className='relative transition-all duration-700 cursor-pointer mx-4 md:mx-0'>
            <div>
                <img className='h-96 w-full' src={img} alt='' />
            </div>
            <div className='absolute top-0 left-0 right-0 bottom-0 hover:bg-black hover:opacity-70 opacity-0 hover:text-white'>
                <div className='absolute inset-y-1/4 inset-x-12'>
                    <h2 className='text-xl'>{offer}</h2>
                    <h2 className=''>{tagLine}</h2>
                    <div className='flex justify-between'>
                        <h2 className=''>Previous Price : {prevPrice}$</h2>
                        <h2 className=''>Offer Price : {offerPrice}$</h2>
                    </div>
                    <h2 className=''>{day} days offer</h2>
                    <button className='bg-purple-700 px-4 mt-4 py-2 rounded'>
                        <Link to={`/booking/${_id}`}>Booking Now</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OfferCard;