import './App.css';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div className="App">
     { /*<header>
        this is header
      </header>*/}
      <main>
        <img src='https://wallpapers.com/images/hd/lotr-landscape-artwork-44crsr9vijwvjrqd.jpg' alt='lotr-background-image' className='bg-image'></img>
        <Dashboard />
      </main>
      {/*<footer></footer>*/}
    </div>
  );
}

export default App;
