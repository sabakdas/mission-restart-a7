import React, { use } from 'react';

const CustomerTickets = ({ticketsPromise}) => {
    const ticketsData = use(ticketsPromise)
    console.log(ticketsData);
    return (
        <div>
            <h1>Customer Tickets</h1>
        </div>
    );
};

export default CustomerTickets;