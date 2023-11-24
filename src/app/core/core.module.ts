import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoModule } from '../todo/todo.module';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const MatModules = [MatIconModule];

@NgModule({
  declarations: [CoreComponent, NavbarComponent, SearchBoxComponent, SideNavComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatModules,
    ReactiveFormsModule,
    TodoModule,
  ],
})
export class CoreModule {}
