import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

export const statuses = ['created', 'in-progress', 'done'] as const;

export type Status = (typeof statuses)[number];

export type Todo = {
  id: number;
  title: string;
  description?: string;
  status: Status;
  tags: string[];
};

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  private id = 1;
  private todos = new BehaviorSubject<Todo[]>([
    {
      id: 0,
      title: 'Todo One',
      tags: [],
      status: 'created',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, accusamus?',
    },
  ]);
  todos$ = this.todos.asObservable();

  addTodo(todo: Todo) {
    this.todos.next([...this.todos.getValue(), { ...todo, id: this.id++ }]);
  }
}
