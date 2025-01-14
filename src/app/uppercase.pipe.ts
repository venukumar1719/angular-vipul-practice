import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase',
  pure: true
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string{
    return value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : '';
  }
}
