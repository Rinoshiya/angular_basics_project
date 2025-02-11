import { Component, Input } from '@angular/core';
// import { AppComponent } from '../app.component';
// import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
// import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  // standalone: true,
  // imports: [TaskComponent,NgFor,NgIf,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
 
})
export class TasksComponent {
  // @Input() name? :string // ? optional var declaration
  @Input() name :string | undefined // union declaration
  @Input({required: true}) id!: string;
  public onTaskClicked : boolean = false;
  constructor(private taskService:TaskService) {}
 
  get selectedUserTask() {
    // return this.tasks.filter((task) => task.userId === userId);
    return this.taskService.getUserTask(this.id)

  }
  
  onAddingTask() {
    this.onTaskClicked = true;
  }
 
  // using service

  // onComplete(id:string) {
    // this.tasks = this.tasks.filter((task)=> task.id !== id);
  // }
   // closedialogDrop() {
  //   this.onTaskClicked = false;
  // }
  // onAddTask() {
  //   this.taskService.onAddTask(id)
  // }
  
  oncloseAddTask() {
    this.onTaskClicked = false;
  }
  
}
