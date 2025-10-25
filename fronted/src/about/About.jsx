import React from 'react'
import NavBar from '../component/NavBar';

import Footer from '../component/Footer';
import Aboutspage from '../component/Aboutspage';

function About() {
  return (
<>
<NavBar/>
<div className='min-h-screen mt-16'>
  <Aboutspage/>
</div>
<Footer/>
</>
  )
}

export default About;
