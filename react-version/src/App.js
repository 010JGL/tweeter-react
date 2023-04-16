import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'
import Tweet from './components/Tweet'
import './App.css';

function App() {
  return (
    <>
      <nav><Navigation /> </nav>
      <aside><Profile /> </aside>
      <main className="container">
        <section className="newTweet"><TweetForm /></section>
        <section className="tweets"><TweetList /><Tweet /><Tweet /></section>
      </main>

      {/* <div className="App"> */}
    </>
    

  );
}

export default App;
