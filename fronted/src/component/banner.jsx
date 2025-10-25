import React from 'react'
import book from '../assets/book2.jpg';

function Banner() {
  return (

    <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-14'>
      <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32' >
     <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>Hey there, welcome to Library Hub! Let’s explore and <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-blue-600">learn—together!!!</span></h1>

     <p className='text-xl '>
   Your trusted resource center for learning, research, and intellectual growth. Here, knowledge meets accessibility. Dive into a curated collection of books, journals, and educational tools.
     </p>

     <div className="join">
  <div>
    <label className="input focus-within:outline-none focus-within:ring-0 validator join-item bg-slate-100 text-black ">
      <svg className="h-[1em] opacity-50 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </g>
      </svg>
      <input type="email" placeholder="mail@site.com" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn btn-neutral join-item">Join</button>
</div>  <button className="btn btn-secondary">Subscribe</button>
     </div>
   <div className="space-x-2.5">
        <button className="btn btn-soft">Browse All Books</button>
        <button className="btn btn-soft btn-primary">New Arrivals</button>
        <button className="btn btn-soft btn-secondary bg-amber-100 text-black hover:bg-amber-500 hover:border-0">
          Bestsellers
        </button>
        <button className="btn btn-soft btn-accent">Genres</button>
        <button className="btn btn-soft btn-info">Membership</button>
        <button className="btn btn-soft btn-success">E-Books</button>
      </div>
    </div>
    <div className=' order-1 w-full md:w-1/2 mt-12 md:mt-38 md:pl-6' >
     <img src={book} alt="Book" />
    </div>
    </div>
    


    </>
  
  )
}

export default Banner;
