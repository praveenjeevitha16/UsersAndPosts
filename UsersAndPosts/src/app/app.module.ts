import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';
import { PostsComponent } from './posts/posts.component';
import { MatTableModule, MatDialogModule, MatFormFieldModule, MatInputModule } from  '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { UserInfoComponent } from './users/user-info/user-info.component';
import { AppRoutingModule } from './/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    UserInfoComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    TabsModule.forRoot(),
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [UsersService, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
