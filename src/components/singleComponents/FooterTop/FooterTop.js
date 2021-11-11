import React from "react";
import { FaFacebook, FaInstagram, FaMobileAlt, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterTop = () => {

    return (
        <div>
            <div className='container py-12 mx-auto'>
                <div className='flex md:flex-row flex-col'>
                    <div className='text-white w-full px-4 md:w-2/6'>
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold'>Tour The World</h2>
                            <p className='py-4'>
                                From the iconic to the unexpected, the city of
                                San Francisco never ceases to surprise.
                                Kick-start your effortlessly delivered Northern
                                California holiday in the cosmopolitan hills of
                                'The City'. Join your Travel Director and fellow
                                travellers for a Welcome Reception at your
                                hotel.Welcome Reception
                            </p>
                            <button className='font-semibold flex items-center hover:text-green-700 bg-gray-600 p-2'>
                                Booking Now
                            </button>
                        </div>
                    </div>
                    <div className='text-white w-full px-4 md:w-1/6'>
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold pb-4'>Support</h2>
                            <ul>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Direct Contact
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Helpline
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Emargency Call
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Financial Support
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Bank Loan
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-white px-4 w-full md:w-1/6'>
                        <div className='text-white'>
                            <h2 className='text-2xl font-bold pb-4'>
                                Important Links
                            </h2>
                            <ul>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Offers
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className=' py-2 text-lg'>
                                    <Link
                                        to='/'
                                        className='hover:text-blue-600'
                                    >
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='bg-gray-400 rounded-lg w-5/6 mx-auto md:w-2/6 p-8'>
                        <div className='text-center'>
                            <h2 className='text-2xl font-extrabold'>Contact Us</h2>
                            <h2 className='text-4xl py-4 flex items-center'>
                                <FaMobileAlt /> +32 2 642 00 42
                            </h2>
                            <p>
                                Am Gestade 3 1010 Vienna
                            </p>
                            <div className='flex items-center justify-center flex-col md:flex-row'>
                                <div className='md:w-2/3 w-full'>
                                    <button className=''>
                                        Find Us On
                                    </button>
                                </div>
                                <div className='md:w-1/3 w-full'>
                                    <span className='px-1'>
                                        <FaFacebook />
                                    </span>
                                    <span className='px-1'>
                                        <FaTwitter />
                                    </span>
                                    <span className='px-1'>
                                        <FaInstagram />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;
