import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from "./todo";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  url: string = "http://localhost:3000/Todo"

  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(this.url + "/" + id);
  }

  removeTodo(id: number): Observable<Todo> {
    return this.http.delete<Todo>(this.url + "/" + id);
  }

  editTodo(todo: Todo): Observable<Todo>{
    return this.http.put<Todo>(this.url + "/" + todo.id, todo);
  }

  constructor(private http: HttpClient) { }
}
