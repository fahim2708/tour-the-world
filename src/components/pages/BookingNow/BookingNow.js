import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import swal from "sweetalert";
import useAuth from "../../../hooks/useAuth";

const BookingNow = () => {
    const { offerId } = useParams();
    const { user } = useAuth()
    const [offerInfo, setOfferInfo] = useState({});
    useEffect(() => {
        fetch(`https://safe-journey-85901.herokuapp.com/offers/${offerId}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOfferInfo(data)
            });
    }, [offerId]);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { _id, ...rest } = offerInfo
        axios
            .post("https://safe-journey-85901.herokuapp.com/orders", {
                ...data,
                ...rest,
            })
            .then((res) => {
                console.log(res.data);
                if (res.data?.insertedId) {
                    swal(
                        "Congratualations!!!",
                        `You have booking successfully`,
                        "success"
                    );
                    reset();
                }
            });
    };
    return (
        <div className='bg-primary'>
            <div className='container mx-auto py-12'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/3 mx-4 md:mx-0 text-white'>
                        <img src={offerInfo.img} alt='' />
                        <h2 className='text-3xl'>
                            Offer Name: {offerInfo?.offer}
                        </h2>
                        <h2>{offerInfo.tagLine}</h2>
                        <div className='flex justify-between text-xl'>
                            <h2>Previous Price: ${offerInfo.prevPrice}</h2>
                            <h2>Offer Price: ${offerInfo.offerPrice}</h2>
                        </div>
                        <div>
                            <h2>Total day with offer: {offerInfo.day}</h2>
                        </div>
                    </div>
                    <div>
                        <form
                            className='glass-effect p-8 w-3/4 mx-auto'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                value={
                                    user?.displayName ? user.DisplayName : ""
                                }
                                type='text'
                                placeholder='Your Name'
                                {...register("name")}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                value={
                                    user?.email ? user.email : ""
                                }
                                type='email'
                                placeholder='Your Email Address'
                                {...register("email")}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='tel'
                                placeholder='Your Mobile Number'
                                {...register("mobileNumber", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='number'
                                placeholder='How many days you want spend ?'
                                {...register("day", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='number'
                                placeholder='How many person want to go ?'
                                {...register("person", {
                                    required: true,
                                })}
                            />
                            {/* errors will return when field validation fails  */}
                            {errors.day && <span>This field is required</span>}

                            <input
                                className='w-full px-4 py-1 cursor-pointer'
                                type='submit'
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingNow;
