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
var person_service_service_1 = require("../../Services/person-service.service");
var addProperty_model_1 = require("../../Models/addProperty.model");
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
var PersonDataComponent = /** @class */ (function () {
    function PersonDataComponent(personService, fb, errorMessage, Error, dataObjects, cd, modalService) {
        this.personService = personService;
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
        this.userID = new addProperty_model_1.AddProperties("", "userID", "txt", "", false);
        this.username = new addProperty_model_1.AddProperties("", "username", "txt", "", false);
        this.firstname = new addProperty_model_1.AddProperties("", "firstName", "txt", "", false);
        this.lastname = new addProperty_model_1.AddProperties("", "lastName", "txt", "", false);
        this.weight_in_kg = new addProperty_model_1.AddProperties("", "weight_in_kg", "double", "", false);
        this.height_in_cm = new addProperty_model_1.AddProperties(" ", "height_in_cm", "double", "", false);
        this.favoritequote = new addProperty_model_1.AddProperties(" ", "favoritequote", "txt", "", false);
        this.profilevisibility = new addProperty_model_1.AddProperties(" ", "profilevisibility", "txt", "", false);
        this.addPropType = ["txt", "png", "gif", "jpg", "json", "bool", "int", "double"];
        this.propRealmType = ["person", "chat", "feed", "arena", "post", "device", "team", "gym",];
        this.profileOptions = ["public", "friends", "private"];
        this.initPerson = this.dataObjects.initalizePersonProperties();
        this.newPerson = this.dataObjects.intitPerson();
        //Init of Array of properties being used TODO: (Delete What is not needed)
        this.personProp = [];
        this.personDBList = [];
        this.addProperties = [];
        this.propsToApi = [];
        this.initPersonArray = [];
        this.editPersonArray = [];
        //navBar State
        this.navFlag = "editPerson";
        this.navbar = new navbar_component_1.NavbarComponent();
    }
    PersonDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbar.setNavFlag(this.navFlag);
        this.personForm = this.fb.group({
            userID: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            username: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            firstname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            lastname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(2)]],
            weight_in_kg: ['', [forms_1.Validators.required, forms_1.Validators.min(34.0194)]],
            height_in_cm: ['', [forms_1.Validators.required, forms_1.Validators.min(91.44)]],
            favoritequote: ['', [forms_1.Validators.minLength(3)]],
            profilevisibility: ['', [forms_1.Validators.required]],
            avatar: [this.initPerson.avatar]
        });
        //ADDING PROPS TO PERSON FORM//
        var userIDControll = this.personForm.get('userID');
        userIDControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(userIDControll); });
        var firstNameControll = this.personForm.get('firstname');
        firstNameControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(firstNameControll); });
        var lastNameControll = this.personForm.get('lastname');
        lastNameControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(lastNameControll); });
        var usernameControll = this.personForm.get('username');
        usernameControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(usernameControll); });
        var weightControll = this.personForm.get('weight_in_kg');
        weightControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(weightControll); });
        var heightControll = this.personForm.get('height_in_cm');
        heightControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(heightControll); });
        var quoteControll = this.personForm.get('favoritequote');
        quoteControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(quoteControll); });
        var profileControll = this.personForm.get('profilevisibility');
        profileControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(profileControll); });
        this.getAllPersons();
    };
    PersonDataComponent.prototype.openModal = function (id) {
        var modal = document.getElementById(id);
        modal.style.display = 'block';
    };
    PersonDataComponent.prototype.closeModal = function (id) {
        var modal = document.getElementById(id);
        modal.style.display = 'none';
    };
    PersonDataComponent.prototype.handleFiles = function (event) {
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
    PersonDataComponent.prototype.loadHandler = function (event) {
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
    PersonDataComponent.prototype.errorHandler = function (event) {
        if (event.target.error.name == "NotReadableError") {
            alert('Cannot read File');
        }
    };
    PersonDataComponent.prototype.randomizePerson = function () {
        console.log(personList);
        if (!fileUploaded) {
            console.log('!fileUploaded');
        }
        else if (personList.length === 0) {
            console.log('emptyList');
        }
        else {
            console.log(personList[0][0][0]); //the way it was parsed caused an extra
            // array to be created. middle will always be [0]
            var personProps = [];
            var currentProp = void 0;
            for (var i = 0; i < personList.length; i++) {
                var currentRow = personList[i][0];
                //console.log(currentRow);
                var min = 1;
                var max = currentRow.length;
                var propIndex = Math.floor(Math.random() * (max - min - 1)) + min;
                //console.log(propIndex);
                currentProp = currentRow[propIndex];
                //console.log(currentProp);
                personProps.push(currentProp);
            }
            console.log(personProps);
            this.createPerson(personProps);
        }
    };
    PersonDataComponent.prototype.createPerson = function (personProps) {
        var _this = this;
        this.person.pword = personProps[0];
        this.person.firstname = personProps[1];
        this.person.lastname = personProps[2];
        this.person.phone = personProps[3];
        this.person.username = personProps[4];
        this.person.weight_in_kg = personProps[5];
        this.person.height_in_cm = personProps[6];
        this.person.favoritequote = personProps[7];
        this.person.email = personProps[8];
        this.personForm.patchValue({
            firstname: this.person.firstname,
            lastname: this.person.lastname,
            username: this.person.username,
            weight_in_kg: this.person.weight_in_kg,
            height_in_cm: this.person.height_in_cm,
            favoritequote: this.person.favoritequote,
            profilevisibility: 'friends'
        });
        this.personProp = Object.keys(this.person).map(function (e) {
            var prop = "" + e;
            console.log(prop);
            _this.personProp.push(prop);
            console.log(_this.personProp);
        });
        console.log(this.person);
    };
    PersonDataComponent.prototype.userProfile = function (event) {
        this.person.profilevisibility = event.target.value;
        console.log(this.person.profilevisibility);
        var profilevisibility = this.person.profilevisibility;
        this.addProperties.push(profilevisibility);
    };
    PersonDataComponent.prototype.createNewPerson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = Object.assign({}, this.newPerson, this.createPersonForm.value);
                console.log(data);
                this.personService.createPersonPost(data);
                return [2 /*return*/];
            });
        });
    };
    PersonDataComponent.prototype.userProperties = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formData, serverData;
            var _this = this;
            return __generator(this, function (_a) {
                formData = Object.assign({}, this.initPerson, this.personForm.value);
                serverData = {
                    userID: ["txt", formData.userID,],
                    firstname: ["txt", formData.userID,],
                    lastname: ["txt", formData.userID,],
                    favoritequote: ["txt", formData.userID,],
                    username: ["txt", formData.userID,],
                    profilevisibility: ["txt", formData.userID,],
                    weight_in_kg: ["double", formData.userID,],
                    height_in_cm: ["double", formData.userID,],
                    avatar: ["png", formData.userID,]
                };
                //loops through formData object and gets prop names and values
                // and assigns them to the serverData object used to make api call
                Object.keys(formData).map(function (e) { return __awaiter(_this, void 0, void 0, function () {
                    var prop, value;
                    return __generator(this, function (_a) {
                        prop = "" + e;
                        value = ("" + formData[e]).toString();
                        console.log(prop + '= ' + value);
                        serverData[prop][2] = value;
                        serverData[prop][3] = prop;
                        return [2 /*return*/];
                    });
                }); });
                //call to the person Service which makes http request
                this.personService.addPropApiCall(serverData);
                return [2 /*return*/];
            });
        });
    };
    PersonDataComponent.prototype.setAvatar = function (avatar) {
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
    PersonDataComponent.prototype.getAllPersons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jData, jsonData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.personDBList = [];
                        this.initPersonArray = [];
                        this.editPersonArray = [];
                        return [4 /*yield*/, this.personService.getPersonsData()];
                    case 1:
                        jData = _a.sent();
                        return [4 /*yield*/, jData.json()];
                    case 2:
                        jsonData = _a.sent();
                        console.log(jsonData);
                        this.personDBList = jsonData;
                        this.loopUsersDB();
                        this.convertToCSV(jsonData);
                        return [2 /*return*/];
                }
            });
        });
    };
    PersonDataComponent.prototype.loopUsersDB = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.personDBList.forEach(function (person) {
                    //console.log(person)
                    _this.personService.getEditUser(person.personID)
                        .subscribe(function (initialPerson) { return _this.sortPerson(initialPerson); }, function (error) { return console.log(error); });
                });
                return [2 /*return*/];
            });
        });
    };
    PersonDataComponent.prototype.sortPerson = function (initialPerson) {
        if (initialPerson.properties.length == 0) {
            this.initPersonArray.push(initialPerson);
        }
        else {
            this.editPersonArray.push(initialPerson);
        }
        console.log("edit person array ");
        console.log(this.editPersonArray);
    };
    PersonDataComponent.prototype.convertToCSV = function (jsonData) {
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
    PersonDataComponent.prototype.CSVDownload = function (filename) {
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
    PersonDataComponent.prototype.getEditPerson = function (personEdit, userID) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        //console.log(this.personData);
                        _a = this;
                        return [4 /*yield*/, this.personService.getEditUser(userID)];
                    case 1:
                        //console.log(this.personData);
                        _a.personData = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PersonDataComponent = __decorate([
        core_1.Component({ selector: 'app-person-data', templateUrl: './person-data.component.html', styleUrls: ['./person-data.component.css'] }),
        __metadata("design:paramtypes", [person_service_service_1.PersonService,
            forms_1.FormBuilder,
            ErrorMessages_1.ErrorMessages,
            SetError_1.SetError,
            DataObjects_1.DataObjects,
            core_1.ChangeDetectorRef,
            ng_bootstrap_1.NgbModal])
    ], PersonDataComponent);
    return PersonDataComponent;
}());
exports.PersonDataComponent = PersonDataComponent;
//# sourceMappingURL=person-data.component.js.map