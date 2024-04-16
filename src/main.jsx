import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

import App from './App.jsx'
import AboutPage from "./pages/AboutPage"
import PortfolioPage from "./pages/PortfolioPage"
import ContactPage from "./pages/ContactPage"
import ResumePage from "./pages/ResumePage"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <AboutPage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "portfolio",
                element: <PortfolioPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "resume",
                element: <ResumePage />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);
