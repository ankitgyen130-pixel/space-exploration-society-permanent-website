function Navbar(){
    const scrollToGo = (id)=>{
        document.getElementById(id)
            .scrollIntoView({
                behavior: "smooth"
            });
    };

    return(
                <nav>
                    <img src="/images/ses_logo_final.png"/>
                    <div>
                        <button onClick={()=>scrollToGo("HOME")}>   HOME</button>
                        <button onClick={()=>scrollToGo("ABOUT")}>   ABOUT</button>
                        <button onClick={()=>scrollToGo("EVENTS")}>   EVENTS</button>
                        <button onClick={()=>scrollToGo("PROJECTS")}>   PROJECTS</button>
                        <button onClick={()=>scrollToGo("TEAMS")}>   TEAMS</button>
                        <button onClick={()=>scrollToGo("CONTACT")}>   CONTACT</button>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffc955"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
                </nav>
    )
}
export default Navbar