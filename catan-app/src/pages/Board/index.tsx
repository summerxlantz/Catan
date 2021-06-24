import React from "react";
import BoardRow from "../../components/BoardRow";

const boardStyle = {
  width: "55%",
  margin: "auto",
};

const Board: React.FC = () => (
  <div style={boardStyle}>
    <BoardRow id={1} transform="translateY(0)" tileCount={3} />
    <BoardRow id={2} transform="translateY(-25%)" tileCount={4} />
    <BoardRow id={3} transform="translateY(-50%)" tileCount={5} />
    <BoardRow id={4} transform="translateY(-75%)" tileCount={4} />
    <BoardRow id={5} transform="translateY(-100%)" tileCount={3} />
  </div>
);

export default Board;
