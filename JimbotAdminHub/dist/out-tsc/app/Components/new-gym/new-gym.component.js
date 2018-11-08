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
var gym_service_1 = require("../../Services/gym.service");
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
var NewGymComponent = /** @class */ (function () {
    function NewGymComponent(gymService, fb, errorMessage, Error, dataObjects, cd, modalService) {
        this.gymService = gymService;
        this.fb = fb;
        this.errorMessage = errorMessage;
        this.Error = Error;
        this.dataObjects = dataObjects;
        this.cd = cd;
        this.modalService = modalService;
        this.newGym = this.dataObjects.newGym();
        this.phoneValidation = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
        this.navFlag = "newGym";
        this.navbar = new navbar_component_1.NavbarComponent();
    }
    NewGymComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbar.setNavFlag(this.navFlag);
        this.createGymForm = this.fb.group({
            longName: ['', [forms_1.Validators.required]],
            shortName: ['', [forms_1.Validators.required]],
            phoneNumber: ['', [forms_1.Validators.required, forms_1.Validators.pattern(this.phoneValidation)]],
            streetAddress: ['', [forms_1.Validators.required]],
            city: ['', [forms_1.Validators.required]],
            state: ['', [forms_1.Validators.required]],
            zipCode: ['', [forms_1.Validators.required]],
            country: ['', [forms_1.Validators.required]],
        });
        //CREATING A PERSON FORM//
        var longNameControll = this.createGymForm.get('longName');
        longNameControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(longNameControll); });
        var shortNameControll = this.createGymForm.get('shortName');
        shortNameControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(shortNameControll); });
        var phoneNumberControll = this.createGymForm.get('phoneNumber');
        phoneNumberControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(phoneNumberControll); });
        var streetAddressControll = this.createGymForm.get('streetAddress');
        streetAddressControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(streetAddressControll); });
        var cityControll = this.createGymForm.get('city');
        cityControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(cityControll); });
        var stateControll = this.createGymForm.get('state');
        stateControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(stateControll); });
        var zipCodeControll = this.createGymForm.get('zipCode');
        zipCodeControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(zipCodeControll); });
        var countryControll = this.createGymForm.get('phoneNumber');
        countryControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(countryControll); });
    };
    NewGymComponent.prototype.createNewGym = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = Object.assign({}, this.newGym, this.createGymForm.value);
                console.log(data);
                this.gymService.createGym(data);
                return [2 /*return*/];
            });
        });
    };
    NewGymComponent = __decorate([
        core_1.Component({
            selector: 'app-new-gym',
            templateUrl: './new-gym.component.html',
            styleUrls: ['./new-gym.component.css']
        }),
        __metadata("design:paramtypes", [gym_service_1.GymService,
            forms_1.FormBuilder,
            ErrorMessages_1.ErrorMessages,
            SetError_1.SetError,
            DataObjects_1.DataObjects,
            core_1.ChangeDetectorRef,
            ng_bootstrap_1.NgbModal])
    ], NewGymComponent);
    return NewGymComponent;
}());
exports.NewGymComponent = NewGymComponent;
//# sourceMappingURL=new-gym.component.js.map