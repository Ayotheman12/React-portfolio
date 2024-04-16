import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Project({ imgSrc, imgAlt, title, repoLink, deployedLink, tech }) {
    return (
        <div className="project">
            <img src={imgSrc} alt={imgAlt}></img>
            <a href={deployedLink}>
                <h3>{title}</h3>
            </a>
            <a href={repoLink}>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <p>{tech}</p>
        </div>
    )
}