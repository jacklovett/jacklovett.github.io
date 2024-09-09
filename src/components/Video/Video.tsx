interface IProps {
    videoPath: string
    posterPath: string
}

export const Video = (props: IProps) => {
    const { videoPath, posterPath } = props
    return (
        <div className="video-container">
            <video
                src={videoPath}
                loop
                autoPlay
                muted
                preload="auto"
                poster={posterPath}
                width="640"
                height="360"
            ></video>
        </div>
    )
}
