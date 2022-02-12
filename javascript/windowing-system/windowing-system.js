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
    size = new Size()
    position = new Position()

    resize(newSize) {
        let width = newSize.width <= 0 ? 1 
        : (newSize.width + this.position.x <= this.screenSize.width) 
        ? newSize.width 
        : this.screenSize.width - this.position.x;

        let height = newSize.height <= 0 ? 1 
        : (newSize.height + this.position.y <= this.screenSize.height) 
        ? newSize.height 
        : this.screenSize.height - this.position.y;
        
            this.size.resize(width, height);
    }

    move(newPosition) {
        let x = newPosition.x < 1 ? 0 
        : (newPosition.x + this.size.width <= this.screenSize.width) 
        ? newPosition.x 
        : this.screenSize.width - this.size.width;

        let y = newPosition.y < 1 ? 0 
        : (newPosition.y + this.size.height <= this.screenSize.height) 
        ? newPosition.y 
        : this.screenSize.height - this.size.height;


            this.position.move(x, y);
    }
}

export function changeWindow(programWindow) {
    programWindow.size.resize(400, 300);
    programWindow.position.move(100,150);
    return programWindow;
}