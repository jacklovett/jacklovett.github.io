import React from "react";
import { IconLink } from "./IconLink"

export const Footer = () => (
  <section className="footer column">
    <div className="column">
    <div className="social-networks">
      <IconLink  icon="github" link="https://github.com/jacklovett"/>
      <IconLink  icon="linkedin-square" link="https://www.linkedin.com/in/jack-lovett"/>
      <IconLink  icon="twitter" link="https://twitter.com/lovettech"/>
    </div>
    <div>
      <ul className="contact-details">
        <li>
          <i className="fa fa-envelope icons contact"></i>jack.l.lovett@gmail.com
        </li>
        <li>
          <i className="fa fa-phone-square icons contact"></i>+371 28 673 196
        </li>
        <li>
          <i className="fa fa-map-marker icons contact"></i>Riga, Latvia
        </li>
      </ul>
    </div>
    </div>
  </section>
);
