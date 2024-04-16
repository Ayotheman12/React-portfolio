import Project from "../components/Project"
import lockedIn from "../assets/locked-in.png"
import eventHunter from "../assets/event-hunter.png"
import jate from "../assets/jate.png"
import techBlog from "../assets/tech-blog.png"
import hiraganaQuiz from "../assets/hiragana-quiz.png"
import weatherDashboard from "../assets/weather-dashboard.png"

export default function PortfolioPage() {
    return (
        <>
            <h2>Portfolio</h2>
            <Project 
                imgSrc={lockedIn}
                imgAlt="Screenshot of the Locked In betting site"
                title="Locked In"
                repoLink="https://github.com/SpencerSurface/locked-in"
                deployedLink="https://rocky-island-80109-07f4dc58686b.herokuapp.com/"
                tech="Node, Express, Sequelize, Handlebars"
            />
            <Project 
                imgSrc={eventHunter}
                imgAlt="Screenshot of the Event Hunter ticket finder site"
                title="Event Hunter"
                repoLink="https://github.com/jteleha/event-hunter"
                deployedLink="https://jteleha.github.io/event-hunter/"
                tech="Front-end App"
            />
            <Project 
                imgSrc={jate}
                imgAlt="Screenshot of the JATE text editor"
                title="Just Another Text Editor"
                repoLink="https://github.com/SpencerSurface/text-editor"
                deployedLink="https://text-editor-kppt.onrender.com/"
                tech="Progressive Web App"
            />
            <Project 
                imgSrc={techBlog}
                imgAlt="Screenshot of the Tech Blog"
                title="Tech Blog"
                repoLink="https://github.com/SpencerSurface/tech-blog"
                deployedLink="https://peaceful-ocean-56883-ea5620773588.herokuapp.com/"
                tech="Node, Express, Sequelize"
            />
            <Project 
                imgSrc={hiraganaQuiz}
                imgAlt="Screenshot of the Hiragana Quiz"
                title="Hiragana Quiz"
                repoLink="https://github.com/SpencerSurface/hiragana-quiz"
                deployedLink="https://spencersurface.github.io/hiragana-quiz/"
                tech="Front-end App"
            />
            <Project 
                imgSrc={weatherDashboard}
                imgAlt="Screenshot of the Weather Dashboard"
                title="Weather Dashboard"
                repoLink="https://github.com/SpencerSurface/weather-dashboard"
                deployedLink="https://spencersurface.github.io/weather-dashboard/"
                tech="3rd Party API"
            />
        </>
    )
}