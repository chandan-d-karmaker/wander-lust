import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';

const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    const { imageUrl, price, destinationName, duration, country, description } = destination;
    console.log(destination);
    return (
        <div className='w-4/5 mx-auto my-20'>
            <Image src={imageUrl} alt='thubnail' width={500} height={500} className='mx-auto w-full'></Image>

            <div className='flex gap-1 items-center'>
                <CiLocationOn />
                <p>{country}</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='space-y-4'>
                    <div>
                        <h1 className='text-xl font-bold'>{destinationName}</h1>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <SlCalender />
                        <p>{duration}</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-lg font-semibold'>${price}</h1>
                </div>

            </div>

            <div>
                {description}
            </div>



        </div>
    );
};

export default DestinationDetailsPage;