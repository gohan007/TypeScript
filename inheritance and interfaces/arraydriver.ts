import { Shape } from "./shape";
import { Rectangle } from "./rectangle";
import { Circle } from "./circle";

let MyShape=new Shape(10,15);

let MyCircle=new Circle(20,30,40);

let MyRectangle=new Rectangle(10,20,30,40);

let Shapes:Shape[]=[];

Shapes.push(MyShape);
Shapes.push(MyCircle);
Shapes.push(MyRectangle);

for(let shape of Shapes){
    console.log(shape.getInfo());
}
