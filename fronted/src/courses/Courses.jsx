import React from 'react';
import NavBar from '../component/NavBar';
import Course from '../component/course';
import Footer from '../component/Footer';

function Courses() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <NavBar />


      <main className="grow mt-16 w-full">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-20">
          <Course />
        </div>
      </main>


      <Footer />
    </div>
  );
}

export default Courses;
