import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import {
  white1,
  white2,
  neon1,
  neon2,
} from "../../../palette";

import {
  BackFace,
  BottomFace,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../../Isometric/Cube";

const style = {
  front: css`
    background-repeat: no-repeat;
    background-size: cover;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(${neon1}, 0.4),
        transparent
      );
    }
  `,
  back: css`
    background-color: ${white1};
  `,
  right: css`
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to left,
        rgba(${neon1}, 0.85),
        rgba(${neon2}, 0.35)
      );
    }
  `,
  left: css`
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to left,
        rgba(${neon1}, 0.85),
        rgba(${neon2}, 0.35)
      );
    }
  `,
  top: css`
    background-color: ${white2};
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to bottom,
        rgba(${neon1}, 0.85),
        rgba(${neon2}, 0.35)
      );
    }
  `,
  bottom: css`
    background-color: ${white1};
  `,
};

const CubeProps = cprops(0.14, 1.3, 0.7);

const Cube = styled.div`
  position: absolute;
  top: ${vres(1)};
  width: ${vres(0.2)};
  height: ${vres(1)};
  transform-origin: left;
  left: ${props => vres(props.left)};
  transform: ${props => props.transform};
`;

const coloredImageStyle = (image, color, styles) => `
  ${styles}
  background-color: ${color};
  background-image: url(${image});
`

const coloredStyle = (color, styles) => `
  ${styles}
  background-color: ${color};
`

const Book = ({ left, transform, image, color, id }) => {
  return(
  <Cube key={id} left={left} transform={transform}>
    <FrontFace {...CubeProps} styles={coloredImageStyle(image, color, style.front)} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={coloredStyle(color, style.right)} />
    <LeftFace {...CubeProps} styles={coloredStyle(style.left)} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
)};

export default Book;
