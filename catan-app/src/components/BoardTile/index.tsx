import React from "react";

export interface BoardTileProps {
  id: string;
}

const BoardTile: React.FC<BoardTileProps> = ({ id }: BoardTileProps) => {
  console.log(id);

  return (
    <svg style={{ margin: "-5px" }} width="175" height="200">
      <polyline
        points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"
        fill="red"
      />
      <line x1="87" y1="0" x2="174" y2="50" stroke="blue" stroke-width="5" />
      <line
        x1="172"
        y1="50"
        x2="172"
        y2="150"
        stroke="blue"
        stroke-width="10"
      />
      <line x1="174" y1="150" x2="87" y2="200" stroke="blue" stroke-width="5" />
      <line x1="87" y1="200" x2="0" y2="150" stroke="blue" stroke-width="5" />
      <line x1="2" y1="150" x2="2" y2="50" stroke="blue" stroke-width="10" />
      <line x1="0" y1="50" x2="87" y2="0" stroke="blue" stroke-width="5" />
      <line x1="87" y1="50" x2="87" y2="50" stroke="blue" stroke-width="5" />
    </svg>
  );
};

export default BoardTile;
