'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const { data: sesson } = authClient.useSession();
    // console.log(sesson);
    const user = sesson?.user;
    // console.log(user)

    const handleSignOut = async()=>{
        await authClient.signOut();
    }
    return (
        <div className='shadow-sm'>
            <nav className='flex justify-between items-center p-2'>

                <ul className='flex gap-4'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/destinations'}>Destination</Link></li>
                    <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                    <li><Link href={'/add-destination'}>Add Destination</Link></li>
                </ul>

                <div>
                    <Image src={'/assets/Wanderlast.png'} alt='navbar logo' width={150} height={100}></Image>
                </div>

                <ul className='flex items-center gap-4'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    <>
                        {
                            user ? <div className='flex items-center gap-4'>
                                <Avatar>
                                    <Avatar.Image referrerPolicy='no-referrer' alt={user.name} src={user.image} />
                                    <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
                                </Avatar>
                                <li><Button onClick={handleSignOut}>Sign out</Button></li>
                            </div> : <div className='flex items-center gap-4'>
                                <li><Link href={'/auth/login'}>login</Link></li>
                                <li><Link href={'/auth/signup'}>Sign Up</Link></li>
                            </div>
                        }
                    </>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;