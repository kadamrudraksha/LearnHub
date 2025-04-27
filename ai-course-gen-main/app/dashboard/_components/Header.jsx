import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo Section */}
      <Link href={'/'} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
        <Image src={'/logo.jpg'} width={50} height={50} alt="Logo" priority />
      </Link>

      {/* User Profile Button */}
      <div className="flex items-center gap-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  )
}

export default Header;
