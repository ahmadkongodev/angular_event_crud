import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { TodoService } from '../even.service';

import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Even } from '../models/even.model'
import { Constants } from '../constants';
 
@Component({
  selector: 'app-todo',
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
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class AddComponent {


  data: Even = {id: Constants.getUniqueId()};
  
  constructor(private dataservice: TodoService, public dialogRef: MatDialogRef<AddComponent>) {

  }
  submit() {

    this.dataservice.addTodo(this.data);
    this.dialogRef.close();
  }



  
}
