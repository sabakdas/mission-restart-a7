
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar,faCircle} from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';

  




const Ticket = ({ticket,taskStatus,setTaskStatus}) => {
   
    console.log(ticket)
    const handleAddTask = () => {

  const exists = taskStatus.find(available => available.id === ticket.id);

  {exists ? toast("Already exists in task status"):setTaskStatus([...taskStatus,ticket])}

}
     
    return (
        
    <>
        <div onClick={handleAddTask} className="card  bg-base-100 card-xs shadow-sm ">
            <div className="card-body">
                <div className='flex justify-between'> 
                    <h1 className='card-title'>{ticket.title}</h1>
                    {
                        ticket.status === 'Open'? <div className='flex gap-1 items-center font-semibold px-2 py-1 rounded-3xl bg-[#B9F8CF]'>
                        <FontAwesomeIcon icon={faCircle} className='text-[#0B5E06]'/>
                         <h1 className='text-[#02A53B]'>{ticket.status}</h1>
                    </div> :<div className='flex gap-1 items-center font-semibold px-2 py-1 rounded-3xl bg-[#F8F3B9]'>
                        <FontAwesomeIcon icon={faCircle} className='text-[#FEBB0C]'/>
                         <h1 className='text-[#9C7700]'>{ticket.status}</h1>
                    </div>
                    }
                    
                   
                </div>

                <p className='text-gray-500 text-ellipsis line-clamp-1'>{ticket.description}</p>

                <div className='flex items-center justify-between'>
                    <div className='flex gap-3'>
                        <p className='text-gray-500'>{ticket.id}</p>
                        {
                            ticket.priority === "MEDIUM PRIORITY"?<p className='text-yellow-500'>{ticket.priority}</p>:ticket.priority === "LOW PRIORITY" ? <p className='text-green-500'>{ticket.priority}</p> : <p className='text-red-500'>{ticket.priority}</p>
                        }
                        
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