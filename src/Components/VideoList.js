import React from "react";

import VideoItem from "./VideoItem";

class VideoList extends React.Component {
    render() {
        const renderedlist = this.props.videos.map((video) => {
            return <VideoItem key={video.id.videoId} video={video} onVideoSelect={this.props.onVideoSelect} />
        })
        return <div>
            Videos Found Are: {this.props.videos.length}
            <div className="ui relaxed divided list">
                {renderedlist}
            </div>
        </div>
    }
}

export default VideoList;