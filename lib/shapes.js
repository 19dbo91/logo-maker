//TODO: Create a class for shape
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.fill = color;
        this.stringStart = `<svg width="${this.width}" height="${this.height}">`
        this.stringEnd= "</svg>"
    }
    toString(){
    }
}
//TODO: Extend that to square, circle, triangle

class Square extends Shape {
    constructor(width, height, color){
        super(width, height, color);
        this.tagName = "rect";
        this.color = color;
    }
    toString(){
        return `${this.stringStart}<${this.tagName} fill=${this.color} cx=${this.cx} cy=${this.cy}>${this.stringEnd}`
    }
}



class Circle extends Shape {
    constructor(width, height, color, centerX, centerY){
        super(width, height, color);
        this.tagName = "circle";
        this.cx = centerX;
        this.cy = centerY;
    }
    toString(){
        return `${this.stringStart}<${this.tagName} fill=${this.color} cx=${this.cx} cy=${this.cy}>${this.stringEnd}`
    }
}



class Triangle extends Shape {
    constructor(colorString){
        super(colorString);
        this.tagName = "polygon";
    }
    toString(){
        return `${this.stringStart}<${this.tagName} fill=${this.color} points=""${this.stringEnd}`
    }
}


module.exports = {Square, Circle, Triangle};