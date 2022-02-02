// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export class Size {
    constructor(width = 80, height = 60) {
        this.width = width
        this.height = height
    }

    resize(newWidth, newHeight) {
        this.width = newWidth
        this.height = newHeight
    }
}


export class Position {
    constructor(x = 0, y = 0) {
        this.x = x
        this.y = y
    }

    move(newX, newY) {
        this.x = newX
        this.y = newY
    }
}

export class ProgramWindow {
    screenSize = new Size(800, 600)
    size = new Size
    position = new Position
}