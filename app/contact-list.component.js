"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ContactListComponent = (function () {
    function ContactListComponent() {
        this.contacts = [{ firstName: "Jay", lastName: "Shi", a: "a", b: "b" },
            { firstName: "Jace", lastName: "Shih", a: "1", b: "2" },
            { firstName: "Jack", lastName: "Shin", a: "3", b: "4" },
            { firstName: "John", lastName: "Shihwa", a: "5", b: "6" },
            { firstName: "Jays", lastName: "Shisa", a: "7", b: "8" },
            { firstName: "Jason", lastName: "Shinhh", a: "9", b: "10" }];
        this.flag = true;
        this.selected = {};
    }
    ContactListComponent.prototype.select = function (contact) {
        this.selected = contact;
        this.flag = !this.flag;
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            template: "\n        <ul>\n            <li *ngFor= \"let contact of contacts\"\n               \n                (click)= \"select(contact)\"\n                \n                [class.selected]= \"flag === true\">\n            \n                {{contact.firstName}} {{contact.lastName}}\n\n            </li>\n        </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map