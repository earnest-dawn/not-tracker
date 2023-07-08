class Shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        // Abstract render method to be implemented by child classes
        throw new Error('Render method must be implemented');
    }
}

class Triangle extends Shape {
    render() {
        const { color } = this;
        return `<polygon points="150, 18 244, 182 56, 182" fill="${color}" />`;
    }
}

class Circle extends Shape {
    render() {
        const { color } = this;
        return `<circle cx="150" cy="100" r="80" fill="${color}" />`;
    }
}

class Square extends Shape {
    render() {
        const { color } = this;
        return `<rect x="56" y="56" width="188" height="188" fill="${color}" />`;
    }
}

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
};
