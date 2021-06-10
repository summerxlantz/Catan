import React from "react";
import BoardRow from "../../components/BoardRow";

const boardStyle = {
  width: "55%",
  margin: "auto",
};

const Board: React.FC = () => (
  <div style={boardStyle}>
    <BoardRow id={1} transform="translate(180px, 100px)" tileCount={3} />
    <BoardRow id={2} transform="translate(90px, 50px)" tileCount={4} />
    <BoardRow id={3} tileCount={5} />
    <BoardRow id={4} transform="translate(90px, -50px)" tileCount={4} />
    <BoardRow id={5} transform="translate(180px, -100px)" tileCount={3} />
  </div>
);

export default Board;
