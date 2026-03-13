import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faCircle} from '@fortawesome/free-solid-svg-icons'

  




const Ticket = ({ticket}) => {
    console.log(ticket)
     
    return (
        
    <>
        <div className="card w-96 bg-base-100 card-xs shadow-sm ">
            <div className="card-body">
                <div className='flex justify-between'> 
                    <h1 className='card-title'>{ticket.title}</h1>
                    <div className='flex gap-1 items-center font-semibold px-2 py-1 rounded-3xl bg-[#B9F8CF]'>
                        <FontAwesomeIcon icon={faCircle} className='text-[#0B5E06]'/>
                         <h1 className='text-[#02A53B]'>{ticket.status}</h1>
                    </div>
                   
                </div>

                <p className='text-gray-500 text-ellipsis line-clamp-2'>{ticket.description}</p>

                <div className='flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <p className='text-gray-500'>{ticket.id}</p>
                        <p className='text-yellow-500'>{ticket.priority}</p>
                    </div>
                    <div className='flex gap-3 text-gray-500'>
                        <p>{ticket.customer}</p>
                        <span className='flex items-center gap-1'>
                            <FontAwesomeIcon icon={faCalendar} />
                            <p>{ticket.createdAt}</p>
                        </span>
                       
                    </div>
                </div>
                  
            </div>
        </div>
    </>
    );
};

export default Ticket;