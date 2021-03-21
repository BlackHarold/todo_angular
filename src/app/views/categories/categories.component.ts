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

  constructor(private dataHandler: DataHandlerService) {
  }

  // the method calls automatically after initialising component
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataHandler.categoriesSubject.subscribe(value => this.categories = value);
    console.log('categories: ' + this.categories);
  }

  // tslint:disable-next-line:typedef
  showTasksByCategory(category: Category) {
    this.dataHandler.fillTasksByCategory(category);
  }
}
