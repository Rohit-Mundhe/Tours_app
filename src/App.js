import React, { useState, useEffect } from 'react'
import Loading from './loading'
import Tours from './tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading]= useState(true);
  const [tours, setTours] = ([]);
  if (loading){
    return (
    <main>
      <Loading/>
    </main>
    )
  }
  return (
    <mai>
      <Tours/>
    </mai>
  )
  
}
export default App
