'use client'
import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

export default function Header() {
    const router = useRouter()

    return (
        <header>
            <div className="flex px-3 py-5 bg-red-700 text-white">Using the &lt;Link&gt; Component</div>
            <nav className="flex bg-gray-200 p-3 gap-5">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <ul>
                    <li>
                        <Link href="/dashboard">Dashboard</Link>
                        <li><Link href="/dashboard/analytics">Analytics</Link></li>
                        <li><Link href="/dashboard/settings">Settings</Link></li>
                        <li><Link href="/dashboard/settings/password">Password</Link></li>
                        <li><Link href="/dashboard/settings/profile">Profile</Link></li>
                    </li>
                </ul>
            </nav>
            <div className="flex px-3 py-5 bg-red-700 text-white">Using the useRouter hook (Client Components)</div>
            <nav className="flex p-3 gap-5 bg-blue-200">
                <button type="button" onClick={() => router.push('/')}>
                    Home
                </button>
                <button type="button" onClick={() => router.push('/blog')}>
                    Blog
                </button>
                <ul><li>
                    <button type="button" onClick={() => router.push('/dashboard')}>
                        Dashboard
                    </button>
                    <li><button type="button" onClick={() => router.push('/dashboard/analytics')}>
                        Analytics
                    </button></li>
                    <li><button type="button" onClick={() => router.push('/dashboard/settings')}>
                        Settings
                    </button></li>
                    <li><button type="button" onClick={() => router.push('/dashboard/settings/password')}>
                        Password
                    </button></li>
                    <li><button type="button" onClick={() => router.push('/dashboard/settings/profile')}>
                        Profile
                    </button>
                    </li></li>
                </ul>
            </nav>
        </header>
    )
}
