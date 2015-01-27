class GMap {
  size: int;

  wallGrid: Uint8Array;

  constructor(size: int) {
    this.size = size;
    this.wallGrid = new UInt8Array(size * size);
  }
}
