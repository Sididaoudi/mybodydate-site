import React from 'react';
import '../styles/VideoComponent.css';

class VideoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <video className="video-player" controls>
                    <source src={this.props.src} type="video/mp4" />
                </video>
            </div>
        );
    }
}

export default VideoComponent;