import { useState, useEffect } from "react"

function About(props) {
    let [about, setAbout] = useState(null)

    // Function that makes api call
    let getAboutData = async function () {

        // makes a fetch request to get json about data
        let res = await fetch(props.URL)

        // turn promise into js object
        let response = await res.json()

        // sets about state to the response
        setAbout(response)
    }

    // Makes initial call for data once component loads
    // Adding empty array as 2nd parameter makes this only run once
    useEffect(() => getAboutData(), [])

    // returns jsx after data request is successfull
    let loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h2>{about.email}</h2>
            <p>{about.bio}</p>
        </div>
    )

    return about ? loaded() : <h1>Loading...</h1>

}

export default About;