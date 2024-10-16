import { IconLink, RetroComputer } from "../components"

export const Contact = () => (
    <section className="about-container">
        <div className="about-content">
            <RetroComputer animationText="Get in touch!" />
            <h1>Contacts</h1>
            <ul className="contact-details">
                <li>
                    <i className="fa fa-envelope icons contacts"></i>
                    <a href="mailto:jack.l.lovett@gmail.com">
                        jack.l.lovett@gmail.com
                    </a>
                </li>
                <li>
                    <i className="fa fa-phone-square icons contacts"></i>
                    +351 91 292 15 14
                </li>
                <li>
                    <i className="fa fa-map-marker icons contacts"></i>
                    Lisbon, Portugal
                </li>
            </ul>
            <div className="social-networks">
                <IconLink icon="github" link="https://github.com/jacklovett" />
                <IconLink
                    icon="linkedin-square"
                    link="https://www.linkedin.com/in/jack-lovett"
                />
            </div>
        </div>
    </section>
)
