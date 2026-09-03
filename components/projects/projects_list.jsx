import aero_projects from "../../database/aero_projects.jsx"
import astro_projects from "../../database/astro_projects.jsx"
import Project_card from "./project_card.jsx"

function Projects(){
    return(
        <div id="project_list_section">
            <h2>PROJECTS</h2>
            <h5>AEROMODELLING & AEROSPACE</h5>
            <div className="container">
                <ul id="aero_projects">
                    {
                        aero_projects.map((project,index)=>(
                            <li key={project.id ?? index}>
                                <Project_card
                                date={project.date}
                                title={project.title}
                                />
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
            <h5>ASTRONOMY & ASTROPHYSICS</h5>
            <div className="container">
                <ul id="astro_projects">
                    {
                        astro_projects.map((project,index)=>(
                            <li key={project.id ?? index}>
                                <Project_card
                                date={project.date}
                                title={project.title}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Projects