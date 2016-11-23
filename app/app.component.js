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
var name_service_1 = require('./name.service');
var AppComponent = (function () {
    function AppComponent(dataservice) {
        this.dataservice = dataservice;
        this.flag = false;
    }
    ;
    AppComponent.prototype.getData = function () {
        this.names = this.dataservice.data();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AppComponent.prototype.select = function (name) {
        this.selected = name;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>Say hello to </h1>\n        <ul>\n          <li *ngFor= \"let name of names\" (click)=\"select(name)\" [class.clicked]= \"flag === true\"> \n            \n            {{name.id}} {{name.firstName}} {{name.lastName}}\n         \n          <br></li>\n        \n        </ul>\n        \n        <name-detail [name]=\"selected\" ></name-detail>\n\n      ",
            providers: [name_service_1.DataService],
            styles: ["\n\n    "]
        }), 
        __metadata('design:paramtypes', [name_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map