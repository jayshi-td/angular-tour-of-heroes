import {Component, Input} from '@angular/core';

import {Name} from './name';

@Component({

    selector: 'name-detail',

    template: `
        <div *ngIf= "name" >
         
          <input type="text" placeholder="change the name" [(ngModel)]= "name.firstName"
          
          (blur)= "unselect()"> 

          <input type="text" placeholder="change the name" [(ngModel)]= "name.lastName"
          
          (blur)= "unselect()">

        </div>
    `
})

export class NameDetailComponent{
   
    @Input()
    name: Name;

    flag: boolean = false; 
    
    unselect(): void{

        this.flag = false;
    
    }

}