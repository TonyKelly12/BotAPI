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
var teams_service_1 = require("../../Services/teams.service");
var navbar_component_1 = require("../navbar/navbar.component");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var EditTeamComponent = /** @class */ (function () {
    function EditTeamComponent(teamService, route, router, fb) {
        this.teamService = teamService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.renderBoolArray = [];
        this.renderTxtArray = [];
        this.renderDoubleArray = [];
        this.renderPicArray = [];
        this.proper = [];
        this.propControllers = [];
        this.navFlag = "editTeam";
        this.navbar = new navbar_component_1.NavbarComponent();
    }
    Object.defineProperty(EditTeamComponent.prototype, "properties", {
        get: function () {
            return this.teamEditForm.get('properties');
        },
        enumerable: true,
        configurable: true
    });
    EditTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbar.setNavFlag(this.navFlag);
        this.teamID = '';
        //Reads Id From Route
        this.sub = this.route.params.subscribe(function (params) {
            _this.teamID = params['teamID'];
            _this.getTeam(_this.teamID);
        });
    };
    EditTeamComponent.prototype.ngAfterViewInit = function () {
    };
    EditTeamComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EditTeamComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    EditTeamComponent.prototype.createFormGroup = function (teamID) {
        var teamEditForm = this.fb.group({
            teamID: teamID,
            properties: this.fb.array(this.propControllers)
        });
        return teamEditForm;
    };
    EditTeamComponent.prototype.addProps = function (prop) {
        return this.fb.group({
            isBase64Encoded: false,
            propertyName: prop.propertyName,
            propertyURL: prop.propertyURL,
            propertyValue: prop.propertyValue,
            propertyType: prop.propertyType,
        });
    };
    EditTeamComponent.prototype.getTeam = function (teamID) {
        var _this = this;
        this.teamService.getEditTeam(teamID)
            .subscribe(function (editTeam) { return _this.getFormControllers(editTeam); }, function (error) { return console.log(error); });
    };
    EditTeamComponent.prototype.getFormControllers = function (editTeam) {
        var _this = this;
        //console.log(editPerson);
        this.proper = editTeam.properties;
        console.log(this.proper);
        this.proper.forEach(function (prop) {
            _this.propControllers.push(_this.addProps(prop));
        });
        this.teamEditForm = this.createFormGroup(this.teamID);
        this.saveForRender(this.teamEditForm);
    };
    ;
    EditTeamComponent.prototype.saveEdit = function () {
        console.log(this.teamEditForm);
        var savePropList = [];
        var editTeamID = this.teamEditForm.value.teamID;
        var propList = this.teamEditForm.controls['properties'].controls;
        propList.forEach(function (prop) {
            if (prop.touched == true) {
                console.log(prop);
                savePropList.push(prop.value);
            }
        });
        console.log(savePropList);
        this.saveTouched(editTeamID, savePropList);
    };
    EditTeamComponent.prototype.saveForRender = function (prop) {
        var _this = this;
        var renderList = this.teamEditForm.controls['properties'].controls;
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
    EditTeamComponent.prototype.saveTouched = function (editTeamID, savePropList) {
        var _this = this;
        savePropList.forEach(function (prop) {
            _this.teamService.saveEditTeam(editTeamID, prop);
        });
    };
    EditTeamComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-team',
            templateUrl: './edit-team.component.html',
            styleUrls: ['./edit-team.component.css']
        }),
        __metadata("design:paramtypes", [teams_service_1.TeamsService,
            router_1.ActivatedRoute,
            router_1.Router,
            forms_1.FormBuilder])
    ], EditTeamComponent);
    return EditTeamComponent;
}());
exports.EditTeamComponent = EditTeamComponent;
//# sourceMappingURL=edit-team.component.js.map