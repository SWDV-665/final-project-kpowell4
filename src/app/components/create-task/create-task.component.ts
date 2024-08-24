import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ModalController, ToastController } from '@ionic/angular';
import { TodoService } from 'src/app/services/todo.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent   {

  priority = ['High', 'Medium', 'Low']
  currentDate: string = '';
  selectedColor: string = '';
  selectedIcon: string = '';

  todoForm = new FormGroup({
    Title: new FormControl(''),
    Description: new FormControl(''),
    Priority: new FormControl(''),
    setDate: new FormControl(new Date().toISOString()),
    startTime: new FormControl(new Date().toISOString()),
    endTime: new FormControl(new Date().toISOString()),
    Color: new FormControl(''),
    Icon: new FormControl(''),


  })
  

  constructor(private modalCtrl: ModalController,
    private toast: ToastController,
    private todoService: TodoService  ) { }



  dismissModal(){
    this.modalCtrl.dismiss();

  }

  async presentToast(msg: string) {
    const toast = await this.toast.create({
       message: msg,
      duration: 2000,
      buttons: [{
        side: 'end',
        icon: 'checkmark-circle-outline',
        role: 'cancel'
      }
      ]
    });
    toast.present();
  }

  onSubmit() {
    this.currentDate = (new Date()).toISOString();
    let uid = this.currentDate + this.todoForm.value.Title;
    this.todoForm.value.Color = this.selectedColor;
    this.todoForm.value.Icon = this.selectedIcon

    this.todoService.addTask(uid, this.todoForm.value).then(data =>{
      console.log(data) 
      
      this.presentToast("Task Added Successfully!");

      this.modalCtrl.dismiss();
    })

   

  }

  onColorSelected(color: string) {
    this.selectedColor = color;

  }

  onIconSelected(icon: string){
    this.selectedIcon = icon;
  }

}
