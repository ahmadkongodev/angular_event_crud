import { Component, OnInit,Inject } from '@angular/core';
import { Todo } from '../models/even.model';
import { TodoService } from '../todo.service';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
 
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
 import { Constants } from '../constants';import {
  MatDialog,
  
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
@Component({
  selector: 'app-update',
  standalone: true,
  imports: [ 
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatSlideToggleModule
  ],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {
   
  data: Todo = { completed: false };
  
  constructor(private todoservice: TodoService,@Inject(MAT_DIALOG_DATA) public dataTodo: {item: Todo}, public dialogRef: MatDialogRef<UpdateComponent>, private dialog: MatDialog) {
  }
  ngOnInit() {
this.fil();
  }

  fil(){
    this.data=this.todoservice.readTodo(this.dataTodo.item.id!)
  }
  edit(){
    this.todoservice.editTodo(this.data);
    this.dialogRef.close();
  }
}
