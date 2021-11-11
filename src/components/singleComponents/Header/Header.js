import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
    return (
        <div className="">
            <div className="container mx-auto">
                <TopHeader></TopHeader>
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Header;