import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";

const ManageOrders = () => {
    const { user } = useAuth();
    const [ordersInfo, setOrdersInfo] = useState([]);
    useEffect(() => {
        fetch(`https://safe-journey-85901.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrdersInfo(data);
            });
    }, []);

    const cancelBooking = (id) => {
        const proceed = window.confirm(
            "Are your sure ? You want to cancel your booking ?"
        );
        if (proceed) {
            const url = `https://safe-journey-85901.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("successfully Cancel Your Booking");
                        const remainingdata = ordersInfo.filter(
                            (orderInfo) => orderInfo._id !== id
                        );
                        setOrdersInfo(remainingdata);
                    }
                });
        }
    };

    const info = ordersInfo?.find(
        (orderInfo) => orderInfo?.email === user.email
    );
    console.log(info);
    return (
        <div>
            <div className='container mx-auto py-12'>
                <h2 className='text-3xl text-center mb-4'>Booking Details</h2>
                {info?.email ? (
                    <div className='flex flex-col-reverse md:flex-row md:w-4/5 w-5/6 mx-auto bg-primary items-center p-8 rounded-md'>
                        <div className='md:w-2/3 md:mr-4 '>
                            <div className='grid md:grid-cols-2 grid-cols-1 border-2 p-4'>
                                <h2 className='md:text-xl text-white text-xs'>
                                    Order Id
                                </h2>
                                <h2 className=' text-gray-300'>{info?._id}</h2>
                                <h2 className='md:text-xl text-white text-xs'>
                                    Customer Name
                                </h2>
                                <h2 className=' text-gray-300'>{info?.name}</h2>
                                <h2 className='md:text-xl text-white text-xs'>
                                    Customer Email
                                </h2>
                                <h2 className=' text-gray-300'>
                                    {info?.email}
                                </h2>
                                <h2 className='md:text-xl text-white text-xs'>
                                    Customer Mobile No.
                                </h2>
                                <h2 className=' text-gray-300'>
                                    {info?.mobileNumber}
                                </h2>
                                <h2 className='md:text-xl text-white text-xs'>
                                    Total Members
                                </h2>
                                <h2 className=' text-gray-300'>
                                    {info?.person}
                                </h2>
                                <h2 className='md:text-xl text-white text-xs'>
                                    Total days
                                </h2>
                                <h2 className=' text-gray-300'>{info?.day}</h2>
                            </div>
                            <div>
                                <button
                                    className='bg-black mt-4 px-2 py-1 text-white'
                                    onClick={() => cancelBooking(info?._id)}
                                >
                                    Cancel Booking
                                </button>
                            </div>
                        </div>

                        <div className='md:w-1/3 w-full'>
                            <img src={info?.img} alt='' />
                            <h2 className='md:text-4xl text-xl py-4'>
                                {info?.offer}
                            </h2>
                        </div>
                    </div>
                ) : (
                    <div className='flex w-2/3 mx-auto bg-primary items-center p-8 rounded-md'>
                        <h2 className='text-2xl text-white text-center'>
                            You don't have any booking. Please ! Booking first .{" "}
                        </h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageOrders;
