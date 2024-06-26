import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule} from '@angular/material/table';
import { TodoService } from './even.service';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AddComponent } from './add/add.component'; 
import { ConfirmodalComponent } from './confirmodal/confirmodal.component'; 

import {
  MatDialog,
  
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { Even } from './models/even.model';
import { UpdateComponent } from './update/update.component';

export interface TodoElement {
  id: string,
  title: string;
  description: string;
  completed: boolean
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatSlideToggleModule, 
    MatIconModule, 
    MatButtonModule, 
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  datasource: TodoElement[] = [];
  columns = ['id', 'name', 'date', 'location','attendees','action'];
  title = 'todoapp';

  constructor(private todoservice: TodoService, private dialog: MatDialog) {
    
  }

  ngOnInit(): void {
    this.list();
  }

  list() {
   this.datasource = this.todoservice.getTodos();
  }

  showModal() {
    const dialogRef = this.dialog.open(AddComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.list()
    });
  }
  showConfirm(id: string){
    const dialogRef = this.dialog.open(ConfirmodalComponent, {
      data: { id: id }
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.list()
    });
  }
  showEdit(item:Even){
    const dialogRef = this.dialog.open(UpdateComponent, {
      data: {item:item}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.list()
    });
  }
 
 


}
