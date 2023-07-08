const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

function promptUserInput() {
    return inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to three characters:',
            validate: (input) => {
                return input.length <= 3;
            },
        },
        {
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
        },
    ]);
}

function createSVGFile(shape, textColor, shapeColor, text) {
    const shapeInstance = createShapeInstance(shape);
    shapeInstance.setColor(shapeColor);

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    <style>
      text {
        fill: ${textColor};
        font-family: Arial, sans-serif;
        font-size: 48px;
        text-anchor: middle;
        dominant-baseline: central;
      }
    </style>
    ${shapeInstance.render()}
    <text x="150" y="100">${text}</text>
  </svg>`;

    fs.writeFileSync('logo.svg', svg);
    console.log('Generated logo.svg');
}

function createShapeInstance(shape) {
    switch (shape) {
        case 'circle':
            return new Circle();
        case 'triangle':
            return new Triangle();
        case 'square':
            return new Square();
        default:
            throw new Error('Invalid shape');
    }
}

async function run() {
    const userInput = await promptUserInput();
    const { text, textColor, shape, shapeColor } = userInput;
    createSVGFile(shape, textColor, shapeColor, text);
}

run();
