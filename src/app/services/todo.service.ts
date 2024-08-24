import { Injectable, OnInit, resolveForwardRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TodoService  {


  constructor(private storage: Storage) {
    this.init();
  }
  
  async init() {
    const storage = await this.storage.create();
  }

  addTask(key: any, value: any){
    return this.storage.set(key,value);
  }

  getAllTask(){
    let tasks: any=[];
    var promise = new Promise((_resolve, _reject) => {
      this.storage.forEach((value,key,_index) => {
        tasks.push({'key': key, 'value':value});
      }).then((_d) => {
        resolveForwardRef(tasks);
      });
    });

    return promise;
  }

  getTaskById(key:string){
    let item = this.storage.get(key);

    return item;
  }

  async deleteTask(key: string){
    return await this.storage.remove(key)
  }

}
