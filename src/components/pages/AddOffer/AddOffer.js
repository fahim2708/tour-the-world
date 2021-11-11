import React from 'react';
import axios from "axios";
import useOffers from '../../../hooks/useOffers';
import OfferCard from '../../singleComponents/OfferCard/OfferCard';
import { useForm } from "react-hook-form";

const AddOffer = () => {
    const [offers] = useOffers()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        axios
            .post("https://safe-journey-85901.herokuapp.com/offers", data)
            .then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    alert("added successfully");
                    reset();
                }
            });
    }
    return (
        <div className='bg-primary'>
            <div className='container mx-auto py-16'>
                <h2 className='text-white mx-4 md:mx-0 text-4xl pb-8'>
                    Here has our some offers
                </h2>
                <div className='grid md:grid-cols-6 gap-4 grid-cols-1'>
                    <div className='col-span-4 grid md:grid-cols-3 grid-cols-1 gap-8'>
                        {offers.map((offer) => (
                            <OfferCard
                                key={offer._id}
                                offer={offer}
                            ></OfferCard>
                        ))}
                    </div>
                    <div className='col-span-2 mx-4 md:mx-0'>
                        <h2 className='text-white text-2xl pb-8'>
                            Add A New Offer
                        </h2>
                        <form
                            className='glass-effect p-8'
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='text'
                                placeholder='Offer Name'
                                {...register("offer", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='text'
                                placeholder='Offer Tagline'
                                {...register("tagLine", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='text'
                                placeholder='Offer Image Url Link'
                                {...register("img", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='number'
                                placeholder='Previous Price'
                                {...register("prevPrice", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='number'
                                placeholder='Offer Price'
                                {...register("offerPrice", {
                                    required: true,
                                })}
                            />
                            <input
                                className='w-full mb-4 px-4 py-1 rounded'
                                type='number'
                                placeholder='Duration in day'
                                {...register("day", {
                                    required: true,
                                })}
                            />
                            {/* errors will return when field validation fails  */}
                            {errors.day && (
                                <span>This field is required</span>
                            )}

                            <input className='w-full px-4 py-1' type='submit' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddOffer;