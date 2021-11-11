import React from "react";
import Iframe from "react-iframe";

const Contact = () => {
    return (
        <div>
            <div className="py-6 bg-primary">
                <h2 className='text-center text-white text-6xl'>Contact Us</h2>
            </div>
            <div className='container mx-auto mt-10'>
                <div className='flex bg-yellow-500 p-12 mb-8 rounded-md'>
                    <div className='w-1/3 text-gray-200'>
                        <div>
                            <h2 className='text2xl font-bold text-white'>
                                General Information
                            </h2>
                            <p>121 King Street, Melbourne,</p>
                            <p>Victoria 3000 Australia</p>
                            <p>Phone: +12 9 8765 4321</p>
                            <p>Email: hello@yourdomain.com</p>
                        </div>
                        <div className='py-8'>
                            <h2 className='text2xl font-bold text-white'>
                                Tour Experience
                            </h2>
                            <p>
                                Hannah Harper - Patient Experience Coordinator
                            </p>
                            <p>Phone: +12 9 8765 4321</p>
                            <p>Email: hello@yourdomain.com</p>
                        </div>
                        <div>
                            <h2 className='text2xl font-bold text-white'>
                                Working Hours
                            </h2>
                            <p>Monday – Friday : 8:00 AM - 8:00 PM</p>
                            <p>Saturday : 10:00 AM - 6:00 PM</p>
                            <p>Sunday : 10:00 AM - 4:00 PM</p>
                        </div>
                    </div>
                    <div className='w-2/3'>
                        <div className='glass-effect p-12 overflow-hidden'>
                            <form action=''>
                                <div className='flex my-2 overflow-hidden'>
                                    <div className='w-1/2 mr-2'>
                                        <input
                                            className='w-full bg-gray-700 p-2 outline-none'
                                            type='text'
                                            placeholder='Enter Your Name'
                                        />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <input
                                            className='w-full p-2 bg-gray-700 outline-none'
                                            type='text'
                                            placeholder='Enter Your Email'
                                        />
                                    </div>
                                </div>
                                <div className='flex my-2 overflow-hidden'>
                                    <div className='w-1/2 mr-2'>
                                        <input
                                            className='w-full p-2 bg-gray-700 outline-none'
                                            type='text'
                                            placeholder='Enter Your Phone Number'
                                        />
                                    </div>
                                    <div className='w-1/2 ml-2'>
                                        <select
                                            className='w-full p-2 text-white bg-gray-700 outline-none'
                                            name=''
                                            id=''
                                        >
                                            <option value='Have you visited us before?*'>
                                                Have you visited us before?*
                                            </option>
                                            <option value='New Patient'>
                                                Yes
                                            </option>
                                            <option value='Returning Patient'>
                                                No
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full mb-2'>
                                    <input
                                        className='w-full p-2 bg-gray-700 outline-none'
                                        type='text'
                                        placeholder='Subject'
                                    />
                                </div>
                                <div>
                                    <textarea
                                        className='w-full p-2 bg-gray-700'
                                        name=''
                                        id=''
                                        cols='30'
                                        rows='7'
                                        placeholder='Your Message'
                                    ></textarea>
                                </div>
                                <div>
                                    <input
                                        className='px-4 py-1 bg-black text-white'
                                        type='submit'
                                        value='Submit'
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
