import React, {Component} from 'react';

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      stories: [],
    };

    this.fetchTopStories(stories => {
      this.setState({
        loading: false,
        stories,
      })
    });
  }

  /**
   * Renders a single news item
   */
  renderNewsItem(story) {
    const storyURL = story.url;
    const storyId = storyURL;
    const storyBody = story.title;
    const newsIcon = '📰';
    return (
      <a className="story-link" href={storyURL} key={storyURL}>
        <li key={storyId}>
          <span className="icon">{newsIcon}</span>
          {` ${storyBody}`}
        </li>
      </a>
    );
  }

  /**
   * Renders the news feed
   * @returns {XML}
   */
  render() {
    let shownStories = this.state.stories.slice(0, 4);
    return (
      <div className="NewsFeed">
        <ul className="news-items">
          {shownStories.map(this.renderNewsItem)}
        </ul>
      </div>
    );
  }

  fetchTopStories(cb) {
    fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=1735b720513abd5d22469fb2d74c96d7:3:69808199')
      .then(jsonData => jsonData.json())
      .then(json => {
        cb(json.results);
      });
  }
}
export default NewsFeed;
