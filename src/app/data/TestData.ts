import {Category} from '../model/Category';
import {Priority} from '../model/Priority';
import {Task} from '../model/Task';

export class TestData {
  static categories: Category[] = [
    {id: 1, title: 'Работа'},
    {id: 2, title: 'Самья'},
    {id: 3, title: 'Учеба'},
    {id: 4, title: 'Отдых'},
    {id: 5, title: 'Спорт'},
    {id: 6, title: 'Еда'},
    {id: 7, title: 'Финансы'},
    {id: 8, title: 'Гаджеты'},
    {id: 9, title: 'Здоровье'},
    {id: 10, title: 'Автомобиль'},
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Низкий', color: '#fff371'},
    {id: 2, title: 'Средний', color: '#ff8b5e'},
    {id: 3, title: 'Высокий', color: '#fc5656'},
    {id: 4, title: 'Наивысший', color: '#ff1616'},
  ];

  static tasks: Task[] = [
    {
      id: 1,
      title: 'Заправить автомобиль бензином',
      completed: false,
      priority: TestData.priorities[1],
      category: TestData.categories[9],
      date: new Date('2021-04-10'),
    },
    {
      id: 2,
      title: 'Доделать отчет 15-31',
      completed: true,
      priority: TestData.priorities[2],
      category: TestData.categories[0],
      date: new Date('2021-04-11'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: true,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
    {
      id: 3,
      title: 'Купить жене цветы',
      completed: false,
      priority: TestData.priorities[3],
      category: TestData.categories[1],
      date: new Date('2021-04-09'),
    },
  ];
}
