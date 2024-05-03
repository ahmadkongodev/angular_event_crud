import { Injectable } from '@angular/core';
import { Constants } from './constants';
import { Even } from './models/even.model';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { 
    
  }

  private read(id: string) {
    const json_list = localStorage.getItem(Constants.localStorageKey);
    var list = json_list ? JSON.parse(json_list) : [];

    var item = list.filter((el: any) => el.id == id);
    return item[0];
  }

  private save(list: Even[]) {
    localStorage.setItem(Constants.localStorageKey, JSON.stringify(list));
  }

  getTodos() {
    var list = [];
    const json_list = localStorage.getItem(Constants.localStorageKey);
    if (json_list) 
      list = JSON.parse(json_list);
    
    return list;
  }

  readTodo(id: string) {
    
    return this.read(id);
  }

  //  
  addTodo(item: Even) {
    const json_list = localStorage.getItem(Constants.localStorageKey);
    var list = json_list ? JSON.parse(json_list) : [];

    list.push(item);

    this.save(list);
    return true;
  }

  editTodo(item: Even) {
    const json_list = localStorage.getItem(Constants.localStorageKey);
    var list = json_list ? JSON.parse(json_list) : [];
    var index = list.map((el: any) => el.id).indexOf(item.id);

    if (index > -1) {
      list.splice(index, 1);
  
      list.push(item);

      this.save(list);
    } 

    return true;
  }

  deleteTodo(id: string) {

    const json_list = localStorage.getItem(Constants.localStorageKey);
    var list = json_list ? JSON.parse(json_list) : [];
    var index = list.map((el: any) => el.id).indexOf(id);

    if (index > -1) {
      list.splice(index, 1);
      this.save(list);
    } 
  }

  searchTodo() {

  }

}
