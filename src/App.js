import React, { useState, useEffect } from 'react'
import Loading from './loading'
import Tours from './tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading]= useState(true);
  const [tours, setTours] = ([]);
  const fethTours = async() =>{
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
        setLoading(false);
        console.log(error);
    }
    
    // console.log(tours);
  }
  useEffect(()=> {
    fethTours();
  },[]);
  if (loading){
    return (
    <main>
      <Loading/>
    </main>
    )
  }
  return (
    <mai>
      <Tours tours = {tours}/>
    </mai>
  )
  
}
export default App
