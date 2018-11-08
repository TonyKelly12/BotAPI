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
var auth_service_1 = require("../../Services/auth.service");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var data_model_service_service_1 = require("../../data-model-service.service");
var SetError_1 = require("../../SetError");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, fb, ds, Error) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.ds = ds;
        this.Error = Error;
        this.errorMessage = '';
        this.successMessage = '';
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userIDControll = this.registerForm.get('email');
        userIDControll.valueChanges.subscribe(function (value) { return _this.Error.setErrorMessage(userIDControll); });
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', forms_1.Validators.required, forms_1.Validators.email],
            password: ['', forms_1.Validators.required],
            uid: ['',],
            username: ['',],
            first_name: ['',],
            last_name: [''],
            phone: [''],
            height: [''],
            weight: [''],
            isMemberOf: [true],
            isStaffOf: [true],
            gymID: ['303'],
        });
    };
    RegisterComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryTwitterLogin = function () {
        var _this = this;
        this.authService.doTwitterLogin()
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/home']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryRegister = function (value) {
        var _this = this;
        console.log(value);
        var initUser = this.ds.newPerson();
        this.authService.doRegister(value)
            .then(function (res) {
            var formData = Object.assign({}, initUser, _this.registerForm.value);
            console.log(res.uid);
            formData.uid = res.uid;
            console.log(formData);
            _this.authService.updateNewUser(formData);
            _this.errorMessage = "";
            _this.successMessage = "Your account has been created";
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = "";
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css']
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            forms_1.FormBuilder,
            data_model_service_service_1.DataModelServiceService,
            SetError_1.SetError])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map