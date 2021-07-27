import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import WoodBg from "../../../images/wood-rotated.png";

import {
  BackFace,
  BottomFace,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../../Isometric/Cube";
import { neon2 } from "../../../palette";

const style = {
  front: css`
    background-image: url(${WoodBg});
    background-size: 32px;
  `,
  back: css`
    background-image: url(${WoodBg});
    background-size: 32px;
  `,
  right: css`
    background-image: url(${WoodBg});
    background-size: 32px;
  `,
  left: css`
    background-image: url(${WoodBg});
    background-size: 32px;
  `,
  top: css`
    background-image: url(${WoodBg});
    background-size: 32px;
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to right,
        rgba(${neon2}, 0.75),
        transparent
      );
    }
  `,
  bottom: css`
    background-image: url(${WoodBg});
    background-size: 32px;
  `,
};

const CubeProps = cprops(1.5, 0.25, 5);

const Cube = styled.div`
  position: absolute;
  left: ${vres(1)};
  top: ${vres(15)};
  width: ${vres(1.5)};
  height: ${vres(10)};
  transform: translateZ(${props => vres(props.top ? 9 : 5)});
`;

const Plank = ({ top }) => (
  <Cube top={top}>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Plank;
