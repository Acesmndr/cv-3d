import * as React from 'react';
import Door from '../Items/Door';
import Laptop from '../Items/Laptop/Laptop';
import Monitor from '../Items/Monitor/Monitor';
import OtherShelves from '../Items/OtherShelves';
import Poster from '../Items/Poster';
import Shelves from '../Items/Shelves';
import Sofa from '../Items/Sofa/Sofa';
import StudyTable from '../Items/StudyTable/StudyTable';
import Table from '../Items/Table';
import TV from '../Items/TV';
import Window from '../Items/Window/Window';
import './style.scss';
import { useSpring, animated } from 'react-spring';

const calc = (x, y, z) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, z]
const trans = (x, y, s) => `perspective(1250px) rotateX(${x}deg) rotateY(${y}deg) translateZ(-9vw) scale3D(${s}, ${s}, ${s})`

const Isometric = () => {
  const [zoom, setZoom] = React.useState(1.1);
  const [props, set] = useSpring(() => ({ xys: [0, 0, 1.1], config: { mass: 4, tension: 350, friction: 40 } }))
  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y, zoom) })}
      onMouseLeave={() => set({ xys: [0, 0, zoom] })}
      onClick={(a) => {
        console.log(a);
        const { clientX: x, clientY: y } = a;
        setZoom(zoom === 1.1 ? 4 : 1.1);
        set({ xys: calc(x, y, zoom === 1.1 ? 4 : 1.1) })
      }}
      style={{ transform: props.xys.interpolate(trans) }}
    >
      <Room />
    </animated.div>
  )
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
    <Poster />
    <OtherShelves />
    <Window />
    <TV />
    <Shelves />
    <StudyTable />
    <Sofa />
    <Table />
    <Laptop />
  </div>
);

export default Isometric;
