import { Injectable } from '@angular/core';
import { type newTaskData } from './task/task.model'
@Injectable({providedIn: 'root'})
export class TaskService {
    private tasks = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
      ];
    getUserTask(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    }  
    constructor() {
        const task = localStorage.getItem('tasks');
        if(task) {
            this.tasks = JSON.parse(task);
        }
    } 
    onAddTask(taskData : newTaskData, userId:string) {
        this.tasks.push({
          id: new Date().getTime().toString(),
          title: taskData.title,
          summary: taskData.summary,
          dueDate: taskData.date,
          userId: userId
        });
        this.saveTask();
    }
    removeTask(userId:string) {
        this.tasks = this.tasks.filter((task)=> task.id !== userId);
        this.saveTask();
    }
    private saveTask() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}