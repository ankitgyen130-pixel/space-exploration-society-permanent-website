import Members_card from "./members_card.jsx";
import core from "../../database/members_data";
import { astro_secretary,aero_secretary } from "../../database/members_data";

function Members() {
    return (
        <div id="members-section">
            <h2>OUR TEAM</h2>
            <h5>SECRETARIES</h5>
            <div id="secretaries">
                <div id="astro_secretary">
                    <Members_card
                    name={astro_secretary.name}
                    photo={astro_secretary.photo}
                    domain={astro_secretary.domain}
                    />
                </div>
                <div id="aero_secretary">
                    <Members_card
                    name={aero_secretary.name}
                    photo={aero_secretary.photo}
                    domain={aero_secretary.domain}
                    />
                </div>
            </div>

            <h5>CORE MEMBERS</h5>
            <ul id="core-members">
                {core.map((member, index) => (
                    <li key={index}>
                        <Members_card
                            name={member.name}
                            photo={member.photo}
                            domain={member.domain}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Members;