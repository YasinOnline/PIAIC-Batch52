'use client'
import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Home Page!</h1>
            <p>The aim of creating this page is to learn about the basics of Next.js navigation.</p>
            <Link href="/students">View Students (Link Component)</Link>
        </div>
    );
}

export default HomePage;
