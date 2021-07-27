import { useEffect } from "react";
import Isometric from "./components/Isometric/Isometric";
import styled, { createGlobalStyle } from "styled-components";
import { vres } from "./mixin";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: auto;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => vres(props.isChrome ? 100 : 10)};
  height: 100vh;
  overflow: hidden;
  background-image: radial-gradient(white, #2a9aea);
  transform: translateZ(0);
}
`;

const SafariWarning = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 16px;
  text-align: center;
  color: white;
  font-weight: bold;
  background-color: #e6804d;
`;

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const isChrome =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  console.log(isSafari, "asdfasdf");

function App() {
  useEffect(() => {
    const isBrave = navigator.brave !== undefined;
    isBrave && document.body.classList.add("brave");
  });

  return (
    <div>
      {isSafari && (
        <SafariWarning>
          Currently Safari doesn't fully support this site. Please switch to
          Chrome for better viewing experience.
        </SafariWarning>
      )}
      <GlobalStyle isChrome={isChrome} />
      <Isometric isSafari={isSafari} />
    </div>
  );
}

export default App;
