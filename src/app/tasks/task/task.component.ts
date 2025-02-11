import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
// import { TasksComponent } from '../tasks.component';
import { type Task } from './task.model';
// import { CardComponent } from '../../shared/card/card.component';
// import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [TasksComponent,CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: Task;
  // use service instead
  // @Output() complete= new EventEmitter<string>();
  private taskService = inject(TaskService) ;
  onSelectedTask() {
    // using service
    this.taskService.removeTask(this.task.id);

    // this.complete.emit(this.task.id);
  }
}
