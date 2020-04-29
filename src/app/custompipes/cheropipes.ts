import {Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'CustomHero' })
export class cheropipes implements PipeTransform{

    transform(value: string, id: number): string
    {
        return `${value} # ${id.toString()}`
    }

}