// Home.js

import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar';
import Banner from './Banner';
import Card from './Card';
import './Home.css';

function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setIsHeaderVisible(!isScrollingDown);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`app-body ${isHeaderVisible ? 'header-visible' : 'header-hidden'}`}>
        <Header />
        <Navbar />
      </div>

      <div>
        <Banner />
      </div>

      <div className="card-container">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
      </div>
    </>
  );
}

export default Home;
