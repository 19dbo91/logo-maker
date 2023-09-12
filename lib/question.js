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
module.exports = {Question, ShortAnswer, MultipleChoice};