import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name :"codigoAscii"
})

export class codigoAscciPipe implements PipeTransform{
    transform(value: string) {
        let resultado = "";
        for(let i = 0; i <value.length; i++){
             resultado += value.charCodeAt(i).toString() + "-";
        }
        return resultado;
    }
}