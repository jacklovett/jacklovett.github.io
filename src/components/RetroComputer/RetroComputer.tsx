import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { Html, Edges, Text } from "@react-three/drei"

import "./RetroComputer.css"

const styles = getComputedStyle(document.documentElement)
// Get CSS variables for colors
const CASING_COLOR = styles.getPropertyValue("--casing-color").trim()
const EDGE_COLOR = styles.getPropertyValue("--edge-color").trim()
const SCREEN_COLOR = styles.getPropertyValue("--screen-color").trim()
const SCREEN_OFF_COLOR = styles.getPropertyValue("--screen-off-color").trim()
const COMPUTER_COLOR = styles.getPropertyValue("--computer-color").trim()
const COMPUTER_OFF_COLOR = styles
    .getPropertyValue("--computer-off-color")
    .trim()

interface IProps {
    animationText: string
}

export const RetroComputer = ({ animationText }: IProps) => {
    const [isComputerOn, setIsComputerOn] = useState(true)
    const [isLoading, setIsLoading] = useState(true) // Track loading state

    return (
        <div className="retro-computer-container">
            {isLoading && (
                <div className="skeleton-loader">
                    <div className="skeleton-circle"></div>
                </div>
            )}
            <Canvas
                camera={{ position: [40, 40, 80], fov: 50 }}
                onCreated={() => setIsLoading(false)}
            >
                {/* Lighting */}
                <hemisphereLight intensity={0.8} />
                {/* Retro Computer */}
                <group rotation={[0, 0.9, 0]} scale={[5, 5, 5]}>
                    <RetroMonitor
                        text={animationText}
                        isComputerOn={isComputerOn}
                    />
                    <RetroBase
                        isComputerOn={isComputerOn}
                        toggleComputer={() => setIsComputerOn(!isComputerOn)}
                    />
                    <RetroKeyboard />
                </group>
            </Canvas>
        </div>
    )
}

const RetroMonitor = ({
    text,
    isComputerOn,
}: {
    text: string
    isComputerOn: boolean
}) => (
    <group position={[0, 4, 0]}>
        {/* Monitor Frame */}
        <mesh castShadow>
            <boxGeometry args={[11, 6, 4]} />
            <meshStandardMaterial
                color={CASING_COLOR}
                roughness={0.9}
                metalness={0.4}
            />
            <Edges color={EDGE_COLOR} />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0, 2]}>
            <boxGeometry args={[9.5, 5, 0.1]} />
            {/* Increased screen size */}
            <meshStandardMaterial
                color={isComputerOn ? SCREEN_COLOR : SCREEN_OFF_COLOR}
            />
            <Edges color={EDGE_COLOR} />
        </mesh>

        {/* Text on Screen */}
        {isComputerOn && (
            <Html position={[-0.5, 0, 2.1]} center rotation={[0, 0.9, 0]}>
                <div className="typewriter">
                    <p>{text}</p>
                </div>
            </Html>
        )}
    </group>
)

const RetroBase = ({
    isComputerOn,
    toggleComputer,
}: {
    isComputerOn: boolean
    toggleComputer: () => void
}) => (
    <group
        position={[0, 0.1, 0]}
        onClick={() => {
            toggleComputer()
            // Vibrate for 500 milliseconds
            navigator.vibrate(500)
        }}
    >
        {/* Base Frame */}
        <mesh castShadow>
            <boxGeometry args={[6, 1.75, 4]} />
            <meshStandardMaterial
                color={CASING_COLOR}
                roughness={0.9}
                metalness={0.4}
            />
            <Edges color={EDGE_COLOR} />
        </mesh>

        {/* Button on Base */}
        <group
            position={[0, 0, 2.1]}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "default")}
        >
            {/* Button Body */}
            <mesh rotation={[Math.PI / 2, 0, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
                <meshStandardMaterial
                    color={CASING_COLOR}
                    roughness={0.5}
                    metalness={0.8}
                />
                <Edges color={EDGE_COLOR} />
            </mesh>
            {/* Standby Icon */}
            <Text
                position={[0, -0.1, 0.12]} // Adjusted to sit on the button's surface
                fontSize={0.5}
                color={isComputerOn ? COMPUTER_COLOR : COMPUTER_OFF_COLOR}
                anchorX="center"
                anchorY="middle"
            >
                &#x23FB; {/* Unicode for the standby icon */}
            </Text>
        </group>
    </group>
)

const RetroKeyboard = () => (
    <group position={[1, -3, 2]}>
        {/* Keyboard Base */}
        <mesh castShadow>
            <boxGeometry args={[7, 0.5, 3]} />
            <meshStandardMaterial
                color={CASING_COLOR}
                roughness={0.8}
                metalness={0.1}
            />
            <Edges color={EDGE_COLOR} />
        </mesh>
        {/* Keys */}
        <group position={[-0.8, 1.2, 1.6]}>
            {/* First 4 rows of keys */}
            {Array.from({ length: 4 }).map((_, row) =>
                Array.from({ length: 14 }).map((_, col) => (
                    <mesh
                        key={`${row}-${col}`}
                        position={[-2.5 + col * 0.4, 0, -1.2 + row * 0.4]}
                    >
                        <boxGeometry args={[0.35, 0.1, 0.35]} />
                        <meshStandardMaterial color={CASING_COLOR} />
                        <Edges color={EDGE_COLOR} />
                    </mesh>
                ))
            )}

            {/* Bottom Row with Spacebar */}
            {Array.from({ length: 12 }).map((_, col) => {
                if (col === 3) {
                    // Spacebar in the middle of the bottom row
                    return (
                        <mesh key="spacebar" position={[-0.3, 0, 0.4]}>
                            <boxGeometry args={[2.3, 0.1, 0.35]} />
                            {/* Longer spacebar */}
                            <meshStandardMaterial color={CASING_COLOR} />
                            <Edges color={EDGE_COLOR} />
                        </mesh>
                    )
                } else if (col < 3 || col > 6) {
                    // Normal keys on either side of the spacebar
                    return (
                        <mesh
                            key={`key-${col}`}
                            position={[
                                -2.5 + (col < 3 ? col : col + 2) * 0.4,
                                0,
                                0.4,
                            ]}
                        >
                            <boxGeometry args={[0.35, 0.1, 0.35]} />
                            <meshStandardMaterial color={CASING_COLOR} />
                            <Edges color={EDGE_COLOR} />
                        </mesh>
                    )
                }
                return null // Skip positions where the spacebar is
            })}
        </group>
    </group>
)
