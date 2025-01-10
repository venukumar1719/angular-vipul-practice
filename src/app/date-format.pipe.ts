import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date, format: string = 'MM/dd/yyyy'): string {
    if (!value) return '';
    const date = new Date(value);
    const options: Intl.DateTimeFormatOptions = {};
    if (format.includes('MM')) options.month = '2-digit';
    if (format.includes('dd')) options.day = '2-digit';
    if (format.includes('yyyy')) options.year = 'numeric';
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
}
