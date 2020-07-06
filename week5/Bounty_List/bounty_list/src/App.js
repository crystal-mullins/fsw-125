import React, {useState, useEffect}from 'react';
import axios from 'axios'
import './App.css';
import Bounty from '.components/Bounty.js '
import { useState } from '../../../../../fsw-120/week5/roto_router/roto_router/node_modules/@types/react';

export default function App() {
  const[bountys, setBountys] = useState([])

  useEffect(() => {
    axios.get("/bounty")
    .then(res => setBountys(res.data))
    .catch(err => console.log(err))
    }, [])
  
  return (
    <div>
      {bountys.map(bounty => <Bounty {...bounty} key={bounty.title}/>)}
    </div>
  );
}


