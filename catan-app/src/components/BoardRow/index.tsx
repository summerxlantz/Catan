import React from "react";
import BoardTile from "../BoardTile";

export interface BoardRowProps {
  id: number;
  transform?: string;
  tileCount: number;
}

const BoardRow: React.FC<BoardRowProps> = ({
  transform,
  tileCount,
  id,
}: BoardRowProps) => {
  const style = {
    transform,
  };
  const tiles = [];

  for (let n = 0; n < tileCount; n++) {
    tiles.push(<BoardTile id={`${id}-${n + 1}`} />);
  }

  return <div style={style}>{tiles}</div>;
};

export default BoardRow;
