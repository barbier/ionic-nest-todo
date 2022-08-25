import { Injectable } from "@angular/core";
import { Http, HttpResponse } from "@capacitor-community/http"
export interface Todo {
  id?: number;
  title: string;
  completed: boolean;
}
@Injectable({
  providedIn: "root"
})
export class TodoService {
  private resourceUrl = "http://localhost:4000/todos"

  constructor(){}

  create(todo: Todo): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceUrl}`,
      data: todo,
      headers: { "Content-Type": "application/json" }
    };

    return Http.post(options);
  }

  update(todo: Todo): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceUrl}/${todo.id}`,
      data: todo,
      headers: { "Content-Type": "application/json" }
    };

    return Http.put(options);
  }

  findAll(): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceUrl}`,
      headers: { "Content-Type": "application/json" }
    };

    return Http.get(options);
  }

  find(todo: Todo): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceUrl}`,
      data: todo,
      headers: { "Content-Type": "application/json" }
    };

    return Http.get(options);
  }

  delete(id: number): Promise<HttpResponse> {
    const options = {
      url: `${this.resourceUrl}/${id}`,
      headers: { "Content-Type": "application/json" }
    };

    return Http.del(options);
  }
}
