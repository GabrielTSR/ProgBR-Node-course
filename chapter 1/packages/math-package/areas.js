module.exports = {
    squareArea: (side) => side * 4,
    rectangleArea: (base, height) => base * height,
    triangleArea: (base, height) => (base * height) / 2,

    circleArea: (radius) => {
        const pi = 3.1416;

        return pi * radius * radius;
    },
};
