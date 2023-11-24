import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TodoDataService } from '../../services/todo-data/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  private todoData = inject(TodoDataService);
  todos$ = this.todoData.todos$;
}
