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
var name_1 = require('./name');
var NameDetailComponent = (function () {
    function NameDetailComponent() {
        this.flag = false;
    }
    NameDetailComponent.prototype.unselect = function () {
        this.flag = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', name_1.Name)
    ], NameDetailComponent.prototype, "name", void 0);
    NameDetailComponent = __decorate([
        core_1.Component({
            selector: 'name-detail',
            template: "\n        <div *ngIf= \"name\" >\n         \n          <input type=\"text\" placeholder=\"change the name\" [(ngModel)]= \"name.firstName\"\n          \n          (blur)= \"unselect()\"> \n\n          <input type=\"text\" placeholder=\"change the name\" [(ngModel)]= \"name.lastName\"\n          \n          (blur)= \"unselect()\">\n\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NameDetailComponent);
    return NameDetailComponent;
}());
exports.NameDetailComponent = NameDetailComponent;
//# sourceMappingURL=name-detail.component.js.map