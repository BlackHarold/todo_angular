import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);

  constructor() {
    this.fillTasks();
  }

  getCategories(): Category[] {
    return TestData.categories;
  }

  // tslint:disable-next-line:typedef
  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }

  // tslint:disable-next-line:typedef
  fillTasksByCategory(category: Category) {
    const tasksByCategory = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasksByCategory);
  }
}
