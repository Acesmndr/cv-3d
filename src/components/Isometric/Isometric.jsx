import * as React from "react";
import "./style.scss";
import Laptop from "../Items/Laptop/Laptop";
import Monitor from "../Items/Monitor/Monitor";
import Hobbies from "../Items/Photos/Photos";
import Chair from "../Items/Chair/Chair";
import StudyTable from "../Items/StudyTable/StudyTable";
import Window from "../Items/Window/Window";
import { useSpring, animated } from "react-spring";
import Certificates from "../Items/Certificates/Certificates";
import BookShelf from "../Items/BookShelf/BookShelf";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Tablet from "../Items/Tablet/Tablet";
import IdentityCard from "../Items/IdentityCard/IdentityCard";
import Subtitles from "../Items/Subtitles/Subtitles";
import Keys from "../Items/Keys/Keys";

// const calc = (x, y, rx, ry, rz, tx, ty, tz, s) => [rx -(y - window.innerHeight / 2) / 100, ry, rz - (x - window.innerWidth / 2) / 100, tx, ty, tz, s];
const isChrome = true;

const transform = (rx, ry, rz, tx, ty, tz, s) =>
  // 'perspective(2500px) rotateX(90deg) rotateY(0deg) rotateZ(-9deg) translateX(-10vw) translateY(0vw) translateZ(-5vw) scale3d(0.1, 0.1, 0.1)';
  `perspective(${
    isChrome ? 1250 : 2500
  }px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translateX(${tx}vw) translateY(${ty}vw) translateZ(${tz}vw) scale3d(${s}, ${s}, ${s})`;
const areaToZoomForChrome = (key) => {
  switch (key) {
    case 1:
      return [90, 0, 0, 286, 435, -552, 48]; // monitor extra zoom
    case 2:
      return [90, 0, 0, 286, 344, -552, 48]; // monitor
    case 3:
      return [65, 0, 5, 162, 150, -220, 24]; // monitor and laptop extra zoom
    case 4:
      return [94, 0, 0, 145, 92, -220, 24]; // monitor and laptop
    case 5:
      return [90, 0, 90, 75, 210, -290, 24]; // window
    case 6:
      return [0, 0, 25, 235, 145, -220, 24]; // idcard
    case 7:
      return [90, 0, 0, -182, 170, -130, 24]; // books
    case 8:
      return [90, 0, 0, -170, 130, -280, 24]; // certificates
    case 9:
      return [90, 0, 0, 286, 344, -552, 48];
    case 10:
      return [65, 0, 5, 162, 150, -220, 24]; // monitor and laptop extra zoom
    case 11:
      return [0, 0, -32, 40, 200, -220, 24]; // medium writing
    case 12:
      return [90, 0, 90, 175, -165, -320, 32]; // photos
    case 14:
      return [0, -180, 0, 0, 0, -9, 1]; // contact
    case 0:
    case 13:
    default:
      return [90, 0, 0, 0, 0, -9, 1]; // zoomed out
  }
};
const areaToZoomForOtherBrowsers = (key) => {
  switch (key) {
    case 1:
      return [90, 0, 0, -45, 56, -138, 3]; // monitor extra zoom
    case 2:
      return [90, 0, 0, -40, 20, -140, 3]; // monitor
    case 3:
      return [65, 0, 0, -50, -40, -120, 4]; // monitor and laptop extra zoom
    case 4:
      return [95, 0, 0, -10, -20, -81.5, 2]; // monitor and laptop
    case 5:
      return [90, 0, 95, -80, -60, -150, 3]; // window
    case 6:
      return [0, 0, 25, 0, -110, -125, 4]; // idcard
    case 7:
      return [90, 0, 0, -200, 20, -70, 3]; // books
    case 8:
      return [90, 0, 0, -120, 20, -95, 2]; // certificates
    case 9:
      return [90, 0, 0, -40, 20, -140, 3];
    case 10:
      return [65, 0, 0, -50, -40, -120, 4]; // monitor and laptop extra zoom
    case 11:
      return [5, 0, -20, -120, -40, -180, 4]; // medium writing
    case 12:
      return [90, 0, 90, -30, -240, -115, 3]; // photos
    case 14:
      return [0, -189, 0, -32, -5, -100, 0.1]; // contact
    case 0:
    case 13:
    default:
      return [90, 0, 9, 25, 50, -5, 0.1];
  }
};
const areaToZoom = isChrome ? areaToZoomForChrome : areaToZoomForOtherBrowsers;
const Isometric = ({ isSafari }) => {
  const [keyCount, setKeyCount] = React.useState(0);
  const [props, set] = useSpring(() => ({
    coordinates: isChrome ? [90, 0, 0, 0, 0, -9, 1] : [90, 0, 9, 25, 50, -5, 0.1],
    config: { mass: 6, tension: 350, friction: 100 },
  }));
  const incrementKeyCount = () => {
    const newCount = Math.min(14, keyCount + 1);
    setKeyCount(newCount);
    set({ coordinates: areaToZoom(newCount) });
  };
  const decrementKeyCount = () => {
    const newCount = Math.max(0, keyCount - 1);
    setKeyCount(newCount);
    set({ coordinates: areaToZoom(newCount) });
  };
  return (
    <>
      <animated.div
        /**
         * Enable if you want to enable mouse move
         * onMouseMove={({ clientX: x, clientY: y }) => {
         *   if (isSafari) {
         *     return;
         *   }
         *   const [rx, ry, rz, tx, ty, tz, s] = props.coordinates.payload.map(p => p.value);
         *   set({ coordinates: calc(x, y, rx, ry, rz, tx, ty, tz, s) })
         * }}
         */
        style={{ transform: props.coordinates.interpolate(transform) }}
        className="house-div"
      >
        <KeyboardEventHandler
          handleKeys={["up", "down", "left", "right"]}
          onKeyEvent={(key, e) => {
            switch (key) {
              case "down":
              case "right":
                incrementKeyCount();
                break;
              case "up":
              case "left":
                decrementKeyCount();
                break;
              default:
            }
          }}
        />
        <Room count={keyCount} />
      </animated.div>
      <Subtitles currentIndex={keyCount} isSafari={isSafari} />
      <Keys
        incrementKeyCount={incrementKeyCount}
        decrementKeyCount={decrementKeyCount}
        keyCount={keyCount}
      />
    </>
  );
};

