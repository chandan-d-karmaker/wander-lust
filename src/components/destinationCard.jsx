import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";

const DestinationCard = ({ destination }) => {

    const { imageUrl, price, destinationName, duration, country } = destination;

    return (
        <div className='border'>
            <div className='relative'>
                <Image src={imageUrl} alt='thumbnail' width={400} height={400}></Image>
                <div>

                </div>
            </div>
            <div className='p-2'>
                <div className='flex gap-1 items-center'>
                    <CiLocationOn />
                    <p>{country}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <div>
                            <h1 className='text-xl font-bold'>{destinationName}</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <SlCalender />
                            <p>{duration}</p>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>${price}</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DestinationCard;