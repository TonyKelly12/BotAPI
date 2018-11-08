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
var gym_service_1 = require("../../Services/gym.service");
var navbar_component_1 = require("../navbar/navbar.component");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var EditGymComponent = /** @class */ (function () {
    function EditGymComponent(gymService, route, router, fb) {
        this.gymService = gymService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.renderBoolArray = [];
        this.renderTxtArray = [];
        this.renderDoubleArray = [];
        this.renderPicArray = [];
        this.proper = [];
        this.propControllers = [];
        this.navFlag = "editGym";
        this.navbar = new navbar_component_1.NavbarComponent();
    }
    Object.defineProperty(EditGymComponent.prototype, "properties", {
        get: function () {
            return this.gymEditForm.get('properties');
        },
        enumerable: true,
        configurable: true
    });
    EditGymComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbar.setNavFlag(this.navFlag);
        this.gymID = '';
        //Reads Id From Route
        this.sub = this.route.params.subscribe(function (params) {
            _this.gymID = params['gymID'];
            _this.getGym(_this.gymID);
        });
    };
    EditGymComponent.prototype.ngAfterViewInit = function () {
    };
    EditGymComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditGymComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    EditGymComponent.prototype.createFormGroup = function (gymID) {
        var gymEditForm = this.fb.group({
            gymID: gymID,
            properties: this.fb.array(this.propControllers)
        });
        return gymEditForm;
    };
    EditGymComponent.prototype.addProps = function (prop) {
        return this.fb.group({
            isBase64Encoded: false,
            propertyName: prop.propertyName,
            propertyURL: prop.propertyURL,
            propertyValue: prop.propertyValue,
            type: prop.type,
        });
    };
    EditGymComponent.prototype.getGym = function (gymID) {
        var _this = this;
        this.gymService.getEditGym(gymID)
            .subscribe(function (editGym) { return _this.getFormControllers(editGym); }, function (error) { return console.log(error); });
    };
    EditGymComponent.prototype.getFormControllers = function (editGym) {
        var _this = this;
        //console.log(editPerson);
        this.proper = editGym.properties;
        console.log(this.proper);
        this.proper.forEach(function (prop) {
            _this.propControllers.push(_this.addProps(prop));
        });
        this.gymEditForm = this.createFormGroup(this.gymID);
        this.saveForRender(this.gymEditForm);
    };
    ;
    EditGymComponent.prototype.saveEdit = function () {
        console.log(this.gymEditForm);
        var savePropList = [];
        var editGymID = this.gymEditForm.value.gymID;
        var propList = this.gymEditForm.controls['properties'].controls;
        propList.forEach(function (prop) {
            if (prop.touched == true) {
                console.log(prop);
                savePropList.push(prop.value);
            }
        });
        console.log(savePropList);
        this.saveTouched(editGymID, savePropList);
    };
    EditGymComponent.prototype.saveForRender = function (prop) {
        var _this = this;
        var renderList = this.gymEditForm.controls['properties'].controls;
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
    EditGymComponent.prototype.saveTouched = function (editUserID, savePropList) {
        var _this = this;
        savePropList.forEach(function (prop) {
            _this.gymService.saveEditGym(editUserID, prop);
        });
    };
    EditGymComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-gym',
            templateUrl: './edit-gym.component.html',
            styleUrls: ['./edit-gym.component.css']
        }),
        __metadata("design:paramtypes", [gym_service_1.GymService,
            router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder])
    ], EditGymComponent);
    return EditGymComponent;
}());
exports.EditGymComponent = EditGymComponent;
//# sourceMappingURL=edit-gym.component.js.map