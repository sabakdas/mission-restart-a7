
import { Suspense } from 'react'
import './App.css'
import CustomerTickets from './components/CutomerTickets/CustomerTickets'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'

const fetchTickets = async() =>{
  const res = await fetch("tickets.json")
  return res.json()
}

function App() {
 const ticketsPromise = fetchTickets();

  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}><CustomerTickets  ticketsPromise={ticketsPromise} ></CustomerTickets></Suspense>
    </>
  )
}

export default App
