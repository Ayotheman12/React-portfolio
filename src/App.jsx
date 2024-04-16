import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { pathToPage } from "./utils/helpers"
import "./App.css"

function App() {
    // Get the path to determine the initial page
    const path = useLocation().pathname.toLowerCase();

    // Set the initial page to "about" by default, else set it to the page matching the path
    let initialPage = pathToPage(path);

    // Set state for current page
    const [currentPage, setCurrentPage] = useState(initialPage);

    // Handle changing the page
    useEffect(() => {
        setCurrentPage(pathToPage(path));
    }, [path]);

    return (
        <>
            <Header currentPage={currentPage} />
            <main className="row">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App
