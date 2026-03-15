import React, { use, useEffect} from 'react';
import Ticket from '../Ticket/Ticket';
import Footer from '../Footer/Footer';
import StatusCard from '../StatusCard/StatusCard';

const CustomerTickets = ({ticketsPromise,taskStatus,setTaskStatus,tickets,setTickets,resolvedTask,setResolvedTask}) => {
   
    const ticketsData = use(ticketsPromise);
   
     useEffect(() => {
                setTickets(ticketsData)
                }, [])
    console.log(ticketsData);
    return (
        <>
         <div className='bg-gray-100 pb-10'>
        <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-20'>
        <div className='w-full md:w-[70%] '>

            <h1 className='pb-1 text-xl font-semibold text-gray-500'>Customer Tickets</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'> 
                    {tickets.length === 0 && (
                    <p className="text-gray-500 font-bold text-4xl col-span-2 flex items-center justify-center bg-white rounded-lg p-20 mt-20
                    ">All tickets resolved 🎉</p>
                     )}
             {
                tickets.map(ticket => 
                    <Ticket taskStatus={taskStatus} setTaskStatus={setTaskStatus}  ticket={ticket}></Ticket>
                )
             }
                </div>
        </div>      
                <div className='w-full md:w-[31%]'>
                    <h1 className='pb-1 text-xl font-semibold text-gray-500'>Task Status</h1>
                    <div className='grid gap-5'>
                        {
                            taskStatus.length === 0 ?  <p className='font-light text-gray-400'>Select a ticket to add to Task Status</p> : taskStatus.map(task => <StatusCard           
                                task={task} 
                                tickets={tickets}
                                setTickets={setTickets}
                                resolvedTask={resolvedTask} 
                                setResolvedTask={setResolvedTask} 
                                taskStatus={taskStatus} 
                                setTaskStatus={setTaskStatus}></StatusCard>)
                        }
                            
                   
                    </div>
                   
                    <div className='mt-5'>
                         <h1 className='pb-1 text-xl font-semibold text-gray-500'>Resolved Task</h1>
                         <div className='grid gap-5'>
                             {
                        resolvedTask.length === 0
                        ? <p className='font-light text-gray-400'>No resolved tasks yet.</p>
                        : resolvedTask.map(resolved => (
                            <h1 key={resolved.id} className='font-semibold px-5 py-4 text-black bg-[#E0E7FF] rounded-md'>
                                {resolved.title}
                            </h1>
                            ))
                        }
                         </div>
                      
                       
                        
                    </div>
                </div>
         </div>
        
        </div>
        <Footer></Footer>
        </>
       
       
       
    );
};

export default CustomerTickets;