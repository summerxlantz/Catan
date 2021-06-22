export interface Tile {
  id: number;
  roads: boolean[];
}

export type TileMap = Map<number, Tile>;

export interface BoardState {
  tiles: TileMap;
}

const boardState: BoardState = {
  tiles: new Map<number, Tile>(),
};

boardState.tiles.set(1, { id: 1, roads: [true, false, false, false, false, false]});

export function getTile(id: number): Tile {
  const tile = boardState.tiles.get(id);

  if (!tile) {
    throw new Error(`Cannot find tile by id: ${id}`);
  }

  return tile;
}