import { Component , Inject} from '@angular/core';
import {MatButtonModule } from '@angular/material/button';

import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { TodoService } from '../even.service';
@Component({
  selector: 'app-confirmodal',
  standalone: true,
  imports: [ MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,MatButtonModule],
  templateUrl: './confirmodal.component.html',
  styleUrl: './confirmodal.component.css'
})


export class ConfirmodalComponent {

  constructor(private todoservice: TodoService,@Inject(MAT_DIALOG_DATA) public data: {id: string}, public dialogRef: MatDialogRef<ConfirmodalComponent >){
    
  }
  delete(){
    this.todoservice.deleteTodo(this.data.id)
    this.dialogRef.close();
}
}
