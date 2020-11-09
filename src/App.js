import './App.css';
import Isometric from './components/Isometric/Isometric';
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

function App() {
  return (
    <div>
      {isSafari && <div className='safari-browser'>Currently Safari doesn't fully support this site. Please switch to Chrome for better viewing experience.</div>}
      {isFirefox && <div className='firefox-browser'>Currently Firefox doesn't fully support this site. Please switch to Chrome for better viewing experience.</div>}
      <Isometric isSafari={isSafari} />
    </div>
  );
}

export default App;
