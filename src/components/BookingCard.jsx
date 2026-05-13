"use client";
import {Button, DateField, Label} from "@heroui/react";
import { Card } from '@heroui/react';
import React from 'react';

const BookingCard = ({ destination }) => {
    const { imageUrl, price, destinationName, duration, country, description } = destination;
    return (
        <div>
            <Card className='rounded-none border'>
                <p className='text-sm text-muted'>staring from</p>
                <h1 className='text-2xl font-bold text-cyan-500'>${price}</h1>
                <p className='text-sm text-muted'>per person</p>
                <DateField className="w-[256px]" name="date">
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                    </DateField.Group>
                </DateField>
                <Button className={'w-full bg-cyan-500'}>Book Now</Button>
            </Card>
        </div>
    );
};

export default BookingCard;