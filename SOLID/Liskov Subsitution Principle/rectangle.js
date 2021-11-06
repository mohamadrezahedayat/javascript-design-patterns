class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }

  toString() {
    return `${this.width} X ${this.height}`;
  }
}
module.exports = Rectangle;
