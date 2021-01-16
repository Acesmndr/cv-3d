import { useEffect } from 'react';
import './App.css';
import Isometric from './components/Isometric/Isometric';

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function App() {
  useEffect(() => {
    const isBrave = navigator.brave !== undefined;
    isBrave && document.body.classList.add('brave');
  });

  return (
    <div>
      {isSafari && <div className='safari-browser'>Currently Safari doesn't fully support this site. Please switch to Chrome for better viewing experience.</div>}
      <Isometric isSafari={isSafari} />
    </div>
  );
}

export default App;
