import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: "cambiaLetras"
})

export class cambiarLetrasPipe implements PipeTransform {
    transform(value: string) {
        return value.replaceAll("e", "3").replaceAll("i", "1")
    }
}

