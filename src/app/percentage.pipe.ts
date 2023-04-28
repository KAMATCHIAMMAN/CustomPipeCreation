import {Pipe, PipeTransform}from "@angular/core";

@Pipe({
    name:'percentage'
})
export class Percentagepipe implements PipeTransform{
    transform(value: any, totalmarks: number,decimal:number) {
        return (value/totalmarks)*100.toFixed(decimal);
    }
}