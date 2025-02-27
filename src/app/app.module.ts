import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from "./shared/card/card.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { TaskComponent } from "./tasks/task/task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/tasks.module";


@NgModule({
    declarations: [
        AppComponent, 
        HeaderComponent, 
        UserComponent, 
       
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, SharedModule,TaskModule]
})
export class appModule {

}