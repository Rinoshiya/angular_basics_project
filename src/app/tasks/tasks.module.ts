import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        TasksComponent,
        NewTaskComponent,
        TaskComponent,
        NewTaskComponent
    ],
    exports: [TasksComponent],// used in appcomp that is declared in app module
    imports: [CommonModule,SharedModule, FormsModule] // is cannot  get a component add here to access,
    // common module for using datepipe which consist it.
})

export class TaskModule {}