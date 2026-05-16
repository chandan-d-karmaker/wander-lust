import { Button } from '@heroui/react';
import React from 'react';
import DestinationCard from './destinationCard';
import Link from 'next/link';

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`);
    const destinations = await res.json();
    console.log(destinations);
    return (
        <div className='w-4/5 mx-auto my-14'>

            <div className='flex items-center justify-between mb-10'>
                <div>
                    <h1 className='text-3xl font-bold'>Featured Destinations</h1>
                    <p className='text-muted'>Handpicked travel experiences for the adventure seekers</p>
                </div>
                <Link href={'/destinations'}>
                    <Button variant='outline' className={'rounded-none border-cyan-500 border-2 text-cyan-500'}>All Destinations</Button>
                </Link>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination} />)
                }
            </div>
        </div>
    );
};

export default Featured;