import * as React from "react";
import Laptop from "../Items/Laptop/Laptop";
import Monitor from "../Items/Monitor/Monitor";
import Hobbies from "../Items/Hobbies/Hobbies";
import Chair from "../Items/Chair/Chair";
import StudyTable from "../Items/StudyTable/StudyTable";
import Window from "../Items/Window/Window";
import "./style.scss";
import { useSpring, animated } from "react-spring";
import Certificates from "../Items/Certificates/Certificates";
import BookShelf from "../Items/BookShelf/BookShelf";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Tablet from "../Items/Tablet/Tablet";
import IdentityCard from "../Items/IdentityCard/IdentityCard";

const calc = (x, y, rx, ry, rz, tx, ty, tz, s) => [rx -(y - window.innerHeight / 2) / 100, ry, rz - (x - window.innerWidth / 2) / 100, tx, ty, tz, s];
// const trans = (x, y, s) => `perspective(1250px) rotateX(${x}deg) rotateY(${y}deg) translateZ(-9vw) scale3D(${s}, ${s}, ${s})`
const transform = (rx, ry, rz, tx, ty, tz, s) =>
  `perspective(1250px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translateX(${tx}vw) translateY(${ty}vw) translateZ(${tz}vw) scale3d(${s}, ${s}, ${s})`;
const areaToZoom = (key) => {
  switch (key) {
    case 1:
      return [90, 0, 0, 286, 344, -552, 48]; // monitor
    case 2:
      return [94, 0, 0, 145, 70, -220, 24]; // monitor and laptop
    case 3:
      // perspective(1250px) rotateX(90deg) rotateY(0deg) rotateZ(90deg) translateX(75vw) translateY(210vw) translateZ(-290vw) scale3d(24, 24, 24)
      return [90, 0, 90, 75, 210, -290, 24];
      // return [105, 0, 90, 145, 70, -220, 24]; // window
    case 4:
      return [0, 0, 25, 235, 145, -220, 24]; // idcard
      // return [94, 0, 0, 145, 70, -220, 24]; // monitor and laptop
    case 5:
      return [90, 0, 0, -182, 170, -130, 24]; // books
    case 6:
      return [90, 0, 0, -170, 130, -280, 24]; // certificates
    case 7:
      return [0, 0, -32, 40, 200, -220, 24]; // medium writing
    case 8:
      return [90, 0, 90, 175, -200, -320, 32]; // photos
    case 0:
    default:
      return [90, 0, 0, 0, 0, -9, 1]; // zoomed out
    // default:
    // return [0, 0, 0, 0, 0, -9, 5];
  }
};
const Isometric = () => {
  const [keyCount, setKeyCount] = React.useState(0);
  const [props, set] = useSpring(() => ({
    coordinates: [90, 0, 0, 0, 0, -9, 1],
    config: { mass: 6, tension: 350, friction: 100 },
  }));
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => {
        const [rx, ry, rz, tx, ty, tz, s] = props.coordinates.payload.map(p => p.value);
        set({ coordinates: calc(x, y, rx, ry, rz, tx, ty, tz, s) })
      }}
      // onMouseLeave={() => set({ coordinates: [0, 0, 0, 0, 0, -9, zoom] })}
      // onClick={({ clientX: x, clientY: y }) => {
      //   setKeyCount(keyCount+1);
      //   set({ coordinates: areaToZoom(keyCount + 1) })
      //   console.log(keyCount+1, props.coordinates);

      // }}
      style={{ transform: props.coordinates.interpolate(transform) }}
    >
      <KeyboardEventHandler
        handleKeys={["up", "down", "left", "right"]}
        onKeyEvent={(key, e) => {
          let newCount = 0;
          switch (key) {
            case "down":
            case "right":
              newCount = Math.max(0, keyCount + 1);
              setKeyCount(newCount);
              set({ coordinates: areaToZoom(newCount) });
              break;
            case "up":
            case "left":
              newCount = Math.min(7, keyCount - 1);
              setKeyCount(newCount);
              set({ coordinates: areaToZoom(newCount) });
              break;
            default:
          }
        }}
      />
      <Room />
    </animated.div>
  );
};

const Room = (props) => (
  <div className="house" id="h" {...props}>
    <div className="h-lights">
      <div className="h-light"></div>
      <div className="h-light"></div>
      <div className="h-light"></div>
      <div className="h-light"></div>
      <div className="h-light"></div>
      <div className="h-light"></div>
    </div>
    <div className="h-shadow"></div>
    <div className="floor">
      <div className="floor__front face"> </div>
      <div className="floor__back face"> </div>
      <div className="floor__right face"> </div>
      <div className="floor__left face"> </div>
      <div className="floor__top face">
        {/* <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div>
        <div className="light"></div> */}
      </div>
      <div className="floor__bottom face"> </div>
    </div>
    {/* <div className="alb">
      <div className="alb__front face"> </div>
      <div className="alb__back face"> </div>
      <div className="alb__right face"> </div>
      <div className="alb__left face"> </div>
      <div className="alb__top face"> </div>
      <div className="alb__bottom face"> </div>
    </div>
    <div className="arb">
      <div className="arb__front face"> </div>
      <div className="arb__back face"> </div>
      <div className="arb__right face"> </div>
      <div className="arb__left face"> </div>
      <div className="arb__top face"> </div>
      <div className="arb__bottom face"> </div>
    </div> */}
    <div className="left-wall">
      <div className="left-wall__front face"> </div>
      <div className="left-wall__back face"> </div>
      <div className="left-wall__right face"> </div>
      <div className="left-wall__left face"> </div>
      <div className="left-wall__top face"> </div>
      <div className="left-wall__bottom face"> </div>
    </div>
    {/* <div className="blt2">
      <div className="blt2__front face"> </div>
      <div className="blt2__back face"> </div>
      <div className="blt2__right face"> </div>
      <div className="blt2__left face"> </div>
      <div className="blt2__top face"> </div>
      <div className="blt2__bottom face"> </div>
    </div> */}
    <div className="right-wall">
      <div className="right-wall__front face"> </div>
      <div className="right-wall__back face"> </div>
      <div className="right-wall__right face"> </div>
      <div className="right-wall__left face"> </div>
      <div className="right-wall__top face"> </div>
      <div className="right-wall__bottom face"> </div>
    </div>
    {/* <div className="blb2">
      <div className="blb2__front face"> </div>
      <div className="blb2__back face"> </div>
      <div className="blb2__right face"> </div>
      <div className="blb2__left face"> </div>
      <div className="blb2__top face"> </div>
      <div className="blb2__bottom face"> </div>
    </div> */}
    <Monitor />
    {/* <Door /> */}
    <Certificates />
    <BookShelf />
    <Window />
    <Hobbies />
    <StudyTable />
    <Laptop />
    <Tablet />
    <IdentityCard />
    <Chair />
  </div>
);

export default Isometric;
