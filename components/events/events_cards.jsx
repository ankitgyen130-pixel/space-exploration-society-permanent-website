import { useState } from "react";
function Events_cards(props){
    const [description_menu_open, setDescription_menu] = useState(false);
    return(
        <div className="event_card">
            <button className="event_card_button" onClick={()=>setDescription_menu(!description_menu_open)}>
                <p className="event_date">{props.date}</p>
                <h1 className="event_title">{props.title}</h1>
            </button>
            <ul className={description_menu_open?"event_description_open":"event_description_close"}>
                {props.description.map((items, index)=>(
                    <li key={index}>{items}</li>
                ))}
            </ul>
            
        </div>
    )
}
export default Events_cards