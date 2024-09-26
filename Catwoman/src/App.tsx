import { useState } from 'react'
import './App.css'
import Profile from './components/Profile';
import Header from './components/Header';
import Project from './components/Project';


function  App() {
  return  (
    <div  className='App'>
      <Header />
      <Profile />
      <Project />
      </div>
  );
}
export default App;
