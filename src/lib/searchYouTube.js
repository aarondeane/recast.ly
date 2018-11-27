import YOUTUBE_API_KEY from '../../src/config/youtube.js';

var searchYouTube = (options, callback) => {
  $.get("https://www.googleapis.com/youtube/v3/search", {
    maxResults : options.max,
    key : options.key,
    q : options.query
  }, function(data) {callback(data)});
};

export default searchYouTube;
