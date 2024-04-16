import resume from "../assets/resume.pdf"

export default function ResumePage() {
    return (
        <>
            <h2>Resume</h2>
            <p>Download <a href={resume} download="spencer-surface-resume.pdf">my resume</a></p>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Progressive Web Apps</li>
            </ul>
            <h3>Back-end Proficiences</h3>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </>
    )
}