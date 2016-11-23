import {Component} from '@angular/core';
import {Name} from './name';
import {DataService} from './name.service';
import {OnInit} from '@angular/core';



@Component({

    selector: 'my-app',

    template:
      `
        <h1>Say hello to </h1>
        <ul>
          <li *ngFor= "let name of names" (click)="select(name)" [class.clicked]= "flag === true"> 
            
            {{name.id}} {{name.firstName}} {{name.lastName}}
         
          <br></li>
        
        </ul>
        
        <name-detail [name]="selected" ></name-detail>

      `,

    providers: [DataService],

    styles: [`

    `]
})



export class AppComponent implements OnInit{

  constructor(private dataservice: DataService){};

  names: Name[];

  getData(): void {

    this.names = this.dataservice.data();
  }

  ngOnInit():void{

    this.getData();
  }



  flag = false; 

  selected: Name;

  select(name: Name): void{
    this.selected = name; 
  }



}


