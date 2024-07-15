import React from "react"
import "./index.css"
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"

import { Navigation } from "./components/Navigation"

import { Contact } from "./views/Contact"
import { Home } from "./views/Home"
import { Projects } from "./views/Projects"
import { PageNotFound } from "./views/PageNotFound"

import "./App.css"

const App = () => {
    return (
        <div className="app">
            <Router>
                <Navigation />
                <div className="app-content">
                    <Routes>
                        <Route key="home" path="/" element={<Home />} />
                        <Route
                            key="projects"
                            path="/projects"
                            element={<Projects />}
                        />
                        <Route
                            key="contact"
                            path="/contact"
                            element={<Contact />}
                        />
                        <Route key="404" path="*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default App
