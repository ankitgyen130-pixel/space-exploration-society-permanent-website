import aero_events from "/database/aero_events_upcoming.jsx"
import astro_events from "../database/astro_events_upcoming.jsx";
import Events_cards from "/components/events_cards.jsx";
function Event_list(){
    return(
        <>
            <div>
                <h2 id="upcoming_event_title">UPCOMING EVENTS</h2>
                <h5>AEROMODELLING & AEROSPACE</h5>
                <ul id="aero_events_list">
                    {aero_events.map((events,index)=>{
                        return(
                            <li key={events.id ?? index}>
                                <Events_cards
                                date={events.date}
                                title={events.title}
                                />
                            </li>
                        )
                    })}
                </ul>
                <h5>ASTRONOMY & ASTROPHYSICS</h5>
                <ul id="astro_events_list">
                    {astro_events.map((events,index)=>{
                        return(
                            <li key={events.id ?? index}>
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