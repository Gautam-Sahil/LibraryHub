import React from 'react'
import NavBar from '../component/NavBar';
import Footer from '../component/Footer';
import Contact from '../component/Contact';
function Contacts() {
  return (
<>
<NavBar/>
<div className='min-h-screen mt-16 '>
      <Contact/>
</div>

<Footer/>
</>
  )
}

export default Contacts
