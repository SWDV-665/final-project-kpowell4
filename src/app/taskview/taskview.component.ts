import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { CameraOptions } from '@ionic-native/camera';



@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss'],
})
export class TaskviewComponent  {

  taskData: any;
  todoService: any;
  alertController: any;

  constructor(private navParams: NavParams, 
    private modalCtrl: ModalController) {
    this.taskData = this.navParams.data;
    
  }

 

  async dismissModal(){
    this.modalCtrl.dismiss();
  }
  
  async onDuplicate(data:any){
    const modal = await this.modalCtrl.create({
      component: CreateTaskComponent,
      componentProps: {
        data
      },
      cssClass: "Createmodal"

    })

    return await modal.present();
  }

  async onEdit(data:any) {
    const modal = await this.modalCtrl.create({
      component: CreateTaskComponent,
      componentProps: {
        data
      },
      cssClass: "Createmodal"

    })

    return await modal.present();
  }
  
  async onMissed(){
    if ( this.taskData.data.value.TaskStatus === "Incomplete"){
      this.taskData.data.TaskStatus = '';
    }else {
      this.taskData.data.TaskStatus === 'Complete';
    }

    
  }
   
  

  async onComplete(){
    this.taskData.data.value.TaskStatus === "Completed";
    this.todoService.addTask(this.taskData.data.key, this.taskData.data.value);
    this.modalCtrl.dismiss({deleted: true})
  }


   async presentAlertDelete(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',

      header: 'Confirm!',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: ');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Successful');

            this.todoService.deleteTask(this.taskData.data.key).then((res: any) =>{
              this.modalCtrl.dismiss ({deleted: true})
            })
          }
        }
      ]
    });

    return await alert.present();
   }

   




  

}
