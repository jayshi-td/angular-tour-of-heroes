import {Component} from '@angular/core';

@Component({

    selector: 'contact-list',

    template: `
        <ul>
            <li *ngFor= "let contact of contacts"
               
                (click)= "select(contact)"
                
                [class.selected]= "flag === true">
            
                {{contact.firstName}} {{contact.lastName}}

            </li>
        </ul>
    `
})

export class ContactListComponent {

  public contacts = [{firstName: "Jay", lastName: "Shi", a: "a", b: "b"},
  {firstName: "Jace", lastName: "Shih", a: "1", b: "2"},
  {firstName: "Jack", lastName: "Shin", a: "3", b: "4"},
  {firstName: "John", lastName: "Shihwa", a: "5", b: "6"},
  {firstName: "Jays", lastName: "Shisa", a: "7", b: "8"},
  {firstName: "Jason", lastName: "Shinhh", a: "9", b: "10"}];

  public flag = true;

  public selected = {}; 

  select(contact){
    this.selected = contact;
    this.flag= !this.flag;
  }

}