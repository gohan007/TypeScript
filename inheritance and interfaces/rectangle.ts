import { Shape } from "./shape";

export class Rectangle extends Shape{
    

    constructor( thisX:number , thisY:number , private _length: number,private _width: number){
        super(thisX,thisY);
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return `${super.getInfo()} length=${this.length} width=${this.width}`;
    }
}