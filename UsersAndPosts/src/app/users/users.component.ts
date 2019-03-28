import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
	public dataSource: User[];
	public columns: Array<Object>;
	public rowClicked = false;
	public userInfo: User;
	columnIds: string;

	constructor(private usersService: UsersService) { }

    ngOnInit() {
	   this.usersService.getUsersList().subscribe(result => {
	  	this.dataSource  =  result;
	  });
	  this.columns = [
		{propertyName: 'name', columnId: 'Name'},
		{propertyName: 'email', columnId: 'Email'},
		{propertyName: 'phone', columnId: 'Phone'}
	  ]
	  this.columnIds = this.columns.map(c => c.columnId);
	}

	displayUserDetails(userDet) {
	  this.rowClicked = true;	
	  this.usersService.getUsersDetails(userDet.id).subscribe(data => {
	  	this.userInfo  =  data;
	  });
	}

}
