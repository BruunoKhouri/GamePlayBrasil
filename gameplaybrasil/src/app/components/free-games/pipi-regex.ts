import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'regex'
})
export class RegexPipe implements PipeTransform {
    transform(value: string, pattern: string, flags?: string): any {
        const regex = new RegExp(pattern, flags);
        console.log('va', value, pattern, flags)
        return regex.test(value);
    }
}