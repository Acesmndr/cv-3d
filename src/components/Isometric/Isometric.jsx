import * as React from "react";
import Laptop from "../Items/Laptop/Laptop";
import Monitor from "../Items/Monitor/Monitor";
import Photos from "../Items/Photos/Photos";
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
import { isChrome } from "../../mixin";
import { Room } from "../Room/Room";

// const calc = (x, y, rx, ry, rz, tx, ty, tz, s) => [rx -(y - window.innerHeight / 2) / 100, ry, rz - (x - window.innerWidth / 2) / 100, tx, ty, tz, s];
const transform = (rx, ry, rz, tx, ty, tz, s) =>
  // 'perspective(2500px) rotateX(90deg) rotateY(0deg) rotateZ(-9deg) translateX(-10vw) translateY(0vw) translateZ(-5vw) scale3d(0.1, 0.1, 0.1)';
  `perspective(${
    isChrome ? 1250 : 2500
  }px) rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg) translateX(${tx}vw) translateY(${ty}vw) translateZ(${tz}vw) scale3d(${s}, ${s}, ${s})`;
const areaToZoomForChrome = (key) => {
  console.log(key);
  const zoomAngles = [
    [90, 0, 0, 0, 0, -9, 1], // zoomed out
    [90, 0, 0, 286, 435, -552, 48], // monitor extra zoom
    [90, 0, 0, 286, 344, -552, 48], // monitor
    [65, 0, 5, 162, 150, -220, 24], // monitor and laptop extra zoom
    [94, 0, 0, 145, 92, -220, 24], // monitor and laptop
    [90, 0, 90, 75, 210, -290, 24], // window
    [0, 0, 25, 235, 145, -220, 24], // idcard
    [90, 0, 90, 75, 210, -290, 24], // window
    [0, 0, 25, 235, 145, -220, 24], // idcard
    [90, 0, 0, -182, 170, -130, 24], // books
    [90, 0, 0, -170, 130, -280, 24], // certificates
    [90, 0, 0, 286, 344, -552, 48],
    [65, 0, 5, 162, 150, -220, 24], // monitor and laptop extra zoom
    [0, 0, -32, 40, 200, -220, 24], // medium writing
    [90, 0, 90, 175, -165, -320, 32], // photos
    [90, 0, 0, 0, 0, -9, 1], // zoomed out
    [0, -180, 0, 0, 0, -9, 1], // contact
  ];
  if (key > zoomAngles.length) return zoomAngles[0];
  return zoomAngles[key];
};
const areaToZoomForOtherBrowsers = (key) => {
  const zoomAngles = [
    [90, 0, 9, 25, 50, -5, 0.1],
    [90, 0, 0, -45, 56, -138, 3], // monitor extra zoom
    [90, 0, 0, -40, 20, -140, 3], // monitor
    [65, 0, 0, -50, -40, -120, 4], // monitor and laptop extra zoom
    [95, 0, 0, -10, -20, -81.5, 2], // monitor and laptop
    [90, 0, 95, -80, -60, -150, 3], // window
    [0, 0, 25, 0, -110, -125, 4], // idcard
    [90, 0, 95, -80, -60, -150, 3], // window
    [0, 0, 25, 0, -110, -125, 4], // idcard
    [90, 0, 0, -200, 20, -70, 3], // books
    [90, 0, 0, -120, 20, -95, 2], // certificates
    [90, 0, 0, -40, 20, -140, 3],
    [65, 0, 0, -50, -40, -120, 4], // monitor and laptop extra zoom
    [5, 0, -20, -120, -40, -180, 4], // medium writing
    [90, 0, 90, -30, -240, -115, 3], // photos
    [90, 0, 9, 25, 50, -5, 0.1],
    [0, -189, 0, -32, -5, -100, 0.1], // contact
  ];
  if (key > zoomAngles.length) return zoomAngles[0];
  return zoomAngles[key];
};
const areaToZoom = isChrome ? areaToZoomForChrome : areaToZoomForOtherBrowsers;
const Isometric = ({ isSafari }) => {
  const [keyCount, setKeyCount] = React.useState(0);
  const [props, set] = useSpring(() => ({
    coordinates: isChrome
      ? [90, 0, 0, 0, 0, -9, 1]
      : [90, 0, 9, 25, 50, -5, 0.1],
    config: { mass: 6, tension: 350, friction: 100 },
  }));
  const incrementKeyCount = () => {
    const newCount = Math.min(16, keyCount + 1);
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
        <Room count={keyCount}>
          <Monitor currentIndex={keyCount} />
          <Certificates />
          <BookShelf />
          <Window currentIndex={keyCount} />
          <Photos />
          <StudyTable />
          <Laptop currentIndex={keyCount} />
          <Tablet />
          <IdentityCard currentIndex={keyCount} />
          <Chair currentIndex={keyCount} />
        </Room>
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

export default Isometric;
