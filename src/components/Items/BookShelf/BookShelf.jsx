import * as React from "react";
import Shelf from "./Shelf";
import Book1 from "../../../images/book1.jpg";
import Book2 from "../../../images/book2.jpg";
import Book3 from "../../../images/book3.jpg";
import Book4 from "../../../images/book4.jpg";
import Book5 from "../../../images/book5.jpg";
import Book6 from "../../../images/book6.jpg";
import Book7 from "../../../images/book7.jpg";
import Book8 from "../../../images/book8.jpg";
import Book9 from "../../../images/book9.jpg";
import Book10 from "../../../images/book10.jpg";
import Book11 from "../../../images/book11.jpg";
import Book12 from "../../../images/book12.jpg";
import Book13 from "../../../images/book13.jpg";
import Book14 from "../../../images/book14.jpg";
import Book15 from "../../../images/book15.jpg";
import { vres } from "../../../mixin";
import Book from "./Book";
import styled from "styled-components";

const BookHolder = styled.div`
  position: absolute;
`;

const books = [
  {
    de: "boook1",
    image: Book1,
    left: 18.95,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#dab51d",
  },
  {
    de: "boook2",
    image: Book2,
    left: 19.2,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "black",
  },
  {
    de: "boook3",
    image: Book3,
    left: 19.45,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "rgb(167, 238, 178)",
  },
  {
    de: "boook4",
    image: Book4,
    left: 19.65,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "grey",
  },
  {
    de: "boook5",
    image: Book5,
    left: 19.85,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#114f9a",
  },
  {
    de: "boook6",
    image: Book6,
    left: 20.05,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#eb325b",
  },
  {
    de: "boook7",
    image: Book7,
    left: 20.25,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#1a1a1a",
  },
  {
    de: "boook8",
    image: Book8,
    left: 20.45,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#90485c",
  },
  {
    de: "boook9",
    image: Book9,
    left: 20.7,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#cad6e6",
  },
  {
    id: "book10",
    image: Book10,
    left: 20.9,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#da5652",
  },
  {
    id: "book11",
    image: Book11,
    left: 21.1,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#4a6183",
  },
  {
    id: "book12",
    image: Book12,
    left: 21.3,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#bc5e90",
  },
  {
    id: "book13",
    image: Book13,
    left: 21.5,
    transform: `translateZ(${vres(5.22)}) rotateY(2deg) rotateZ(10deg)`,
    color: "#51aab8",
  },
  {
    id: "book14",
    image: Book14,
    left: 23.75,
    transform: `translateZ(${vres(5.22)}) rotateY(-90deg)`,
    color: "#28496a",
  },
  {
    id: "book15",
    image: Book15,
    left: 23.75,
    transform: `translateZ(${vres(5.36)}) rotateY(-90deg);`,
    color: "#353535",
  },
];

const BookShelf = () => (
  <>
    <Shelf />
    <BookHolder>
      {books.map(book => (
        <Book {...book} />
      ))}
    </BookHolder>
  </>
);

export default BookShelf;
