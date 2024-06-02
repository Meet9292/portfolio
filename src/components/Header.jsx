import React from 'react'

function Header() {
  return (
    <div className='border h-20 items-center flex justify-between px-16 bg-gray-200'>
        <div className='text-2xl font-bold'>
            <h1>Meet Kothari</h1>
        </div>

        <div className='flex gap-6'>
            <a href="/home" className='hover:text-orange-600'>Home</a>
            <a href="/about" className='hover:text-orange-600'>About</a>
            <a href="/skills" className='hover:text-orange-600'>Skills</a>
            <a href="/portfolio" className='hover:text-orange-600'>Portfolio</a>
            <a href="/contact" className='hover:text-orange-600'>Contact</a>
        </div>

        <div>
            <button className='px-4 py-2 bg-orange-500 rounded-full shadow'>Hire me</button>
        </div>

    </div>
  )
}

export default Header

