import React from 'react'
import Link from "next/link"

function Header() {
  return (
    <div className="flex bg-gray-200 p-3 gap-5">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Header