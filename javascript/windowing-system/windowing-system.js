// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
  constructor(width = 80, height = 60) {
    this.height = height;
    this.width = width;
  }

  resize(newWidth, newHeight) {
    this.height = newHeight;
    this.width = newWidth;
  }
}

export class Position {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  move(newX, newY) {
    this.x = newX;
    this.y = newY;
  }
}

export class ProgramWindow extends Size {
  constructor(width = 80, height = 60) {
    super(width, height);
  }

  screenSize = new Size(800, 600);
  size = new Size();
  position = new Position();
}
