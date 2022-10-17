import React from 'react'
import raoul from '../img/raoul.jpg'
import '../CSS/Home.css'

function Home() {
  return (
    <div className='home'>
      <br />
      <h1>On this site u will find some Cats</h1>
      <h3>Check Kitty for more</h3>
      <br />


      <img
        className='imgStart'
        src={raoul}></img>
    </div>
  )
}

export default Home