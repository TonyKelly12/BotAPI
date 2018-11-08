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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var personInst_model_1 = require("../../Models/personInst.model");
var gym_service_1 = require("../../Services/gym.service");
var createProperty_model_1 = require("../../Models/createProperty.model");
var navbar_component_1 = require("../navbar/navbar.component");
var ErrorMessages_1 = require("../../ErrorMessages");
var SetError_1 = require("../../SetError");
var DataObjects_1 = require("../../DataObjects");
var propHeader = new Headers();
propHeader.append("Content-Type", "application/json");
var newPersonRequest = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/persons/new";
var getPersons = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/persons?startIndex=0&maxResults" +
    "=20";
var personList = [];
var finalCSV;
var fileUploaded = false;
var GymDataComponent = /** @class */ (function () {
    function GymDataComponent(gymService, fb, errorMessage, Error, dataObjects, cd, modalService) {
        this.gymService = gymService;
        this.fb = fb;
        this.errorMessage = errorMessage;
        this.Error = Error;
        this.dataObjects = dataObjects;
        this.cd = cd;
        this.modalService = modalService;
        //Init of person and property instances TODO: (Delete What is not needed)
        this.person = new personInst_model_1.PersonInst("", "", " ", "", "", 0, 0, "", false, false, false, "", "", "", "");
        this.createProps = new createProperty_model_1.CreateProperties(" ", " ", " ", " ");
        //customProps = new AddPersonProperties(true, true, true, true, true)
        //newProps = new AddProperties(" ", " ", " ", " ", false)
        // Properties Init TODO: (Delete What is not needed)
        this.addPropType = ["txt", "png", "gif", "jpg", "json", "bool", "int", "double"];
        this.propRealmType = ["person", "chat", "feed", "arena", "post", "device", "team", "gym",];
        this.initPerson = this.dataObjects.initalizePersonProperties();
        this.newGym = this.dataObjects.newGym();
        //Init of Array of properties being used TODO: (Delete What is not needed)
        this.personProp = [];
        this.gymDBList = [];
        this.addProperties = [];
        this.propsToApi = [];
        this.initGymArray = [];
        this.editGymArray = [];
        //navBar State
        this.navFlag = "gyms";
        this.navbar = new navbar_component_1.NavbarComponent();
    }
    GymDataComponent.prototype.ngOnInit = function () {
        this.navbar.setNavFlag(this.navFlag);
        this.getAllGyms();
    };
    GymDataComponent.prototype.openModal = function (id) {
        var modal = document.getElementById(id);
        modal.style.display = 'block';
    };
    GymDataComponent.prototype.closeModal = function (id) {
        var modal = document.getElementById(id);
        modal.style.display = 'none';
    };
    GymDataComponent.prototype.handleFiles = function (event) {
        console.log('handle ran');
        if (event) {
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = this.loadHandler;
            reader.onerror = this.errorHandler;
            fileUploaded = true;
        }
        else {
            alert('FileReader not supporterd');
        }
    };
    //TODO: FIx this to prop handel csv backup
    GymDataComponent.prototype.loadHandler = function (event) {
        var csv = event.target.result;
        var textLines = csv.split(/\r\n|\n/);
        for (var i = 0; i < textLines.length; i++) {
            var textRow = textLines[i].split(';'); //CSV splits each row with ;
            var row = [];
            var col = [];
            for (var j = 0; j < textRow.length; j++) {
                var field = textRow[j].split(',');
                row.push(field); // Creates the Row array with individual fields indexs
                // Row Label at index[0]
                personList.push(row); //pushes each row to the personList
            }
            console.log(personList);
        }
    };
    GymDataComponent.prototype.errorHandler = function (event) {
        if (event.target.error.name == "NotReadableError") {
            alert('Cannot read File');
        }
    };
    GymDataComponent.prototype.setAvatar = function (avatar) {
        var _this = this;
        var reader = new FileReader();
        if (avatar.target.files && avatar.target.files.length) {
            var file = avatar.target.files[0];
            //TODO: if broken change back to read as dataURL
            reader.readAsBinaryString(file);
            reader.onload = function () {
                _this.personForm.patchValue({
                    avatar: reader.result
                });
                // need to run CD since file load runs outside of zone
                _this.cd.markForCheck();
            };
        }
    };
    GymDataComponent.prototype.getAllGyms = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jData, jsonData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.gymDBList = [];
                        this.initGymArray = [];
                        this.editGymArray = [];
                        return [4 /*yield*/, this.gymService.getGymsData()];
                    case 1:
                        jData = _a.sent();
                        return [4 /*yield*/, jData.json()];
                    case 2:
                        jsonData = _a.sent();
                        console.log(jsonData);
                        this.gymDBList = jsonData;
                        //this.loopGymDB();
                        this.convertToCSV(jsonData);
                        return [2 /*return*/];
                }
            });
        });
    };
    GymDataComponent.prototype.loopGymDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.gymDBList.forEach(function (gym) {
                    //console.log(person)
                    _this.gymService.getEditGym(gym.gymID)
                        .subscribe(function (initialGym) { return _this.sortGym(initialGym); }, function (error) { return console.log(error); });
                });
                return [2 /*return*/];
            });
        });
    };
    GymDataComponent.prototype.sortGym = function (initialGym) {
        if (initialGym.properties.length == 0) {
            this.initGymArray.push(initialGym);
        }
        else {
            this.editGymArray.push(initialGym);
        }
        console.log("edit person array ");
        console.log(this.editGymArray);
    };
    GymDataComponent.prototype.convertToCSV = function (jsonData) {
        var fields = Object.keys(jsonData[0]);
        var replacer = function (key, value) {
            return value === null
                ? ''
                : value;
        };
        var csv = jsonData.map(function (row) {
            return fields.map(function (fieldName) {
                return JSON.stringify(row[fieldName], replacer);
            }).join(',');
        });
        csv.unshift(fields.join(',')); // add header column
        //console.log(csv.join('\r\n'))
        finalCSV = csv.join('\r\n');
    };
    //TODO: Make this function reload a backup csv instead of randomize
    GymDataComponent.prototype.CSVDownload = function () {
        var fileName = 'personsBackup.csv';
        if (!finalCSV.match(/^data:text\/csv/i)) {
            finalCSV = 'data:text/csv;charset=utf-8,' + finalCSV;
        }
        var data = encodeURI(finalCSV);
        var link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', fileName);
        link.click();
    };
    GymDataComponent.prototype.getEditGym = function (gymEdit, gymID) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        console.log(this.editGymArray);
                        _a = this;
                        return [4 /*yield*/, this.gymService.getEditGym(gymID)];
                    case 1:
                        _a.gymData = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GymDataComponent = __decorate([
        core_1.Component({
            selector: 'app-gym-data',
            templateUrl: './gym-data.component.html',
            styleUrls: ['./gym-data.component.css']
        }),
        __metadata("design:paramtypes", [gym_service_1.GymService,
            forms_1.FormBuilder,
            ErrorMessages_1.ErrorMessages,
            SetError_1.SetError,
            DataObjects_1.DataObjects,
            core_1.ChangeDetectorRef,
            ng_bootstrap_1.NgbModal])
    ], GymDataComponent);
    return GymDataComponent;
}());
exports.GymDataComponent = GymDataComponent;
//# sourceMappingURL=gym-data.component.js.map