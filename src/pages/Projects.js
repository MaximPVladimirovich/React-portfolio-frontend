import { useState, useEffect } from "react"

function Projects(props) {
    let [projects, setProjects] = useState(null)

    let getProjectData = async function () {
        let res = await fetch(props.URL);

        let response = await res.json();

        setProjects(response)
    }
    useEffect(function () {
        return getProjectData()
    }, [])

    let loaded = function () {
        return projects.map(function (project) {
            return (
                <div >
                    <h1>{project.name}</h1>
                    <img src={project.image} />
                    <a href={project.git}>
                        <button>Github</button>
                    </a>
                    <a href={project.live}>
                        <button>live site</button>
                    </a>
                </div>
            )
        })
    }

    return (
        <div className="projects">
            {projects ? loaded() : <h1>Loading...</h1>}
        </div>
    )
}

export default Projects;