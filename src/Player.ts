class Player {
  x: number;
  y: number;

  direction: number;
  paces: number = 0;

  constructor(x: number, y: number, direction: number) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  rotate(angle: number) {
    this.direction = (this.direction + angle + CIRCLE) % (CIRCLE);
  }

  walk(distance: number, map: GMap) {
    var dx = Math.cos(this.direction) * distance;
    var dy = Math.sin(this.direction) * distance;

    if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
    if (map.get(this.x, this.y + dy) <= 0) this.y += dy;

    this.paces += distance;
  }

  strafe(distance: number, map: GMap) {
    var dx = Math.sin(this.direction) * distance;
    var dy = Math.cos(this.direction) * distance;

    if (map.get(this.x + dx, this.y) <= 0) this.x += dx;
    if (map.get(this.x, this.y + dy) <= 0) this.y += dy;

    this.paces += distance;
  }

  update(keyboard, map, delta) {
    if (keyboard.keys[Keys.Left]) this.rotate(-Math.PI * delta);
    if (keyboard.keys[Keys.Right]) this.rotate(Math.PI * delta);

    if (keyboard.keys[Keys.Up]) this.walk(3 * delta, map);
    if (keyboard.keys[Keys.Down]) this.walk(-3 * delta, map);

    // TODO
    // Strafing, needs mouse movements
  }
}
