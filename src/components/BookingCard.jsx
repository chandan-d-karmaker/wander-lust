"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { Card } from '@heroui/react';
import React, { useState } from 'react';

const BookingCard = ({ destination }) => {
    const { data: sesson } = authClient.useSession();
    // console.log(sesson);
    const user = sesson?.user;
    // console.log(user)
    const [DepartureDate, setDepartureDate] = useState(null);
    // console.log(new Date(DepartureDate));
    const { imageUrl, price, destinationName, duration, country, description } = destination;

    const handleBooking = async()=>{
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userImage: user?.image,
            destinationId: destination._id,
            destinationName,
            imageUrl,
            country,
            price,
            DepartureDate: new Date(DepartureDate)
        }

        const res = await fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(bookingData)
        })

        const data =await res.json();
        console.log(data);

        // console.log(bookingData);
    }
    return (
        <div>
            <Card className='rounded-none border'>
                <p className='text-sm text-muted'>staring from</p>
                <h1 className='text-2xl font-bold text-cyan-500'>${price}</h1>
                <p className='text-sm text-muted'>per person</p>
                <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button onClick={handleBooking} className={'w-full bg-cyan-500'}>Book Now</Button>
            </Card>
        </div>
    );
};

export default BookingCard;