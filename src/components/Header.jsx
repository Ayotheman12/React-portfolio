import Nav from "./Nav"

function Header({ currentPage }) {
    return (
        <header className="row">
            <h1>Spencer Surface</h1>
            <Nav currentPage={currentPage} />
        </header>
    );
}

export default Header
