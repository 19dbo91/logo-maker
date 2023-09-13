//TODO: Create a class for shape
class Shape {
    constructor(width, height, colorShape, text, colorText){
        this.width = width;
        this.height = height;
        this.fill = colorShape;
        this.text = text;
        this.textColor = colorText
        this.stringStart = `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.height}">`
        this.stringEnd= "</svg>"
    }
    toString(){
    }
}
//TODO: Extend that to square, circle, triangle

class Square extends Shape {
    constructor(width, height, colorShape, text, colorText){
        super(width, height, colorShape, text, colorText);
        this.tagName = "rect";
        this.color = colorShape;
        this.textSVG = `<text x="25" y="125" font-size="100" fill="${this.textColor}">${this.text}</text>`
    }
    toString(){
        return `${this.stringStart}<${this.tagName} fill="${this.fill}" width="200" height="200" />${this.textSVG}${this.stringEnd}`
    }
}



class Circle extends Shape {
    constructor(width, height, colorShape, text, colorText){
        super(width, height, colorShape, text, colorText);
        this.tagName = "circle";
        this.cx = 100;
        this.cy = 100;
        this.r = 100;
        this.textSVG = `<text x="25" y="125" font-size="100" fill="${this.textColor}">${this.text}</text>`
    }
    toString(){
        return `${this.stringStart}<${this.tagName} fill="${this.fill}" cx="${this.cx}" cy="${this.cy}" r="${this.r}"/>${this.textSVG}${this.stringEnd}`
    }
}



class Triangle extends Shape {
    constructor(width, height, colorShape, text, colorText){
        super(width, height, colorShape, text, colorText);
        this.tagName = "polygon";
        this.textSVG = `<text x="65" y="150" font-size="100" fill="${this.textColor}">${this.text}</text>`
    }
    toString(){
        return `${this.stringStart}<${this.tagName} fill="${this.fill}" points="0,200 150,0 300,200"/>${this.textSVG}${this.stringEnd}`
    }
}


module.exports = {Square, Circle, Triangle};