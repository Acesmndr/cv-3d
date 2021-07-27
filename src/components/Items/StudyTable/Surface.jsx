import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, isChrome, vres } from "../../../mixin";
import { black2, black3, neon1, neon2, white1 } from "../../../palette";
import TableBg from '../../../images/wood.jpg';
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
    background-image: linear-gradient(
      to right,
      #060703,
      #17180b
    );
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
    }
  `,
  back: css`background-color: ${black3};`,
  right: css`background-color: black`,
  left: css`background-color: ${black2}`,
  top: css`
    background-color: #2b0d03;
    background-image: url(${TableBg});
    background-size: ${isChrome ? '20px' : vres(2)};
    background-repeat: repeat;
    overflow: hidden;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 50%;
      height: 50%;
      background-image: linear-gradient(
        45deg,
        rgba(${neon1}, 0.5),
        rgba(${white1}, 0.125) 50%,
        transparent 55%
      );
      filter: blur(${vres(0.5)});
    }
    &::after {
      content: "";
      position: absolute;
      left: ${vres(2)};
      top: ${vres(2)};
      width: 20%;
      height: 50%;
      border-radius: 50%;
      background-color: rgba(${neon2}, 0.079);
      transform: rotateZ(-40deg);
      filter: blur(${vres(0.75)});
    }
    }`,
  bottom: css`background-color: ${black3};`,
};

const CubeProps = cprops(14, 0.5, 4.5);

const Cube = styled.div`
  position: absolute;
  left: ${vres(0)};
  top: ${vres(0)};
  width: ${vres(14)};
  height: ${vres(7)};
  transform: translateZ(${vres(6)});
`;

const Surface = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Surface;
