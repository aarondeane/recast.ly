import VideoPlayer from '../../src/components/VideoPlayer.js';
import VideoList from '../../src/components/VideoList.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currVideoPlaying: exampleVideoData[0]
    };
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo (title, videos) {
    var videoIndex;
    videos.forEach(function(video, i) {
      if (video.snippet.title === title) {
        videoIndex = i;
      }
    });
    this.setState({
      currVideoPlaying: videos[videoIndex]
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>WHAT DO YOU WANT?</em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>THIS VIDEO IS PLAYING</em><VideoPlayer video={this.state.currVideoPlaying} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>THESE ARE YOUR VIDEOS</em><VideoList videos={exampleVideoData} playVideo={this.playVideo}/></h5></div>
          </div>
        </div>
      </div>
    );
  }  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
// onClick = {this.onVideoListClick.bind(this)}