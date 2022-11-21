import React from "react";


class VideoPlayer extends React.Component {
    render() {
        if (this.props.video) {
            return <div>
                <div className="ui embed">
                    <iframe title="videoplayer" src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} frameborder="0" />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">
                        {this.props.video.snippet.title}
                    </h4>
                    <p>
                        {this.props.video.snippet.description}
                    </p>
                </div>
            </div>
        }
        else {
            return <div>
                Loading...
            </div>
        }

    }
}

export default VideoPlayer;