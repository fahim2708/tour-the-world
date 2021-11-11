import React from "react";
import { useParams } from "react-router";
import Rating from "react-rating";
import { FaMapMarkerAlt, FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTourList from "../../../hooks/useTourList";

const SingleTour = () => {
    const { id } = useParams();
    const [tours] = useTourList([]);
    const tour = tours?.find((ele) => ele._id === id);

    console.log(tour);
    return (
        <div>
            <div className='container mx-auto'>
                <div className='w-3/4 mx-auto glass-effect p-12 my-8'>
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-2xl text-blue-500'>
                                {tour?.tourName}
                            </h2>
                            <div className='flex items-center'>
                                <FaMapMarkerAlt></FaMapMarkerAlt>
                                <h2 className='pl-2'>{tour?.tourLocation}</h2>
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
                                    initialRating={tour?.rating}
                                ></Rating>
                                <h2 className='pl-2'>4.5 / 5</h2>
                            </div>
                            <h2 className='text-right'>
                                From {tour?.reviews} reviews
                            </h2>
                        </div>
                    </div>
                    <div>
                        <img className='w-full' src={tour?.hotelImg} alt='' />
                    </div>
                    <div>
                        <h2 className='text-2xl text-blue-500'>OverView</h2>
                        <p>{tour?.tourDesc}</p>
                    </div>
                    <div className='py-4'>
                        <h2 className='text-2xl text-blue-500'>
                            Tour Highlights:{" "}
                        </h2>
                        <p className=''>
                            {tour?.tourHighlights.map((fac) => (
                                <li className='text-xl'>{fac}</li>
                            ))}
                        </p>
                    </div>
                    <div className='py-4'>
                        <p className='grid grid-cols-2 gap-4'>
                            <div>
                                <h2 className='text-2xl text-blue-500'>
                                    Included:{" "}
                                </h2>
                                {tour?.included.map((fac) => (
                                    <li className='text-xl bg-primary mb-2 p-2 rounded text-white'>
                                        {fac}
                                    </li>
                                ))}
                            </div>
                            <div>
                                <h2 className='text-2xl text-blue-500'>
                                    Excluded:{" "}
                                </h2>
                                {tour?.excluded.map((fac) => (
                                    <li className='text-xl bg-primary mb-2 p-2 rounded text-white'>
                                        {fac}
                                    </li>
                                ))}
                            </div>
                        </p>
                    </div>
                    <div>
                        <h2 className='text-xl font-bold text-blue-500'>
                            Duration: {tour?.duration}
                        </h2>
                    </div>
                    <button className='bg-purple-700 text-white px-4 mt-4 py-2 rounded'>
                        <Link to='/offers'>Check Our Offer</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleTour;
