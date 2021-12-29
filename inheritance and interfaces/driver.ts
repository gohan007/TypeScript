import { Shape } from "./shape";
import { Rectangle } from "./rectangle";
import { Circle } from "./circle";

let MyShape=new Shape(10,15);
console.log(MyShape.getInfo());

let MyCircle=new Circle(20,30,40);
console.log(MyCircle.getInfo());

let MyRectangle=new Rectangle(10,20,30,40);
console.log(MyRectangle.getInfo());
