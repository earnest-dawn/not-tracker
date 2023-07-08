const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should render a triangle SVG string with the given color', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        );
    });
});

describe('Circle', () => {
    test('should render a circle SVG string with the given color', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="100" r="80" fill="red" />'
        );
    });
});

describe('Square', () => {
    test('should render a square SVG string with the given color', () => {
        const shape = new Square();
        shape.setColor('green');
        expect(shape.render()).toEqual(
            '<rect x="56" y="56" width="188" height="188" fill="green" />'
        );
    });
});
