import { useState } from "react";

function Dashboard() {
const [createEvent, setcreateEvent] = useState(false);
//if createEvent is true, display the form for creating an event
//if createEvent is false, display the list of events

const handleCreateEvent = () => {
    setcreateEvent(true);
}
    return(
        <>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Events</h2>
                <p>...</p>
            </div>
            <div>
                {createEvent ? 
                <form action="">
                    <button>Create Event</button>
            <label htmlFor="">Event Name</label>
            <input type="text" name="event-name" id="event-name" /><br />
            <label htmlFor="">Event Date</label>
            <input type="date" name="event-date" id="event-date" /> <br />
            <label htmlFor="">Event Time</label>
            <input type="time" name="event-time" id="event-time" /> <br />
            <label htmlFor="">Event Location</label>
            <input type="text" name="event-location" id="event-location" /> <br />
            <label htmlFor="">Event Description</label>
            <textarea name="event-description" id="event-description"></textarea> <br />
            <label htmlFor="">Event Image</label>
            <input type="file" name="event-image" id="event-image" /> <br />
            <label htmlFor="">Event Price</label>
            <input type="number" name="event-price" id="event-price" /> <br />
            <label htmlFor="">Total Ticket Supply</label>
            <input type="number" name="ticket-supplyy" id="ticket-supply" />
            <label htmlFor="">Method of Payment</label>
            <select name="payment-method" id="payment-method">
                <option value="eth">ETH</option>
                <option value="lsk">LSK</option>
                <option value="btc">BTC</option>
            </select>
            <button>Submit</button> 
        </form> : <button onClick={handleCreateEvent}><h3>Create Event</h3></button> }
            </div>
        </>
    )
}
export default Dashboard;