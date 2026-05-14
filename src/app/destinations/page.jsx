import DestinationCard from '@/components/destinationCard';
import React from 'react';

const DestinationPage = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
    const destinations = await res.json();
    return (
        <div className='w-4/5 mx-auto my-20'>
            <h1>All destinations</h1>
            <div className='grid grid-cols-3 gap-4 mx-auto'>
                {
                    destinations.map(destination => <DestinationCard key={destination._id} destination={destination}>
                        <h1>{destination.destinationName}</h1>
                    </DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;