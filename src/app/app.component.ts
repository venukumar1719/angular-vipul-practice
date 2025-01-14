
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'; 
import { DateFormatPipe } from './date-format.pipe';
import { UppercasePipe } from './uppercase.pipe';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [ CommonModule, FormsModule,DateFormatPipe,UppercasePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected typo
})


export class AppComponent implements OnInit {
  currentClasses: Record<string, boolean> = {};
  currentStyles:Record<string, string> = {};
  canSave = false; 
  isUnchanged = true; 
  isSpecial = false; 
  dateValue = '11/11/2025'
  items = ['Apple', 'Banana', 'Orange', 'Grapes'];
  searchText = 'Apple';

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  setCurrentClasses(): void {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

  setCurrentStyles(): void{
    this.currentStyles ={
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '25px' : '25px',
    }
  }
}
