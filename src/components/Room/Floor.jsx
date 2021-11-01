import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../mixin";
import {
  BackFace,
  BottomFace,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../Isometric/Cube";
import LinkedInContactImage from "../../images/contact.jpg";
import { bg2, white1, white2, white3 } from "../../palette";

const style = {
  front: css`
    background-color: ${white2};
  `,
  back: css`
    background-color: ${white3};
  `,
  right: css`
    background-color: ${white3};
  `,
  left: css`
    background-color: ${white1};
  `,
  top: css`
    background-color: #546e7a;
    background-image: linear-gradient(
        45deg,
        #455a64 25%,
        transparent 25%,
        transparent 75%,
        #455a64 75%,
        #455a64
      ),
      linear-gradient(
        -45deg,
        #455a64 25%,
        transparent 25%,
        transparent 75%,
        #455a64 75%,
        #455a64
      );
    background-size: 52px 52px;
  `,
  bottom: css`
    background-image: url(${LinkedInContactImage});
    cursor: pointer;
    background-size: cover;
    &::after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: ${vres(27)};
      height: ${vres(27)};
      box-shadow: ${vres(0.25)} ${vres(0.25)} ${vres(10.5)} ${bg2},
        ${vres(0.25)} ${vres(0.5)} ${vres(4.5)} ${bg2};
    }
  `,
};

const CubeProps = cprops(27, 0.5, 13.5);

const Cube = styled.div`
  position: absolute;
  left: ${vres(0)};
  top: ${vres(0)};
  width: ${vres(27)};
  height: ${vres(27)};
`;

const Floor = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top} />
    <BottomFace {...CubeProps} styles={style.bottom} onClick={() => {
      window.open("https://www.linkedin.com/in/acesmndr/", "_blank")
    }}>
    </BottomFace>
  </Cube>
);

export default Floor;
