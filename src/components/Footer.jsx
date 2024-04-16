import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className="row">
            <div className="col d-flex flex-row justify-content-center">
                <a href="https://www.linkedin.com/in/spencersurface/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/SpencerSurface">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="mailto:spencer.surface@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </footer>
    );
}

export default Footer
