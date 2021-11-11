import React from 'react';
import { useParams } from 'react-router';
import Rating from "react-rating";
import useHotelList from '../../../hooks/useHotelList';
import { FaMapMarkerAlt, FaRegStar, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleHotel = () => {
    const { id } = useParams();
    const [hotels] = useHotelList([]);
    const hotel = hotels?.find((hot) => hot._id === id);

    console.log(hotel)
    return (
        <div>
            <div className='container mx-auto'>
                <div className='w-3/4 mx-auto glass-effect p-12 my-8'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-2xl text-blue-500'>
                                {hotel?.hotelName}
                            </h2>
                            <div className='flex items-center'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <h2 className='pl-2'>{hotel?.hotelLocation}</h2>
                            </div>
                        </div>
                        <div>
                            <div className='flex pt-4'>
                                <Rating
                                    emptySymbol={
                                        <FaRegStar className='text-yellow-400'></FaRegStar>
                                    }
                                    fullSymbol={
                                        <FaStar className='text-yellow-400'></FaStar>
                                    }
                                    initialRating={4.5}
                                ></Rating>
                                <h2 className='pl-2'>4.5 / 5</h2>
                            </div>
                            <h2 className='text-right'>From 17 reviews</h2>
                        </div>
                    </div>
                    <div>
                        <img className='w-full' src={hotel?.hotelImg} alt='' />
                    </div>
                    <div>
                        <h2 className='text-2xl text-blue-500'>OverView</h2>
                        <p>{hotel?.hotelDesc}</p>
                    </div>
                    <div className='py-4'>
                        <h2 className='text-2xl text-blue-500'>
                            Hotel Facilities:{" "}
                        </h2>
                        <p className='grid grid-cols-4 gap-4'>
                            {hotel?.hotelFicilities.map((fac) => (
                                <li className='text-xl bg-primary p-2 rounded text-white'>
                                    {fac}
                                </li>
                            ))}
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-xl font-bold text-blue-500'>
                                Check In Time: {hotel?.checkInTime}
                            </h2>
                        </div>
                        <div>
                            <h2 className='text-xl font-bold text-blue-500'>
                                Check Out Time: {hotel?.checkOutTime}
                            </h2>
                        </div>
                    </div>
                    <button className='bg-purple-700 text-white px-4 mt-4 py-2 rounded'>
                        <Link to="/offers">Check Our Offer</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleHotel;