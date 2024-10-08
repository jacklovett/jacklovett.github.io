import { Routes, Route, HashRouter as Router } from "react-router-dom"

import { Navigation } from "./components"
import { Home, Projects, Contact, PageNotFound } from "./views"

import "./index.css"
import "./App.css"

const App = () => (
    <Router>
        <Navigation />
        <div className="app-content">
            <Routes>
                <Route key="home" path="/" element={<Home />} />
                <Route key="projects" path="/projects" element={<Projects />} />
                <Route key="contact" path="/contact" element={<Contact />} />
                <Route key="404" path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    </Router>
)

export default App
