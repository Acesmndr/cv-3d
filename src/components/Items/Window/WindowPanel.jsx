import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import Kathmandu from "../../../images/kathmandu.jpg";

import {
  BackFace,
  BottomFace,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../../Isometric/Cube";

const style = {
  front: css``,
  back: css``,
  right: css`
    background-image: url(${Kathmandu});
    background-size: cover;
    background-color: black;
    
    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: radial-gradient(#ccb76a00 50%, #00086770);
    }
  }
  `,
  left: css``,
  top: css``,
  bottom: css``,
};

const CubeProps = cprops(0.125, 8, 2.5);

const Cube = styled.div`
  position: absolute;
  left: ${vres(-0.1)};
  top: ${vres(0)};
  width: ${vres(0.125)};
  height: ${vres(8)};
`;

const WindowPanel = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

export default WindowPanel;
