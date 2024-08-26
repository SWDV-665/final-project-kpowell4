import { Component } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { TodoService } from '../services/todo.service';
import { DatePipe } from '@angular/common';
import { TaskviewComponent } from '../taskview/taskview.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todoList: any;
  toastController: any;
  socialSharing: any;
  inputDialogService: any;
  dataService: any;

  constructor(private modalCtrl: ModalController, 
    private todoService: TodoService,
    private loadingCtrl: LoadingController,
    private datePipe: DatePipe) {

      this.loadData();
    }

    convertDateTimetoTime(dateTimeValue: Date): string | null {
      return this.datePipe.transform(dateTimeValue, 'M/d/yy, h:mm'); // Change 'fullDate' to your desired format
    }
  
   

    loadData(){
      this.presentingLoading().then(() => {
        this.todoService.getAllTask().then((val) =>{
          
          
          this.todoList = val;
          
          this.loadingCtrl.dismiss();
      });
    })
    }

    async removeItem(item:any, index:any) {
      console.log("Removing Item - ", item, index);
      
      const toast = await this.toastController.create({
        message:'Removing item -' + index + "...",
        duration: 3000
      });
      toast.present();
  
      this.dataService.removeItem(index);
    }

    async presentingLoading() {
      const loading = await this.loadingCtrl.create({
        message: "Please wait...",
      })

      await loading.present();
    }

    async presentModal(data: any){
      const modal = await this.modalCtrl.create({
        component: TaskviewComponent,
        showBackdrop: true,
        backdropDismiss: true,
        animated: true,
      initialBreakpoint:0.45,
        mode: 'ios',
        keyboardClose: true,
        componentProps: {

        },
        cssClass: "taskViewmodal"

      })

      return await modal.present()
    }

  async addTask() {

    const modal = await this.modalCtrl.create({
      component: CreateTaskComponent,
      showBackdrop: true,
      backdropDismiss: true,
      animated: true,
    })    

    return await modal.present()
  }

  

 
}


  

 



 


