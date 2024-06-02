import React from 'react'

function Intro() {
  return (
    <div className='flex items-center'>
        <div className='w-full border flex justify-center'>
            <div className='w-2/3'>
            <h3 className='text-3xl font-semibold'>Hi, I am</h3>
            <h1 className='text-5xl font-bold'>Meet Kothari</h1>
            <h2 className='text-2xl'>I am Developer</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nihil rerum culpa saepe quae optio! Tempora dolores excepturi saepe fugit.</p>
            <a href="/contact">Contact me</a>
            </div>
        </div>
        <div className='w-full border flex justify-center'>
            <img className='rounded-full shadow-lg w-fit' src="src/assets/1.jpg" alt="" />
        </div>
    </div>
  )
}

export default Intro