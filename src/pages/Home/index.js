import React, { useState } from 'react'
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <>
     <Navbar toggle={toggle}/>
     <Sidebar isOpen={isOpen} toggle={toggle}/>
     <Hero />
    </>
  )
}

export default Home