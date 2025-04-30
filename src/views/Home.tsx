import { Link as ReactLink } from "react-router-dom"
import { RetroComputer } from "../components"

export const Home = () => (
    <section className="about-container">
        <div className="about-content">
            <RetroComputer animationText="Hello World!" />
            <h1>Jack Lovett</h1>
            <h2 className="highlight">
                Full-stack Developer <span className="divider">|</span> UX
                Enthusiast
            </h2>
            <p>
                I’m passionate about creating intuitive and engaging digital
                experiences across all platforms. Let's create user-focused
                solutions that really make a difference.
            </p>
            <p className="cta">
                Interested? <ReactLink to="/contact">Let's connect!</ReactLink>
            </p>
        </div>
    </section>
)
