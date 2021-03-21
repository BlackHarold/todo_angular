import {Component, OnInit} from '@angular/core';
import {Task} from '../../model/Task';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: Task[];

  constructor(private dataHandler: DataHandlerService) {
  }

  // the method calls automatucaly after initialising component
  ngOnInit(): void {
    this.tasks = this.dataHandler.getTasks();
    console.log('tasks: ' + this.tasks);
  }

}
