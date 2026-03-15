import React from 'react';
import { toast } from 'react-toastify';


const StatusCard = ({task,taskStatus,setTaskStatus,tickets,setTickets,resolvedTask,setResolvedTask}) => {

    const handleComplete = () =>{
       const isConfirm = confirm("Are you sure to complete this ticket?"); 
        if (!isConfirm) return;    
        const filterData = taskStatus.filter(data => data.id !== task.id);
        setTaskStatus(filterData);

        setResolvedTask([...resolvedTask,task]);

        const updatedTickets = tickets.filter(ticket => ticket.id !== task.id);
        setTickets(updatedTickets);

        toast("task completed");
        
        
  }
        
    
  
    
    return ( 

    <div className="rounded-sm shadow-sm bg-white">
     <div className=" px-5">
    <h2 className="font-semibold text-[#001931]">{task.title}</h2>
      <button onClick={handleComplete}className="hover:shadow-xl 
            transition w-full bg-green-500 rounded-sm text-white font-semibold py-2 my-3">Complete</button>
    </div>
  </div>
    );
};

export default StatusCard;