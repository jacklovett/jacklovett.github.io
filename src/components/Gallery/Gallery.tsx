import { useEffect, useState } from "react"
import "./Gallery.css"

interface GalleryImage {
    name: string
    path: string
}

interface IProps {
    images: GalleryImage[]
    galleryHeight?: number
}

export const Gallery = (props: IProps): JSX.Element => {
    const { images, galleryHeight = 480 } = props

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [currentImagePosition, setCurrentImagePosition] = useState<number>(0)

    const currentImage = images[currentImagePosition]
    const { name, path } = currentImage

    const nextImage = () => {
        if (currentImagePosition < images.length - 1) {
            setCurrentImagePosition(currentImagePosition + 1)
        }
    }

    const prevImage = () => {
        if (currentImagePosition > 0) {
            setCurrentImagePosition(currentImagePosition - 1)
        }
    }

    const close = () => {
        setIsOpen(false)
        setCurrentImagePosition(0)
    }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                close()
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown)
        } else {
            document.removeEventListener("keydown", handleKeyDown)
        }

        return () => document.removeEventListener("keydown", handleKeyDown)
    }, [isOpen])

    return (
        <div className="gallery-container">
            <div
                className={`gallery ${isOpen ? "opened" : ""}`}
                onClick={() => {
                    if (!isOpen) {
                        setIsOpen(true)
                    }
                }}
            >
                <img src={path} alt={name} height={galleryHeight} />
            </div>
            {isOpen && (
                <div className="gallery-overlay">
                    <button
                        className="gallery-button close-button"
                        onClick={() => close()}
                    >
                        &#10005;
                    </button>
                    <img src={path} alt={name} className="gallery-image" />

                    <button
                        className="gallery-button prev-button"
                        onClick={prevImage}
                        disabled={currentImagePosition === 0}
                    >
                        &#10094;
                    </button>
                    <button
                        className="gallery-button next-button"
                        onClick={nextImage}
                        disabled={currentImagePosition === images.length - 1}
                    >
                        &#10095;
                    </button>
                    <div className="image-indicators">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`indicator ${
                                    index === currentImagePosition
                                        ? "active"
                                        : ""
                                }`}
                            ></span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
