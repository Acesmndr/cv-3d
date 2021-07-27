import * as React from "react";
import styled from "styled-components";
import { isChrome, vres } from "../../../mixin";

const Key = styled.div`
  font-family: monospace;
  position: absolute;
  background: black;
  color: white;
  font-size: 4vh;
  opacity: 0.25;
  height: 10vh;
  width: 10vh;
  text-align: center;
  line-height: 10vh;
`;

const KeyLeft = styled(Key)`
  transform: ${isChrome ? `translateX(${vres(-30)}) translateY(${vres(-20)})` : `translateX(${vres(-1.25)}) translateY(${vres(-2.5)}) translateZ(${vres(25)})` }
`;

const KeyRight = styled(Key)`
  transform: ${isChrome ? `translateX(${vres(52)}) translateY(${vres(-20)})` : `translateX(${vres(19.25)}) translateY(${vres(-2.5)}) translateZ(${vres(25)})`}
`;

const Keys = ({ incrementKeyCount, decrementKeyCount, keyCount }) => {
  return (
    <>
      {keyCount !== 0 && <KeyLeft onClick={decrementKeyCount}>&larr;</KeyLeft>}
      {keyCount <= 14 && (
        <KeyRight onClick={incrementKeyCount}>&rarr;</KeyRight>
      )}
    </>
  );
};

export default Keys;
