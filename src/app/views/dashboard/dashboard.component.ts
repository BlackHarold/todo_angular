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

  // the method calls automatically after initialising component
  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(value => this.tasks = value);
  }

}
