import React from 'react';
import { FaClock, FaDollarSign, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';

const TourCard = (props) => {
    const {_id, tourName, hotelImg, tourPrice, duration, reviews, rating, tourLocation} = props.tour
    return (
        <div className='bg-white mx-4 md:mx-0 shadow-xl border-2 p-4 rounded-md'>
            <img className='rounded-md' src={hotelImg} alt='' />
            <div>
                <p className='text-left'>{tourLocation}</p>
                <h2 className='text-left'>{tourName}</h2>
                <div className='flex pt-4'>
                    <Rating
                        emptySymbol={
                            <FaRegStar className='text-yellow-400'></FaRegStar>
                        }
                        fullSymbol={
                            <FaStar className='text-yellow-400'></FaStar>
                        }
                        initialRating={rating}
                    ></Rating>
                    <h2 className='pl-2'>{reviews} reviews</h2>
                </div>
                <div className='flex justify-between pt-12 pb-4'>
                    <div className='flex items-center'>
                        <FaClock></FaClock>
                        <h2>{duration}</h2>
                    </div>
                    <div className='flex items-center'>
                        <FaDollarSign></FaDollarSign>
                        <h2>from {tourPrice}</h2>
                    </div>
                </div>
                <div className='text-center'>
                    <button className="bg-black text-white px-2 py-1 rounded">
                        <NavLink to={`/tours/${_id}`}>View Details</NavLink>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TourCard;