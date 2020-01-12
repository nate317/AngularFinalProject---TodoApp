import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Todo } from '../todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[];

  getTodos(): void {
    this.todoDataService.getTodos().subscribe(t => (this.todos = t));
  }

  removeTodo(id: number): void {
    this.todoDataService.removeTodo(id).subscribe(t => this.getTodos());
  }



  constructor(private todoDataService: TodoDataService) { }

  ngOnInit() {
    this.getTodos();
  }

}
