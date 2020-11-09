import './App.css';
import Isometric from './components/Isometric/Isometric';
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function App() {
  return (
    <div>
      {isSafari && <div className='safari-browser'>Currently Safari doesn't fully support this site. Please switch to chrome for better viewing experience.</div>}
      <Isometric isSafari={isSafari} />
    </div>
  );
}

export default App;
