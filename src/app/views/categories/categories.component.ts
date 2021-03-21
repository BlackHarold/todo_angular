import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) {
  }

  // метод вызывается автоматически после инициализации компонента
  ngOnInit() {
    // this.dataHandlerr.categoriesSubject.subscribe(categories => this.categories = categories);
    this.dataHandler.getAllCategories().subscribe(values => this.categories = values);
  }


  showTasksByCategory(category: Category) {
    // this.selectedCategory = category;
    // this.dataHandler.fillTasksByCategory(category);
  }
}
