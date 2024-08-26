import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';
import { ColorSelectionComponent } from './components/color-selection/color-selection.component';
import { IconSelectionComponent } from './components/icon-selection/icon-selection.component';
import { DatePipe } from '@angular/common';
import { TaskviewComponent } from './taskview/taskview.component';

import { initializeApp } from 'firebase/app';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [AppComponent, CreateTaskComponent, ColorSelectionComponent, IconSelectionComponent, TaskviewComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, FormsModule, IonicStorageModule.forRoot(),],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DatePipe, ],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
