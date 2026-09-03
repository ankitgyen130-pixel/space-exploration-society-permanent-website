function Events_cards(props){
    return(
        <div className="event_card">
            <p className="event_date">{props.date}</p>
            <h1 className="event_title">{props.title}</h1>
        </div>
    )
}
export default Events_cards