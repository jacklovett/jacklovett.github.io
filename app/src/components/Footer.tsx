import React from "react";

export const Footer = () => (
  <section className="footer column">
    {/* <h3>
      <a aria-label="contact"></a>Contact
    </h3> */}
    <div className="column">
    <div className="social-networks">
      {/* Split icons buttons into reusable component */}
      <a className="icons" href="https://github.com/jacklovett" target="_blank" rel="noreferrer">
        <i className="fa fa-github"></i>
      </a>
      <a className="icons" href="https://www.linkedin.com/in/jack-lovett" target="_blank" rel="noreferrer">
        <i className="fa fa-linkedin-square"></i>
      </a>
      <a className="icons" href="https://twitter.com/lovettech" target="_blank" rel="noreferrer" >
        <i className="fa fa-twitter"></i>
      </a>
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
