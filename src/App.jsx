
import { Suspense, useState } from 'react'
import './App.css'
 import { ToastContainer } from 'react-toastify';
import CustomerTickets from './components/CutomerTickets/CustomerTickets'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'

const fetchTickets = async() =>{
  const res = await fetch("tickets.json")
  return res.json()
}
const ticketsPromise = fetchTickets();
function App() {
  const [tickets,setTickets] = useState([])
 const [taskStatus,setTaskStatus] = useState([]);
 const [resolvedTask,setResolvedTask]=useState([]);
  return (
    <>
      <Navbar></Navbar>
      <Hero resolvedTask={resolvedTask} setResolvedTask={setResolvedTask} taskStatus={taskStatus} setTaskStatus={setTaskStatus}  
     ></Hero>

      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>

      <CustomerTickets 
      tickets={tickets}
      setTickets={setTickets}
      resolvedTask={resolvedTask} 
      setResolvedTask={setResolvedTask} 
      taskStatus={taskStatus} 
      setTaskStatus={setTaskStatus}   t
      ticketsPromise={ticketsPromise} ></CustomerTickets></Suspense>

    <ToastContainer />
    </>
  )
}

export default App
