'use client'
/* import React from "react";
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
 */

import React, { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    const [isDashboardOpen, setIsDashboardOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    const toggleDashboard = () => {
        setIsDashboardOpen(!isDashboardOpen);
    };

    const toggleSettings = () => {
        setIsSettingsOpen(!isSettingsOpen);
    };

    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <span className="text-white font-bold text-lg cursor-pointer">Home</span>
                    </Link>
                    <span
                        className="text-white ml-4 cursor-pointer hover:underline"
                        onClick={toggleDashboard}
                    >
                        Dashboard
                    </span>
                    {isDashboardOpen && (
                        <div className="absolute bg-gray-800 mt-2 py-2 w-32 rounded-lg shadow-lg">
                            <Link href="/dashboard">
                                <span className="block text-white text-sm px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                    Dashboard Home
                                </span>
                            </Link>
                            <Link href="/dashboard/analytics">
                                <span className="block text-white text-sm px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                    Analytics
                                </span>
                            </Link>
                            <span
                                className="block text-white text-sm px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                onClick={toggleSettings}
                            >
                                Settings
                            </span>
                        </div>
                    )}
                    <span
                        className="text-white ml-4 cursor-pointer hover:underline"
                        onClick={toggleSettings}
                    >
                        Settings
                    </span>
                    {isSettingsOpen && (
                        <div className="absolute bg-gray-800 mt-2 py-2 w-32 rounded-lg shadow-lg">
                            <Link href="/dashboard/settings">
                                <span className="block text-white text-sm px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                    Settings Home
                                </span>
                            </Link>
                            <Link href="/dashboard/settings/password">
                                <span className="block text-white text-sm px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                    Password
                                </span>
                            </Link>
                            <Link href="/dashboard/settings/profile">
                                <span className="block text-white text-sm px-4 py-2 hover:bg-gray-700 cursor-pointer">
                                    Profile
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
