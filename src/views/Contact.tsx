import React from "react"
import { IconLink, RetroComputer } from "../components"

export const Contact = () => (
    <section className="contact center">
        <div>
            <RetroComputer animationText="Get in touch!" />
            <h1>Contacts</h1>
            <div>
                <ul className="contact-details">
                    <li>
                        <i className="fa fa-envelope icons contacts"></i>
                        jack.l.lovett@gmail.com
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
            </div>
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
