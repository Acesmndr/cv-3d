import * as React from "react";
import styled, { css } from "styled-components";
import { cprops, vres } from "../../../mixin";
import TabletImage from "../../../images/medium.jpg";
import {
  BackFace,
  BottomFace,
  CubeTemplate,
  FrontFace,
  LeftFace,
  RightFace,
  TopFace,
} from "../../Isometric/Cube";

// const Tablet = () => (
//     <div className="tablet__top face"><a className="tablet-link" href="https://medium.com/@acesmndr" referrerPolicy="no-referrer no-follow">Medium</a></div>
// );

const maincube = {
  left: 11,
  top: 4,
  width: 3,
  height: 2,
  transform: css`translateZ(${vres(7.05)}) rotateZ(15deg)`,
};

const style = {
  front: css`
    background-color: #383838;
  `,
  back: css`
    background-color: #383838;
  `,
  right: css`
    background-color: #383838;
  `,
  left: css`
    background-color: #383838;
  `,
  top: css`
    background-image: url(${TabletImage});
    background-size: cover;
    cursor: pointer;
    a {
      display: block;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  `,
  bottom: css`
    background-color: black;
  `,
};

const CubeProps = cprops(3, 0.1, 1);

const Cube = styled.div`
  position: absolute;
  left: ${vres(maincube.left)};
  top: ${vres(maincube.top)};
  width: ${vres(maincube.width)};
  height: ${vres(maincube.height)};
  transform: ${maincube.transform};
`;

const Tablet = () => (
  <Cube>
    <FrontFace {...CubeProps} styles={style.front} />
    <BackFace {...CubeProps} styles={style.back} />
    <RightFace {...CubeProps} styles={style.right} />
    <LeftFace {...CubeProps} styles={style.left} />
    <TopFace {...CubeProps} styles={style.top}>
      <a
        href="https://medium.com/@acesmndr"
        referrerPolicy="no-referrer no-follow"
      >
        Medium
      </a>
    </TopFace>
    <BottomFace {...CubeProps} styles={style.bottom} />
  </Cube>
);

// const Tablet = () => <div></div>

export default Tablet;
