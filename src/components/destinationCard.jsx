import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { CiShare1 } from "react-icons/ci";
import Link from 'next/link';

const DestinationCard = ({ destination }) => {

    const { _id, imageUrl, price, destinationName, duration, country } = destination;

    return (
        <div className='border'>

            {/* image */}
            <div className='relative'>
                <Image src={imageUrl} alt='thumbnail' className='w-full' width={400} height={400}></Image>
                <div>

                </div>
            </div>
            {/* title */}
            <div className='p-2 space-y-2'>
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
                        <h1 className='text-lg font-semibold'>${price}</h1>
                    </div>

                </div>
                <div>
                    <Link href={`/destinations/${_id}`}>
                        <Button variant='ghost' className={'text-cyan-500 px-1 hover:bg-transparent'}>Book Now <CiShare1 /></Button></Link>
                </div>
            </div>

        </div>
    );
};

export default DestinationCard;