import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const TopHeader = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <div className='flex items-center md:justify-between justify-end'>
                <div className='md:w-1/5 md:block hidden overflow-hidden'>
                    <h1 className='text-2xl text-center font-extrabold'>
                        <Link to='/'>Tour The World</Link>
                    </h1>
                </div>
                <div className='flex md:w-2/5 justify-end items-center'>
                    {user?.email || user?.displayName ? (
                        <div className="">
                            <button onClick={logOut}><span className="text-xs text-blue-900">{user.displayName}</span>   Logout</button>
                        </div>
                    ) : (
                        <div className='flex text-right'>
                            <button className='pl-4'>
                                <Link to='/login'>Login</Link>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopHeader;