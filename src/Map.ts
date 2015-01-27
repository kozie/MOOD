class GMap {
  size: int;

  wallGrid: UInt8Array;

  constructor(size: int) {
    this.size = size;
    this.wallGrid = new UInt8Array(size * size);
  }
}
