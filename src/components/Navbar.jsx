export default function Navbar({ links }) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {links.map((link) => <li className="nav-item" key={link.key}>{link}</li>)}
                    </ul>
                </div>
            </div>
        </nav>
    );
}