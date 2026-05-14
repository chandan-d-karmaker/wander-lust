"use client";
import { authClient } from "@/lib/auth-client";
import { Button, DateField, Label } from "@heroui/react";
import { Card } from '@heroui/react';
import React, { useState } from 'react';
import toast from "react-hot-toast";

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

        const {data: tokenData} = await authClient.token()
        console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
            method: "POST",
            headers: {
                'content-type':'application/json',
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })

        const data =await res.json();
        // console.log(data);
        toast.success("Booked successfully")

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