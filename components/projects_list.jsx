import aero_projects from "../database/aero_projects"
import astro_projects from "../database/astro_projects"
import Project_card from "./project_card"

function Projects(){
    return(
        <>
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
        </>
    )
}
export default Projects