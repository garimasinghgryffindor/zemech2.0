import React from 'react'
//import { Link } from "react-router-dom";
import Book from "./Book";
import WaitingList from './WaitingList';
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <Book />
        <WaitingList />
    </div>
  )
}

export default Home