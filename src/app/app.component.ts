import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arr = [];
  valueString: string;
  count = 0;
  CountTrue = 0;
  CountFalse = 0;
  AddTodo() {
    if (this.valueString) {
      this.arr.unshift(this.valueString);
      this.count++;
      this.valueString = '';
    }
  }
  deleteData(event) {
    const index = this.arr.findIndex(item => item === event);
    this.arr.splice(index, 1);
    if (!this.CountTrue) {
        this.count = this.arr.length;
    }
    this.count--;
  }
  editState(event) {
    if (event) {
      this.count--;
      this.CountTrue++;
    } else {
      this.count++;
      this.CountFalse++;
    }
  }
}
