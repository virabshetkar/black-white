import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const MatModules = [MatIconModule, MatMenuModule];

@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [CommonModule, ReactiveFormsModule, MatModules],
})
export class TodoModule {}
