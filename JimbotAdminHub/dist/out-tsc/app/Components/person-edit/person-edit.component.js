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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var person_service_service_1 = require("../../Services/person-service.service");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var PersonEditComponent = /** @class */ (function () {
    function PersonEditComponent(ps, route, router, fb) {
        this.ps = ps;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.renderBoolArray = [];
        this.renderTxtArray = [];
        this.renderDoubleArray = [];
        this.renderPicArray = [];
        this.proper = [];
        this.propControllers = [];
    }
    Object.defineProperty(PersonEditComponent.prototype, "properties", {
        get: function () {
            return this.personEditForm.get('properties');
        },
        enumerable: true,
        configurable: true
    });
    PersonEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userID = '';
        //Reads Id From Route
        this.sub = this.route.params.subscribe(function (params) {
            _this.userID = params['userID'];
            _this.getUser(_this.userID);
        });
    };
    PersonEditComponent.prototype.ngAfterViewInit = function () {
    };
    PersonEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PersonEditComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    PersonEditComponent.prototype.createFormGroup = function (userID) {
        var editPerson = this.fb.group({
            personID: userID,
            properties: this.fb.array(this.propControllers)
        });
        return editPerson;
    };
    PersonEditComponent.prototype.addProps = function (prop) {
        return this.fb.group({
            isBase64Encoded: false,
            propertyName: prop.propertyName,
            propertyURL: prop.propertyURL,
            propertyValue: prop.propertyValue,
            type: prop.type,
        });
    };
    PersonEditComponent.prototype.getUser = function (userID) {
        var _this = this;
        this.ps.getEditUser(userID)
            .subscribe(function (editPerson) { return _this.getFormControllers(editPerson); }, function (error) { return console.log(error); });
    };
    PersonEditComponent.prototype.getFormControllers = function (editPerson) {
        var _this = this;
        //console.log(editPerson);
        this.proper = editPerson.properties;
        //console.log(this.proper);
        this.proper.forEach(function (prop) {
            _this.propControllers.push(_this.addProps(prop));
        });
        this.personEditForm = this.createFormGroup(this.userID);
        this.saveForRender(this.personEditForm);
    };
    ;
    PersonEditComponent.prototype.saveEdit = function () {
        console.log(this.personEditForm);
        var savePropList = [];
        var editUserID = this.personEditForm.value.personID;
        var propList = this.personEditForm.controls['properties'].controls;
        propList.forEach(function (prop) {
            if (prop.touched == true) {
                console.log(prop);
                savePropList.push(prop.value);
            }
        });
        console.log(savePropList);
        this.saveTouched(editUserID, savePropList);
    };
    PersonEditComponent.prototype.saveForRender = function (prop) {
        var _this = this;
        var renderList = this.personEditForm.controls['properties'].controls;
        renderList.forEach(function (prop) {
            if (prop.value.type == "BOOL") {
                console.log(prop);
                _this.renderBoolArray.push(prop);
            }
            if (prop.value.type == "TXT") {
                console.log(prop);
                _this.renderTxtArray.push(prop);
            }
            if (prop.value.type == "DOUBLE") {
                console.log(prop);
                _this.renderDoubleArray.push(prop);
            }
            if (prop.value.type == "PNG" || prop.value.type == "JPG") {
                console.log(prop);
                _this.renderPicArray.push(prop);
            }
        });
        console.log(prop);
    };
    PersonEditComponent.prototype.saveTouched = function (editUserID, savePropList) {
        var _this = this;
        savePropList.forEach(function (prop) {
            _this.ps.saveEditUser(editUserID, prop);
        });
        this.router.navigate(['/person']);
    };
    PersonEditComponent = __decorate([
        core_1.Component({
            selector: 'app-person-edit',
            templateUrl: './person-edit.component.html',
            styleUrls: ['./person-edit.component.css']
        }),
        __metadata("design:paramtypes", [person_service_service_1.PersonService,
            router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder])
    ], PersonEditComponent);
    return PersonEditComponent;
}());
exports.PersonEditComponent = PersonEditComponent;
//# sourceMappingURL=person-edit.component.js.map