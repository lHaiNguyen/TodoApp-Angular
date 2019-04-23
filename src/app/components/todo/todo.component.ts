import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() name: string;
  @Output() delete = new EventEmitter();
  @Output() done = new EventEmitter();
  showButton: boolean;
  completed: boolean;
  isDone = false;

  constructor() { }

  ngOnInit() {
  }
  onClassOut() {
    this.showButton = false;
  }
  onClassOver() {
    this.showButton = true;
  }
  deleteData() {
    this.delete.emit(this.name);
  }
  changeState(val) {
    this.isDone = !this.isDone;
    this.done.emit(this.isDone);
  }
}
