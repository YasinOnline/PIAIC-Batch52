import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (

        <header>
            <div className='flex bg-gray-200 p-3 gap-5 text-center justify-center fixed inset-x-0 bottom-0'>
                <Link href="/">Hello NextJS | PIAIC Batch 52 (Q2)</Link>
            </div>
        </header>
    )
}
