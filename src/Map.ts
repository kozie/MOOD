class GMap {
  size: int;

  wallGrid: Uint8Array;

  constructor(size: int) {
    this.size = size;
    this.wallGrid = new Uint8Array(size * size);
  }
}
