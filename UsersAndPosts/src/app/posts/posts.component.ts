import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {PostsService} from './posts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public dialogConfig: any;
  public dialogRef: any;
  @ViewChild('createPostDialog') createPostDialog: TemplateRef<any>;
  public posts: any;
  public columns: Array<Object>;
  columnIds;
  alertConfig = {};

  public postForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.max(24)]),
    body: new FormControl('', [Validators.required, Validators.max(50)])
  });
 
  constructor(private dialog: MatDialog
  private postsService: PostsService) {
    this.dialogConfig = new MatDialogConfig();
  }

  ngOnInit() {
    this.fetch();
    this.columns = [
      {propertyName: 'title', columnId: 'Title'},
      {propertyName: 'body', columnId: 'Body'}
    ];
    this.columnIds = this.columns.map(c => c.columnId);
  }

  createPost() {
    this.dialogConfig  = {
    	hasBackDrop: true,
    	width: 500,
    	height: 500
    };
	 this.dialogRef = this.dialog.open(this.createPostDialog, this.dialogConfig);
   this.dialogRef.afterClosed().subscribe(res => {
      this.alertConfig = {};
      this.postForm.reset();
   });
  }

  postSubmit() {
    if(!this.postForm.valid) {
      let errorMsg = '';
      if(this.postForm.controls.title.errors && this.postForm.controls.title.errors.required) {
        errorMsg = 'Title Field is required';
      } else if(this.postForm.controls.body.errors && this.postForm.controls.body.errors.required) {
        errorMsg = 'Body Field is required';
      }
       this.alertConfig = {
        type: 'danger',
        msg: errorMsg,
        showAlertMessage: true
      };
    } else {
      this.postsService.insert(this.postForm.value).subscribe(res => {
        this.posts.unshift(res);
        this.posts = [...this.posts];
        this.alertConfig = {
          type: 'success',
          msg: 'Post Created Successfully',
          showAlertMessage: true
        };
        setTimeout( () => {
          this.dialog.closeAll();
        }, 1000);
      }, error => {
        this.alertConfig = {
          type: 'danger',
          msg: 'Error Saving',
          showAlertMessage: true
        };
      });
    }
  }

  fetch() {
    this.postsService.fetch().subscribe(res => {
      this.posts = res;
    });
  }

}
