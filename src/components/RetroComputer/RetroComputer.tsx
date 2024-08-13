import React from "react"
import "./RetroComputer.css"

interface IProps {
    color?: string
    notFoundPage?: boolean
}

export const RetroComputer = (props: IProps) => {
    const { color = "#ffffff", notFoundPage } = props
    return (
        <div className="retro-computer-container">
            <div className="retro-computer">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    {/* Computer monitor */}
                    {/* Top-left corner */}
                    <rect x="3" y="2" width="1.5" height="1.5" fill={color} />
                    {/* Top + left edge */}
                    <rect x="4.5" y="1" width="15" height="1.5" fill={color} />
                    <rect
                        x="1.5"
                        y="3.5"
                        width="1.5"
                        height="9.5"
                        fill={color}
                    />
                    {/* Top-right corner */}
                    <rect
                        x="19.5"
                        y="2"
                        width="1.5"
                        height="1.5"
                        fill={color}
                    />
                    {/* Bottom edge */}
                    <rect x="4.5" y="14" width="15" height="1.5" fill={color} />
                    <rect x="6" y="14" width="12" height="2.25" fill={color} />
                    {/* Right edge */}
                    <rect
                        x="21"
                        y="3.5"
                        width="1.5"
                        height="9.5"
                        fill={color}
                    />
                    {/* Bottom-right corner */}
                    <rect
                        x="19.5"
                        y="13"
                        width="1.5"
                        height="1.5"
                        fill={color}
                    />
                    {/* Bottom-left corner */}
                    <rect x="3" y="13" width="1.5" height="1.5" fill={color} />
                    {/* Keyboard */}
                    {/* Keyboard border */}
                    <rect x="1" y="17" width="22" height="1" fill={color} />
                    <rect x="0" y="18" width="1" height="5" fill={color} />
                    <rect x="23" y="18" width="1" height="5" fill={color} />
                    <rect x="1" y="23" width="22" height="1" fill={color} />
                    {/* First row of keys */}
                    <rect x="1.5" y="18.5" width="1" height="1" fill={color} />
                    <rect x="3" y="18.5" width="1" height="1" fill={color} />
                    <rect x="4.5" y="18.5" width="1" height="1" fill={color} />
                    <rect x="6" y="18.5" width="1" height="1" fill={color} />
                    <rect x="7.5" y="18.5" width="1" height="1" fill={color} />
                    <rect x="9" y="18.5" width="1" height="1" fill={color} />
                    <rect x="10.5" y="18.5" width="1" height="1" fill={color} />
                    <rect x="12" y="18.5" width="1" height="1" fill={color} />
                    <rect x="13.5" y="18.5" width="1" height="1" fill={color} />
                    <rect x="15" y="18.5" width="1" height="1" fill={color} />
                    <rect x="16.5" y="18.5" width="1" height="1" fill={color} />
                    <rect x="18" y="18.5" width="1" height="1" fill={color} />
                    <rect x="19.5" y="18.5" width="3" height="1" fill={color} />
                    {/* Second row of keys */}
                    <rect x="1.5" y="20" width="2" height="1" fill={color} />
                    <rect x="4" y="20" width="1" height="1" fill={color} />
                    <rect x="5.5" y="20" width="1" height="1" fill={color} />
                    <rect x="7" y="20" width="1" height="1" fill={color} />
                    <rect x="8.5" y="20" width="1" height="1" fill={color} />
                    <rect x="10" y="20" width="1" height="1" fill={color} />
                    <rect x="11.5" y="20" width="1" height="1" fill={color} />
                    <rect x="13" y="20" width="1" height="1" fill={color} />
                    <rect x="14.5" y="20" width="1" height="1" fill={color} />
                    <rect x="16" y="20" width="1" height="1" fill={color} />
                    <rect x="17.5" y="20" width="1" height="1" fill={color} />
                    <rect x="19" y="20" width="1" height="1" fill={color} />
                    <rect x="20.5" y="20" width="2" height="1" fill={color} />
                    {/* Third row of keys */}
                    <rect x="1.5" y="21.5" width="1" height="1" fill={color} />
                    <rect x="3" y="21.5" width="1" height="1" fill={color} />
                    <rect x="4.5" y="21.5" width="1" height="1" fill={color} />
                    <rect x="6" y="21.5" width="1" height="1" fill={color} />
                    <rect x="7.5" y="21.5" width="9" height="1" fill={color} />
                    <rect x="17" y="21.5" width="1" height="1" fill={color} />
                    <rect x="18.5" y="21.5" width="1" height="1" fill={color} />
                    <rect x="20" y="21.5" width="2.5" height="1" fill={color} />
                </svg>
                <div className="screen">
                    <div className="typewriter">
                        <p>{notFoundPage ? "404: Error" : "Hello World!"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
