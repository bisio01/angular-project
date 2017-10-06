import { Component, OnInit } from '@angular/core';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public moneyTaskList;

  constructor(public userManagerService: UserManagerService) {
    userManagerService.getList().then((res: any[]) => {
      this.moneyTaskList = res;
    });


  }

  ngOnInit() {
  }

}
