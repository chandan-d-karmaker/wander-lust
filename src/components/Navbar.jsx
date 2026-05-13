import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='shadow-sm'>
            <nav className='flex justify-between items-center p-5'>

                <ul className='flex gap-4'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/destinations'}>Destination</Link></li>
                    <li><Link href={'/booking'}>My Bookings</Link></li>
                    <li><Link href={'/add-destination'}>Add Destination</Link></li>
                </ul>

                <div>
                    <Image src={'/assets/Wanderlast.png'} alt='navbar logo' width={150} height={100}></Image>
                </div>

                <ul className='flex gap-4'>
                    <li><Link href={'/profile'}>Profile</Link></li>
                    <li><Link href={'/auth/login'}>login</Link></li>
                    <li><Link href={'/auth/signup'}>Sign Up</Link></li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;