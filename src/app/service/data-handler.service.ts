import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  getCategories(): Category[] {
    return TestData.categories;
  }

  getTasks(): Task[] {
    return TestData.tasks;
  }

  // tslint:disable-next-line:typedef
  getTasksByCategory(category: Category) {
    const tasksByCategory = TestData.tasks.filter(task => task.category === category);
    console.log('taskByCategory: ' + JSON.stringify(tasksByCategory));
    // tasksByCategory.forEach(value => console.log(value.id + ' ' + value.title + ' ' + value.date));
    return tasksByCategory;
  }
}
