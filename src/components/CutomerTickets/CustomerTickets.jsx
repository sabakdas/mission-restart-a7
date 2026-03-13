import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';
import Footer from '../Footer/Footer';

const CustomerTickets = ({ticketsPromise}) => {
    const ticketsData = use(ticketsPromise)
    console.log(ticketsData);
    return (
        <>
         <div className='bg-gray-100 pb-10'>
             <div className='w-11/12 mx-auto grid grid-cols-2 '>
                
                
             </div>
        <div className='w-11/12 mx-auto flex  gap-20'>
        <div className='w-[70%] '>
            <h1 className='pb-1 text-xl font-semibold text-gray-500'>Customer Tickets</h1>
            <div className='grid grid-cols-2 gap-5'> 
                    
             {
                ticketsData.map(ticket => 
                    <Ticket ticket={ticket}></Ticket>
                )
             }
                </div>
        </div>      
                <div className='w-[31%]'>
                    <h1 className='pb-1 text-xl font-semibold text-gray-500'>Task Status</h1>
                    <p className='font-light text-gray-400'>Select a ticket to add to Task Status</p>
                    <div className='mt-5'>
                        <h1 className='pb-1 text-xl font-semibold text-gray-500'>Resolved Task</h1>
                        <p className='font-light text-gray-400'>No resolved tasks yet.</p>
                    </div>
                </div>
         </div>
        
        </div>
        <Footer></Footer>
        </>
       
       
       
    );
};

export default CustomerTickets;