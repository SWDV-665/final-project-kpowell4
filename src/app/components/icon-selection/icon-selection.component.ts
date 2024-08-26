import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-selection',
  templateUrl: './icon-selection.component.html',
  styleUrls: ['./icon-selection.component.scss'],
})
export class IconSelectionComponent   {
  @Output() iconSelected = new EventEmitter<string>();
  icons: string[] = ['trash-outline', 'footsteps-outline', 'fast-food-outline','bed-outline']
  



  selectedIcon: string | undefined;
  
  constructor() { }

  selectIcon(icon: string) {
    this.selectedIcon = icon;
    this.iconSelected.emit(icon);
  }

 

}
