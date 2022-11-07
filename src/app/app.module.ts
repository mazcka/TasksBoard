import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HeaderComponent } from './header/header.component';
import { TaskItemComponent } from './board/task-item/task-item.component';
import { TasksListComponent } from './board/tasks-list/tasks-list.component';
import { StoreModule } from '@ngrx/store';
import { tasksReducer, TasksStateFeatureKey } from './state/tasks.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    NavigationBarComponent,
    HeaderComponent,
    TaskItemComponent,
    TasksListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forFeature(TasksStateFeatureKey, tasksReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
