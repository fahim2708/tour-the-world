import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [ordersInfo, setOrdersInfo] = useState([]);
    useEffect(() => {
        fetch(`https://safe-journey-85901.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrdersInfo(data);
            });
    }, []);

    // const cancelBooking = id => {
    //     const proceed = window.confirm("Are your sure ? You want to cancel your booking ?")
    //     if (proceed) {
    //         const url = `https://safe-journey-85901.herokuapp.com/orders/${id}`;
    //         fetch(url, {
    //             method: "DELETE"
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     alert("successfully Cancel Your Booking")
    //                     const remainingdata = ordersInfo.filter(orderInfo => orderInfo._id !== id)
    //                     setOrdersInfo(remainingdata)
    //             }
    //         })
    //     }
    // }
    // console.log(ordersInfo);

    let handelAccept = id => {
        const proceed = window.confirm(
            "Are you sure, You want to Accept this order?"
        );
        if (proceed) {
            // let sliceId = e.target.textContent.slice(6);
            const url = `https://safe-journey-85901.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        alert("Update Successful.");
                    }
                });
        }
    };
    const handelCancel = id => {
        const proceed = window.confirm("Are you sure, You want to delete it?");
        if (proceed) {
            // let sliceId = e.target.textContent.slice(6);
            const url = `https://safe-journey-85901.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("Successfully delete the data.");
                        const remainingdata = ordersInfo.filter(
                            (orderInfo) => orderInfo._id !== id
                        );
                        setOrdersInfo(remainingdata);

                    }
                });
        }
    };


    // const info = ordersInfo.find( orderInfo => orderInfo.data.email === user.email)
    // console.log(info);
    return (
        <div>
            <div className='container mx-auto py-12'>
                <h2 className='text-3xl text-center mb-4'>Booking Details</h2>
                {ordersInfo.map((orderInfo) => (
                    <div className='flex flex-col-reverse md:flex-row md:w-2/3 w-5/6 mx-auto bg-primary mb-4 items-center p-8 rounded-md'>
                        <div className='md:w-2/3 w-full'>
                            <h2 className='md:text-xl text-white md:font-bold'>
                                Booker Name: {orderInfo?.name}
                            </h2>
                            <h2 className='md:text-xl text-white md:font-bold'>
                                Booker Email Address: {orderInfo?.email}
                            </h2>
                            <h2 className='md:text-xl text-white md:font-bold'>
                                Booker Contact Number: {orderInfo?.mobileNumber}
                            </h2>
                            <h2 className='md:text-xl text-white md:font-bold'>
                                Total Member: {orderInfo?.person}
                            </h2>
                            <h2 className='md:text-xl text-white md:font-bold'>
                                Total Day: {orderInfo?.day}
                            </h2>
                            <div className="mt-4">
                                {
                                    !orderInfo?.status ?
                                        <button
                                            className='bg-black px-2 py-1 mr-2 text-white'
                                            onClick={() => handelAccept(orderInfo?._id)}
                                        >
                                            Approve Booking
                                        </button> :
                                        ""
                                }
                                <button
                                    className='bg-black px-2 py-1 text-white'
                                    onClick={() => handelCancel(orderInfo?._id)}
                                >
                                    Cancel Booking
                                </button>
                            </div>
                        </div>

                        <div className='md:w-1/3 w-full'>
                            <img src={orderInfo?.img} alt='' />
                            <h2 className='md:text-4xl text-xl py-4'>
                                {orderInfo?.offer}
                            </h2>
                            <h2
                                className={orderInfo?.status ? "text-white text-center bg-green-500 py-2" : "bg-red-600 py-2 text-white text-center"}
                            >
                                {orderInfo?.status ? "Approved" : "Pending"}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageOrders;