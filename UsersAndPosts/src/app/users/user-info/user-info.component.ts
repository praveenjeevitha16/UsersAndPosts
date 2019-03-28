import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user.model';
import {UsersService} from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  public user: User;
  constructor(private usersService: UsersService,
  private route: ActivatedRoute) { }

  ngOnInit() {
	  const id = +this.route.snapshot.paramMap.get('id');
	  this.usersService.getUsersDetails(id)
	    .subscribe(user => this.user = user);
  }

}
