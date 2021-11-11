import React from 'react';
import { NavLink } from 'react-router-dom';

const HotelCard = (props) => {
    const {_id,hotelName, hotelLocation, hotelImg, hotelTheme } =props.hotel
    return (
        <div className='glass-effect p-4 rounded-md'>
            <div className='overflow-hidden'>
                <img
                    className='h-64 transform hover:scale-125 transition ease-in duration-500'
                    src={hotelImg}
                    alt=''
                />
            </div>
            <div>
                <h2 className='text-xl font-semibold py-2'>{hotelName}</h2>
                <h2>{hotelLocation}</h2>
            </div>
            <h2>Hotel Themes:</h2>
            <div className='grid grid-cols-3 gap-4'>
                {hotelTheme.map((theme) => (
                    <div className='text-center bg-primary rounded'>
                        <h2 className='text-white py-1 '>{theme}</h2>
                    </div>
                ))}
            </div>
            <div className='text-center my-4'>
                <button className='bg-black text-white px-2 py-1 rounded'>
                    <NavLink to={`/hotels/${_id}`}>View Details</NavLink>
                </button>
            </div>
        </div>
    );
};

export default HotelCard;