
import React from 'react'
import Header from '../Header/Header'
import Navbar from '../Navbar'
import Banner from './Banner'

function Home() {
  return (
    <>
    <div className='app-body'>
        <Header/>
        <Navbar/>
    </div>

    <div>
        <Banner/>
    </div>
    </>
  )
}

export default Home