const Room = (props) => (
  <div className="house" id="h" {...props}>
    <div className="h-shadow"></div>
    <div className="floor">
      <div className="floor__front face"> </div>
      <div className="floor__back face"> </div>
      <div className="floor__right face"> </div>
      <div className="floor__left face"> </div>
      <div className="floor__top face"> </div>
      <a
        href="https://www.linkedin.com/in/acesmndr/"
        referrerPolicy="no-referrer no-follow"
      >
        <div className="floor__bottom face"></div>
      </a>
    </div>
    <div className="left-wall">
      <div className="left-wall__front face"> </div>
      <div className="left-wall__back face"> </div>
      <div className="left-wall__right face"> </div>
      <div className="left-wall__left face"> </div>
      <div className="left-wall__top face"> </div>
      <div className="left-wall__bottom face"> </div>
    </div>
    <div className="ceiling-left">
      <div className="ceiling-left__front face"> </div>
      <div className="ceiling-left__back face"> </div>
      <div className="ceiling-left__right face"> </div>
      <div className="ceiling-left__left face"> </div>
      <div className="ceiling-left__top face"> </div>
      <div className="ceiling-left__bottom face"> </div>
    </div>
    <div className="right-wall">
      <div className="right-wall__front face"> </div>
      <div className="right-wall__back face"> </div>
      <div className="right-wall__right face"> </div>
      <div className="right-wall__left face"> </div>
      <div className="right-wall__top face"> </div>
      <div className="right-wall__bottom face"> </div>
    </div>
    <div className="ceiling-right">
      <div className="ceiling-right__front face"> </div>
      <div className="ceiling-right__back face"> </div>
      <div className="ceiling-right__right face"> </div>
      <div className="ceiling-right__left face"> </div>
      <div className="ceiling-right__top face"> </div>
      <div className="ceiling-right__bottom face"> </div>
    </div>
    <Monitor currentIndex={props.count} />
    {/* <Door /> */}
    <Certificates />
    <BookShelf />
    <Window />
    <Hobbies />
    <StudyTable />
    <Laptop currentIndex={props.count} />
    <Tablet />
    <IdentityCard />
    <Chair currentIndex={props.count} />
  </div>
);

export default Isometric;
