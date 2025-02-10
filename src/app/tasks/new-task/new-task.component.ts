import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newTaskData } from '../task/task.model'
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  @Input({required: true}) userId!:string
  // @Output() closedialog = new EventEmitter<void>();
  // using service
  @Output() close = new EventEmitter<void>();
  // @Output() addData = new EventEmitter<newTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private taskService = inject(TaskService);
  // with signals
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');
  onCloseDialog() {
    this.close.emit();
  }
  onSubmit() {
    // this.addData.emit({
    //   title:this.enteredTitle,
    //   summary:this.enteredSummary,
    //   date:this.enteredDate
    // })
    // using service
    this.close.emit();
    this.taskService.onAddTask(
      {
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    },this.userId
  );
  }
}
