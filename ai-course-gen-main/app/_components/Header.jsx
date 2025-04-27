import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-10'>
      <div className='flex items-center'>
        <Image 
          src='/logo.jpg' 
          width={50} 
          height={50} 
          alt="Logo"
          className='h-10 w-auto'
        />
      </div>
      
      <nav className='hidden md:flex items-center space-x-8 text-gray-600'>
        <a href="/" className='hover:text-primary transition-colors'>Home</a>
        <a href="/features" className='hover:text-primary transition-colors'>Features</a>
        <a href="/about" className='hover:text-primary transition-colors'>About</a>
      </nav>

     
    </header>
  )
}

export default Header