import upcoming_events from "/database/upcoming_events.jsx"
import Events_cards from "/components/events_cards.jsx";
function Event_list(){
    return(
        <>
            <div>
                <p id="upcoming_event_title">UPCOMING EVENTS</p>
                <ul id="upcoming_events">
                    {upcoming_events.map((events,index)=>{
                        return(
                            <li key={event.id ?? index}>
                                <Events_cards
                                date={events.date}
                                title={events.title}
                                />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
export default Event_list