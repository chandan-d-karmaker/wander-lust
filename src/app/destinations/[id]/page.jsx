import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { SlCalender } from 'react-icons/sl';
import { FaRegEdit } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { EditModal } from '@/components/EditModal';
import { DeleteAlert } from '@/components/DeleteAlert';


const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    const { imageUrl, price, destinationName, duration, country, description } = destination;
    // console.log(destination);
    return (
        <div className='w-4/5 mx-auto my-20'>
            <div className='flex justify-between items-center my-4'>
                <Link href={'/destinations'}>
                    <Button variant='ghost' className='flex gap-1 items-center'><FaArrowLeft /> Go back</Button>
                </Link>
                <div className='flex gap-2 items-center'>
                    <EditModal destination={destination} />
                    <DeleteAlert destination={destination} />
                </div>
            </div>
            <Image src={imageUrl} alt='thubnail' width={500} height={500} className='mx-auto w-full h-120 object-cover'></Image>

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