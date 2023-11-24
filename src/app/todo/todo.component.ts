import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  Status,
  Todo,
  TodoDataService,
  statuses,
} from './services/todo-data/todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  private fb = inject(FormBuilder);
  private todoData = inject(TodoDataService);

  todoForm = this.fb.group({
    title: this.fb.control('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    description: this.fb.control(''),
    status: this.fb.control<Status>('created', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    tags: this.fb.control<string[]>([], {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  tagControl = this.fb.control('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  statuses = statuses;

  handleTodoSubmit() {
    if (this.todoForm.valid) {
      console.log(this.todoForm.value);
      this.todoData.addTodo(this.todoForm.value as Todo);
      this.todoForm.reset();
    }
  }

  handleStatusSelect(status: Status) {
    this.todoForm.controls.status.patchValue(status);
  }

  addTag(ev: Event) {
    ev.preventDefault();
    if (this.tagControl.valid) {
      if (!this.todoForm.controls.tags.value.includes(this.tagControl.value))
        this.todoForm.controls.tags.patchValue([
          ...this.todoForm.controls.tags.value,
          this.tagControl.value,
        ]);

      this.tagControl.reset('');
    }
  }

  removeTag(tag: string) {
    this.todoForm.controls.tags.patchValue([
      ...this.todoForm.controls.tags.value.filter((data) => data !== tag),
    ]);
  }
}
