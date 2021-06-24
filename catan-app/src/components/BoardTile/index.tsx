import React, { useState } from "react";
import { getTile } from '../../services/BoardState';

export interface BoardTileProps {
  id: string;
}

const BoardTile: React.FC<BoardTileProps> = ({ id }: BoardTileProps) => {
  const tile = getTile(1);
  console.log({tile});
  const [color, setColor] = useState('blue');
  console.log(id);

  function onSvgClick() {
    const nextColor = color === 'blue' ? 'red' : 'blue';
    
    setColor(nextColor);
  }

  return (
    <div className="hex-wrapper"> 
      <svg viewBox="0 0 176 200" onClick={onSvgClick}>
        <polyline
          points="87,0 174,50 174,150 87,200 0,150 0,50 87,0"
          fill={color}
        />
        <line x1="87" y1="0" x2="174" y2="50" stroke="blue" stroke-width="5" />
        <line
          x1="500"
          y1="50"
          x2="172"
          y2="150"
          stroke="white"
          stroke-width="10"
        />
          <line x1="87" y1="0" x2="174" y2="50" stroke="blue" stroke-width="5" />
          <line x1="174" y1="50" x2="174" y2="150" stroke="blue" stroke-width="5" />
          <line x1="174" y1="150" x2="87" y2="200" stroke="blue" stroke-width="5" />
          <line x1="87" y1="200" x2="0" y2="150" stroke="blue" stroke-width="5" />
          <line x1="0" y1="150" x2="0" y2="50" stroke="blue" stroke-width="10" />
          <line x1="0" y1="50" x2="87" y2="0" stroke="blue" stroke-width="5" />
          <line x1="87" y1="50" x2="87" y2="50" stroke="blue" stroke-width="5" />
      </svg>
  </div>
  )};

export default BoardTile;
