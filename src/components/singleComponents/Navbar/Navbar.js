import React from "react";
import { FaBars } from "react-icons/fa"
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navbar = ({ fixed }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const { user } = useAuth()
    return (
        <>
            <div className='flex flex-wrap py-2 transition-all delay-1000'>
                <div className='w-full'>
                    <nav className='relative flex flex-wrap items-center justify-between rounded'>
                        <div className='container mx-auto flex flex-wrap items-center justify-between'>
                            <div className='w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start'>
                                <h2 className='text-2xl text-center md:hidden'>
                                    <Link to='/'>Tour The World</Link>
                                </h2>
                                <button
                                    className='primary-color cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
                                    type='button'
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    <FaBars />
                                </button>
                            </div>
                            <div
                                className={
                                    "lg:flex flex-grow items-center" +
                                    (menuOpen ? " flex" : " hidden")
                                }
                                id='example-navbar-info'
                            >
                                <ul className='flex flex-col mx-auto lg:flex-row list-none'>
                                    <li className='nav-item'>
                                        <Link
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                            to='/'
                                        >
                                            Home
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                            to='/about-us'
                                        >
                                            About Us
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                            to='/hotels'
                                        >
                                            Hotels
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                            to='/offers'
                                        >
                                            Offers
                                        </Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                            to='/tours'
                                        >
                                            Tours
                                        </Link>
                                    </li>
                                    {user.email || user.displayName ? (
                                        <>
                                            <li className='nav-item'>
                                                <Link
                                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                                    to='/add-offer'
                                                >
                                                    Add New Offer
                                                </Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link
                                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                                    to='/manage-booking'
                                                >
                                                    Manage Booking
                                                </Link>
                                            </li>
                                            <li className='nav-item'>
                                                <Link
                                                    className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                                    to='/my-booking'
                                                >
                                                    My Booking
                                                </Link>
                                            </li>
                                        </>
                                    ) : (
                                        ""
                                    )}
                                    <li className='nav-item'>
                                        <Link
                                            className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug primary-color hover:opacity-75'
                                            to='/contact'
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};
export default Navbar;
