import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'
import './App.css';

function App() {
  return (
    <body>
      <nav><Navigation /> </nav>
      <aside><Profile /> </aside>
      <main className="container">
        <section className="newTweet"><TweetForm /></section>
        <section className="tweets"><TweetList /></section>
      </main>

      {/* <div className="App"> */}
    </body>
    

  );
}

export default App;
