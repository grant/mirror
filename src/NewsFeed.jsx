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
        stories
      })
    });
  }

  /**
   * Renders a single news item
   */
  renderNewsItem(story) {
    console.log(story);
    const storyId = story.url;
    const storyBody = story.title;
    const newsIcon = '📰';
    return (
      <li key={storyId}>{`${newsIcon} ${storyBody}`}</li>
    );
  }

  /**
   * Renders the news feed
   * @returns {XML}
   */
  render() {
    return (
      <div className="NewsFeed">
        <ul className="news-items">
          {this.state.stories.map(this.renderNewsItem)}
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
