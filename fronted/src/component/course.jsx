import React, { useState, useEffect } from 'react';
import Cards from './card'; 
import { Link } from 'react-router-dom';
import axios from 'axios';

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
    const res = await axios.get("https://libraryhub-jywl.onrender.com/book");


        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 py-10">
      
      {/* Header Section */}
      <div className="text-center mb-10 mt-20">
        <h1 className='text-2xl md:text-4xl'>
          <span className='text-pink-500'>✎</span> Start Strong – Access Your Course <span className='text-pink-500'> Books Now!</span>📚
          <span className='text-green-400'>˚༚✧</span>
        </h1>

        <p className='mt-6'>
         Welcome to your learning hub! Here you’ll find all the course books you need to learn, grow, and succeed. Everything is organized, accessible, and ready whenever you are. Every great journey begins with the right tools, and these books are your first step toward success. Each page is designed to guide you, challenge your thinking, and expand your knowledge. Dive in, stay curious, and let your learning journey begin!
        </p>

        <Link to="/">
          <button className='mt-10 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>
            Back
          </button>
        </Link>
      </div>

      {/* Cards Section */}
      <div className=' grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center'>
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;
