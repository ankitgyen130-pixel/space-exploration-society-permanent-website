function Project_card(props){
    return(
        <div className="project_card">
            <p className="project_date">{props.date}</p>
            <h1 className="project_title">{props.title}</h1>
        </div>
    )
}
export default Project_card