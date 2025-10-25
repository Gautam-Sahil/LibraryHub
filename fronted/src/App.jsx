import React from 'react';
import Home from './home/Home';

import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from './courses/Courses';
import Signup from './component/Signup';
import Contacts from './Contact/Contacts';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
import About from './about/About';

function App() {

  const [authuser, setAuthuser]=useAuth();
  console.log(authuser);
  return (
    <>
     
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className=''>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course"element={ 
          authuser ?
          <Courses />:<Navigate to="/signup"/>} />
          <Route path="/signup" element={ 
          <Signup /> } />
          <Route path="/contact" element={<Contacts />} />
           <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
