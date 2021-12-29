import { Shape } from "./shape";

export class Circle extends Shape{
    
    constructor( x:number , y:number , private _radius: number){
        super(x , y);
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    getInfo(): string {
        return `${super.getInfo()} radius=${this.radius}`;
    }
    calculateArea(): number {
        return 3.14*this.radius*this.radius;
    }
}