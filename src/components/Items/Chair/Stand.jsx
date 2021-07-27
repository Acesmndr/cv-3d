import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import {
  black1,
  black2,
  black3,
  black4,
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
    background-color: ${black3};
  `,
  back: css`
    background-color: ${black3};
  `,
  right: css`
    background-color: ${black4};
  `,
  left: css`
    background-color: ${black2};
  `,
  top: css`
    background-color: ${black1};
  `,
  bottom: css`
    background-color: ${black3};
    &::before {
      content: "";
      position: absolute;
      width: 200%;
      height: 200%;
      top: 0;
      right: 0;
      border-radius: 10%;
      transform: translateZ(${vres(-0.1)});
      background-color: rgba(${black3}, 0.75);
      filter: blur(${vres(0.35)});
    }
  `,
};

const CubeProps = cprops(0.5, 4, 0.25);

const Cube = styled.div`
  position: absolute;
  left: ${vres(1.75)};
  top: ${vres(3)};
  width: ${vres(1)};
  height: ${vres(2)};
  transform: translateZ(${vres(-4)});
`;

const Stand = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default Stand;
