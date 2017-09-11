import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {


  public todoList: any = [];
  public todoListName = '';
  //todoList: FirebaseListObservable<any[]>;

  public todoListForm: FormGroup = new FormGroup({
    todoInput: new FormControl('')
  });

  constructor(public angularFireDatabase: AngularFireDatabase,
              public elementRef: ElementRef) {
    //  this.todoList = angularFireDatabase.list('/todoList');


    this.todoList = JSON.parse(localStorage.getItem('todoList'));


  }

  public onSubmit() {

    this.todoListName = this.todoListForm.value.todoInput;

    this.todoList.push({id: Math.round((Math.random() * 1000) + 1), name: this.todoListName});
    this.updateStore();

    console.log(this.todoList);

  }

  public deleteTask(index) {
    this.todoList.splice(index, 1)

    console.log(index, 'slice');
  }

  public updateStore() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  ngOnInit() {
  }

}
