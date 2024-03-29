const inquirer = require("inquirer");
const {Question, ShortAnswer, MultipleChoice} = require("./question");
const {Square, Circle, Triangle} = require("./shapes");
const writeToFile = require("./file")
const outputFilePath = 'output.svg';

const shapeChoices = ["Square", "Circle", "Triangle"];

const questions = [];
questions.push(
    new ShortAnswer(
        "input",
        "text",
        "Please enter up to 3 characters: ",
        3
    )
);
questions.push(
    new Question(
        "input",
        "textColor",
        "What color do you want the text? "
    )
);
questions.push(
    new MultipleChoice(
        "list",
        "shape",
        "Please choose one of the following shapes",
        shapeChoices[0],
        shapeChoices
    )
);
questions.push(
    new Question(
        "input",
        "shapeColor",
        "What color do you want the shape? "
    )
);

function askPrompts() {
    inquirer.prompt(questions)
        .then((response) => {
            let { text, textColor, shape, shapeColor} = response;
            console.log (text, textColor, shape, shapeColor);

            text = text.trim();
            textColor = textColor.trim().toLowerCase();
            shapeColor = shapeColor.trim().toLowerCase();
            const standard = {
                height: 200,
                width: 300,
            }

            let newShape = null;

            switch (shape){
                case "Square":
                    newShape = new Square(
                        standard.width,
                        standard.height,
                        shapeColor,
                        text,
                        textColor
                    );
                    break;
                case "Circle":
                    newShape = new Circle(
                        standard.width,
                        standard.height,
                        shapeColor,
                        text,
                        textColor
                    );
                    break;
                case "Triangle":
                    newShape = new Triangle(
                        standard.width,
                        standard.height,
                        shapeColor,
                        text,
                        textColor
                    );
                    break;
                default:
                    console.log("Error occured")
                    process.exit(0);
            }
            const data = newShape.toString();
            console.log(data);
            writeToFile(outputFilePath, data)
        });
}


module.exports = askPrompts;