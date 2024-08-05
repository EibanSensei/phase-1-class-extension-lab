class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length
      }

    get perimeter() {
        return this.sides.reduce((a, b) => a + b, 0)
      }
}

class Triangle extends Polygon {
    // Method to check if the triangle is valid
    get isValid() {
        if (this.countSides !== 3) return false;
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    }
}

class Square extends Polygon {
    // Method to check if the square is valid
    get isValid() {
        if (this.countSides !== 4) return false;
        const [a, b, c, d] = this.sides;
        return a === b && b === c && c === d;
    }

    // Getter method to calculate the area
    get area() {
        if (this.isValid) {
            return this.sides[0] ** 2;
        }
        return undefined; // Return undefined if the square is not valid
    }
}