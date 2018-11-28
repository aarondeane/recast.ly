import VideoPlayer from '../../src/components/VideoPlayer.js';
import VideoList from '../../src/components/VideoList.js';
import exampleVideoData from '../../src/data/exampleVideoData.js';
import YOUTUBE_API_KEY from '../../src/config/youtube.js';
import Search from '../../src/components/Search.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currVideoPlaying: exampleVideoData[0],
      currVideoList: exampleVideoData
    };
    this.playVideo = this.playVideo.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
  }

  playVideo (title, video) {
    this.setState({
      currVideoPlaying: video
    });
  }

  dynamicSearch (search) {
    this.props.searchYouTube({query: search, max: 5, key: YOUTUBE_API_KEY}, (videos) => {
      this.setState({
        currVideoPlaying: videos[0],
        currVideoList: videos
      });
    });
  }

  componentDidMount () {
    this.props.searchYouTube({query: 'ugly cats', max: 5, key: YOUTUBE_API_KEY}, (videos) => {
      this.setState({
        currVideoPlaying: videos[0],
        currVideoList: videos
      });
    });
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>WHAT DO YOU WANT?</em><Search dynamicSearch={this.dynamicSearch}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>THIS VIDEO IS PLAYING</em><VideoPlayer video={this.state.currVideoPlaying} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>THESE ARE YOUR VIDEOS</em><VideoList videos={this.state.currVideoList} playVideo={this.playVideo}/></h5></div>
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