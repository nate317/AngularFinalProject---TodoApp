import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoDataService } from '../todo-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  newTodo: Todo = new Todo();

  addTodo() {
    this.todoDataService.addTodo(this.newTodo).subscribe(t => this.router.navigate(["list"]));
  }

  constructor(private todoDataService: TodoDataService, private router: Router) { }


  ngOnInit() {
  }

}
