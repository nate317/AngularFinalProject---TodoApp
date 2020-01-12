import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../todo-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  editTodo: Todo = new Todo();

  saveTodo() {
    this.todoDataService.editTodo(this.editTodo).subscribe(t => this.router.navigate(["list"]));
  }

  constructor(private todoDataService: TodoDataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.todoDataService
      .getTodo(+param["id"])
      .subscribe(t => this.editTodo = t);
    });
  }

}
