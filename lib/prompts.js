const inq = require("inquirer");

class Question{
    constructor(typeString, nameString, messageString){
        this.type = typeString;
        this.name = nameString;
        this.message = messageString;
    }
}

class ShortAnswer extends Question {
    constructor(typeString, nameString, messageString, maxLenghtInt){
        super(typeString, nameString, messageString);
        this.validate = (value) => {
            if (value.length > maxLenghtInt){
                return `Please enter ${maxLenghtInt} or less characters.`
            }
            return true;
        }
    }
}

class MultipleChoice extends Question {
    constructor(typeString, nameString, messageString, defaultString, choicesArray){
        super(typeString, nameString, messageString);
        this.default = defaultString;
        this.choices = choicesArray;
    }
}

const shapeChoices = ["Square", "Circle", "Triangle"];

const questions = [];
questions.push(new ShortAnswer("input","text","Please enter up to 3 characters: ", 3));
questions.push(new Question("input","textColor","What color do you want the text? "));
questions.push(new MultipleChoice("list","shape","Please choose one of the following shapes",shapeChoices[0],shapeChoices));
questions.push(new Question("input","shapeColor","What color do you want the shape? "));

function askPrompts() {
    inq.prompt(questions)
        .then((data) => {
            console.log(data);
            return data;
        })
}



module.exports = askPrompts();