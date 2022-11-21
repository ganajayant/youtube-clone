import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

class App extends React.Component {
    state = { videos: [], selectedvideo: null }

    componentDidMount() {
        this.onSearchSubmit('buildings')
    }

    onSearchSubmit = async (term) => {
        console.log(process.env);
        const URL = `https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}=${term}&part=snippet&maxResults=5`
        const response = await fetch(URL)
        const data = await response.json()
        this.setState({ videos: data.items, selectedvideo: data.items[0] })
    }
    onVideoSelect = (video) => {
        this.setState({ selectedvideo: video });
    }
    render() {
        return <div className="ui container" style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoPlayer video={this.state.selectedvideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>

        </div>
    }
}

export default App;