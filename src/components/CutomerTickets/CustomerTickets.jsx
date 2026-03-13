import React, { use } from 'react';
import Ticket from '../Ticket/Ticket';

const CustomerTickets = ({ticketsPromise}) => {
    const ticketsData = use(ticketsPromise)
    console.log(ticketsData);
    return (
        <div className='bg-gray-100'>
             <div className='w-11/12 mx-auto'>
                <h1 className='pb-1 text-xl font-semibold text-gray-500'>Customer Tickets</h1>
             </div>
        <div className='w-11/12 mx-auto flex  gap-20'>
                 <div className='w-7/12 grid grid-cols-2 gap-5'> 
             {
                ticketsData.map(ticket => 
                    <Ticket ticket={ticket}></Ticket>
                )
             }
                </div>
                <div>
                    <h1>Resolved</h1>
                    
                </div>
         </div>
        
        </div>
       
    );
};

export default CustomerTickets;