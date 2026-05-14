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
import BookingCard from '@/components/BookingCard';
import { headers } from 'next/headers';


const DestinationDetailsPage = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`http://localhost:5000/destination/${id}`, {
        headers: {
            authorization: 'logged in'
        }
    });
    const destination = await res.json();
    const { imageUrl, price, destinationName, duration, country, description } = destination;
    // console.log(destination);
    return (
        <div className='w-4/5 mx-auto my-20'>

            {/* top section */}
            <div className='flex justify-between items-center my-4'>
                <Link href={'/destinations'}>
                    <Button variant='ghost' className='flex gap-1 items-center'><FaArrowLeft /> Go back</Button>
                </Link>
                <div className='flex gap-2 items-center'>
                    <EditModal destination={destination} />
                    <DeleteAlert destination={destination} />
                </div>
            </div>

            {/* Thumbnail */}
            <Image src={imageUrl} alt='thubnail' width={500} height={500} className='mx-auto w-full h-120 object-cover'></Image>

            {/* details */}
            <div className='flex mt-5 justify-between'>
                {/* left side */}
                <div>
                    <div className='flex gap-1 items-center'>
                        <CiLocationOn />
                        <p>{country}</p>
                    </div>
                    <div className='space-y-2'>
                        <div>
                            <h1 className='text-xl font-bold'>{destinationName}</h1>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <SlCalender />
                            <p>{duration}</p>
                        </div>
                        <div>
                            {description}
                        </div>
                    </div>
                </div>

                {/* right side */}
                <BookingCard destination={destination} />
            </div>

        </div>
    );
};

export default DestinationDetailsPage;