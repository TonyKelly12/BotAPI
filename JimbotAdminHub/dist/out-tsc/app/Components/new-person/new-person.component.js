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
var navbar_component_1 = require("../navbar/navbar.component");
var person_service_service_1 = require("../../Services/person-service.service");
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
var NewPersonComponent = /** @class */ (function () {
    function NewPersonComponent(personService, fb, errorMessage, Error, dataObjects, cd, modalService) {
        this.personService = personService;
        this.fb = fb;
        this.errorMessage = errorMessage;
        this.Error = Error;
        this.dataObjects = dataObjects;
        this.cd = cd;
        this.modalService = modalService;
        this.newPerson = this.dataObjects.intitPerson();
        this.passwordValidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        this.phoneValidation = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        this.navFlag = "registerPerson";
        this.navbar = new navbar_component_1.NavbarComponent();
    }
    NewPersonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbar.setNavFlag(this.navFlag);
        this.createPersonForm = this.fb.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.passwordValidation)]],
            phone: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.phoneValidation)]]
        });
        //CREATING A PERSON FORM//
        var emailControll = this.createPersonForm.get('email');
        emailControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(emailControll); });
        var passwordControll = this.createPersonForm.get('password');
        passwordControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(passwordControll); });
        var phoneControll = this.createPersonForm.get('phone');
        phoneControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(phoneControll); });
    };
    NewPersonComponent.prototype.createNewPerson = function () {
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
    NewPersonComponent = __decorate([
        core_1.Component({
            selector: 'app-new-person',
            templateUrl: './new-person.component.html',
            styleUrls: ['./new-person.component.css']
        }),
        __metadata("design:paramtypes", [person_service_service_1.PersonService,
            forms_1.FormBuilder,
            ErrorMessages_1.ErrorMessages,
            SetError_1.SetError,
            DataObjects_1.DataObjects,
            core_1.ChangeDetectorRef,
            ng_bootstrap_1.NgbModal])
    ], NewPersonComponent);
    return NewPersonComponent;
}());
exports.NewPersonComponent = NewPersonComponent;
//# sourceMappingURL=new-person.component.js.map