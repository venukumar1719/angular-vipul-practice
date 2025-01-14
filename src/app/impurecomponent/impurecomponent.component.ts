import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArray',
  pure: false, // Marking as impure
})

export class ImpurecomponentComponent implements PipeTransform  {
transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    return items.filter(item =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
}

}
