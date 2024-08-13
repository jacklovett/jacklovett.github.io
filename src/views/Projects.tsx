import React from "react"
import { Gallery, Link } from "../components"

export const Projects = () => {
    return (
        <div className="projects-view">
            <section className="soundid center project-content">
                <div className="project-logo">
                    <Link
                        path="https://www.sonarworks.com/"
                        ariaLabel="Visit Sonarworks"
                    >
                        <img
                            src="/img/soundid-logo.png"
                            alt="SoundID"
                            height="64"
                        />
                    </Link>
                </div>
                <div className="content">
                    <div className="project-description">
                        <p>
                            {`At `}
                            <Link path="https://www.sonarworks.com/">
                                Sonarworks
                            </Link>
                            {` I led the SoundID SDK team, integrating our audio personalisation tech into our partners streaming and hardware products.`}
                        </p>
                        <p>
                            SoundID creates a unique sound profile for each user
                            by analysing their individual taste and hearing
                            capabilities.
                        </p>
                        <p>
                            {`Experience it yourself via the free mobile `}
                            <Link path="https://www.sonarworks.com/soundid">
                                apps!
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            <section className="corsair center project-content ">
                <div className="video-container">
                    <video
                        src="/video/corsair-playthrough.mp4"
                        loop
                        autoPlay
                        muted
                        preload="auto"
                    ></video>
                </div>
                <div className="center content">
                    <div className="project-logo">
                        <Link
                            path="https://www.corsair.com/"
                            ariaLabel="Visit Corsair"
                        >
                            <img
                                src="/img/Corsair/corsair-logo.png"
                                alt="Corsair"
                                height="64"
                            />
                        </Link>
                    </div>
                    <div className="project-description">
                        <p>
                            <Link path="https://www.corsair.com/">Corsair</Link>
                            {` specialise in gaming hardware. We partnered with them 
                            to integrate SoundId into selected gaming headsets. 
                            Users can personalise their headsets through our unique hearing tests available in Corsair’s iCUE software, 
                            compatible with both Windows and Mac.`}
                        </p>
                    </div>
                </div>
            </section>
            <section className="onemore center project-content">
                <div className="center content">
                    <div className="project-logo">
                        <Link
                            path="https://usa.1more.com/"
                            ariaLabel="Visit 1More"
                        >
                            <img
                                src="/img/1More/1more-logo.png"
                                alt="1More"
                                height="64"
                            />
                        </Link>
                    </div>
                    <div className="project-description">
                        <p>
                            <Link path="https://usa.1more.com/">1MORE</Link>
                            {` are a popular headphone manufacturer in China. We integrated SoundID, and other custom features into their earbuds. 
                            Controls and personalisation tests are available through the 1MORE Music app on both iOS and Android.`}
                        </p>
                    </div>
                </div>
                <div className="center content">
                    <Gallery
                        images={[
                            {
                                name: "1More's SoundID welcome page",
                                path: "/img/1More/1more-welcome.png",
                            },
                            {
                                name: "1More's SoundID A/B Test page with enabled submit buttons",
                                path: "/img/1More/1more-ab-test-enabled.png",
                            },
                            {
                                name: "1More's SoundID A/B Test page with disabled submit buttons",
                                path: "/img/1More/1more-ab-test-disabled.png",
                            },
                            {
                                name: "1More's SoundID profile generation page",
                                path: "/img/1More/1more-profile-generation.png",
                            },
                            {
                                name: "1More's SoundID profile generation completed page",
                                path: "/img/1More/1more-profile-generated.png",
                            },
                            {
                                name: "1More's SoundID toggle instructions page",
                                path: "/img/1More/1more-soundid-overlay.png",
                            },
                            {
                                name: "1More's SoundID controls page",
                                path: "/img/1More/1more-soundid.png",
                            },
                        ]}
                    />
                </div>
            </section>
            <section className="samaritans center project-content">
                <div className="center content">
                    <Gallery
                        images={[
                            {
                                name: "Samaritans chat's welcome page",
                                path: "/img/Samaritans/chat-welcome.png",
                            },
                            {
                                name: "Samaritans chat page",
                                path: "/img/Samaritans/chat-chat.png",
                            },
                            {
                                name: "Samaritans leave chat warning",
                                path: "/img/Samaritans/chat-leave-chat.png",
                            },
                            {
                                name: "Samaritans back office application login page",
                                path: "/img/Samaritans/backoffice-login.png",
                            },
                            {
                                name: "Samaritans back office application chat page",
                                path: "/img/Samaritans/backoffice-chat.png",
                            },
                            {
                                name: "Samaritans back office application save chat log form page",
                                path: "/img/Samaritans/backoffice-chat-log.png",
                            },
                            {
                                name: "Samaritans back office application add user page",
                                path: "/img/Samaritans/backoffice-add-user.png",
                            },
                        ]}
                    />
                </div>
                <div className=" center content">
                    <div className="project-title">
                        <h2>Samaritans</h2>
                    </div>
                    <div className="project-description">
                        <p>
                            An anonymous live chat service for Samaritan
                            charities, aiming to connect people in need while
                            protecting participants identity. This project
                            includes a public-facing chat app and a private
                            back-office application for managing user accounts
                            and chat configurations.
                        </p>
                        <p>
                            {`Check it out here on `}
                            <Link path="https://github.com/jacklovett/SamaritansChat">
                                GitHub
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
            <section className="tic-stat-toe center project-content">
                <div className="center content">
                    <div className="project-title">
                        <h2>Tic-Stat-Toe</h2>
                    </div>
                    <div className="project-description">
                        <p>
                            Tic-Stat-Toe builds on the classic Tic-tac-toe game
                            by tracking various metrics, such as average game
                            length and common first moves. It offers insights
                            into player behavior and game trends, revealing
                            interesting patterns and dynamics.
                        </p>
                        <p>
                            {`Check it out here on `}
                            <Link path="https://github.com/jacklovett/Tic-Stat-Toe">
                                GitHub
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="center content">
                    <Gallery
                        images={[
                            {
                                path: "/img/Tic-Stat-Toe/welcome.png",
                                name: "Welcome page screenshot on mobile",
                            },
                            {
                                path: "/img/Tic-Stat-Toe/game.png",
                                name: "Tic-Tac-Toe game page screenshot on mobile",
                            },
                            {
                                path: "/img/Tic-Stat-Toe/stats.png",
                                name: "Statistics page screenshot on mobile",
                            },
                            {
                                path: "/img/Tic-Stat-Toe/welcome-desktop.png",
                                name: "Welcome page screenshot on desktop",
                            },
                            {
                                path: "/img/Tic-Stat-Toe/game-desktop.png",
                                name: "Tic-Tac-Toe game page screenshot on desktop",
                            },
                            {
                                path: "/img/Tic-Stat-Toe/stats-desktop.png",
                                name: "Statistics page screenshot on desktop",
                            },
                        ]}
                    />
                </div>
            </section>
            <section className="repo">
                <p>
                    {`More of my project ideas can be found on `}
                    <Link path="https://github.com/jacklovett?tab=repositories">
                        Github
                    </Link>
                </p>
            </section>
        </div>
    )
}
