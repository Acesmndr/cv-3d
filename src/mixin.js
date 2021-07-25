import { css } from "styled-components";

const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

export const vres = (num) => isChrome ? `${num}vw` : `${num * 4}vw`;

export const cprops = (width, height, depth) => ({
  width,
  height,
  depth,
});

// export const cubeStyle = ({ x, transform, styles }) => css`
//   position: absolute;
//   left: ${vres(x[0])}
//   top: ${vres(x[1])}
//   width: ${vres(x[2])}
//   height: ${vres(x[3])}
//   transform: ${transform}
//   ${styles} 
// `;
