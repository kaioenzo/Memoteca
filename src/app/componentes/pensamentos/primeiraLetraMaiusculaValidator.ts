import { AbstractControl } from "@angular/forms";

export function primeiraLetraMaiusculaValidator(control: AbstractControl) {
    const texto = control.value as string;

    if(texto[0] === texto[0]?.toUpperCase()) {
        return null
    }
    return { maiuscula: true}
}