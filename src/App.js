import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css"
import Trending from './components/Trending';


function App() {
  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* end of intro */}

      {/* Trending section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* End of trending section */}
    </div>
  );
}

export default App;
