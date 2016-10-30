import React, {Component} from 'react';
import Time from './Time.jsx';
import Weather from './Weather.jsx';
import NewsFeed from './NewsFeed.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Time />
        <Weather />
        <NewsFeed />
      </div>
    );
  }
}
export default App;
