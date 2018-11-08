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
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
require("rxjs/add/operator/map");
var propHeader = new Headers();
propHeader.append("Content-Type", "application/json");
var PersonService = /** @class */ (function () {
    function PersonService(http, router) {
        this.http = http;
        this.router = router;
        this.newPersonRequest = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/persons/new";
        this.getPersons = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/persons?startIndex=0&maxResults" + "=50";
        this.getEditPersonURL = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/persons/";
        this.saveEditPersonURL = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/persons/";
    }
    PersonService.prototype.createPersonPost = function (data) {
        var _this = this;
        console.log(data);
        fetch(this.newPersonRequest, {
            method: "POST",
            headers: propHeader,
            mode: 'cors',
            body: JSON.stringify(data) //'{"email": "skippy12345@merrybandofpirates.gov","password": "ILoveAnchovies123", "phone": "(555)-555-5555"}'
        })
            .then(function (res) {
            console.log(res.json());
            _this.router.navigate(['/person']);
        })
            .catch(function (err) { return console.error(err); });
    };
    PersonService.prototype.personPropertyNamePost = function (data) {
        var _this = this;
        var propertyName = data;
        fetch("http://jimbotcentral.com:8080/gatekeeper/rest/v1/properties/person." + propertyName + ".bool", { method: "POST" })
            .then(function (res) {
            console.log(res.json());
            _this.router.navigate(['/person']);
        });
    };
    PersonService.prototype.getPersonsData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("get person ran");
                        return [4 /*yield*/, fetch(this.getPersons, {
                                method: "GET",
                                headers: propHeader,
                                mode: 'cors'
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    PersonService.prototype.addPropApiCall = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //console.log(data);
                Object.keys(data).map(function (e) { return __awaiter(_this, void 0, void 0, function () {
                    var prop, value, response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                prop = "" + e;
                                value = data[e];
                                console.log(value);
                                if (!(e != "userID" && e != "undefined" || undefined)) return [3 /*break*/, 2];
                                return [4 /*yield*/, fetch("http://jimbotcentral.com:8080/gatekeeper/rest/v1/persons/" + value[1] + "/properties/person." + value[3] + "." + value[0], {
                                        method: "POST",
                                        headers: propHeader,
                                        body: JSON.stringify({ propertyValue: value[2] }),
                                        mode: 'cors'
                                    })];
                            case 1:
                                response = _a.sent();
                                return [2 /*return*/, console.log(response.json())];
                            case 2: return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    PersonService.prototype.getEditUser = function (userID) {
        var url = "" + this.getEditPersonURL + userID;
        return this.http.get(url).map(this.extractData);
    };
    PersonService.prototype.saveEditUser = function (userID, prop) {
        return __awaiter(this, void 0, void 0, function () {
            var data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = prop.propertyValue.toString();
                        if (!userID) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetch(this.saveEditPersonURL + userID + "/properties/" + prop.propertyName, {
                                method: "PUT",
                                headers: propHeader,
                                body: JSON.stringify({ propertyValue: data }),
                                mode: 'cors'
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, console.log(response.json())];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    PersonService.prototype.extractData = function (data) {
        //console.log(data);
        return data || {};
    };
    PersonService.prototype.newPropApiCall = function (newPropData) {
        var _this = this;
        var newPropName = newPropData.newPropName;
        var realmType = newPropData.realmType;
        var newPropType = newPropData.newPropType;
        var newPropDescription = newPropData.newPropDescription;
        fetch("http://jimbotcentral.com:8080/gatekeeper/rest/v1/properties/" + realmType + "." + newPropName + "." + newPropType + "?description=" + newPropDescription, {
            method: "POST",
            headers: propHeader
        })
            .then(function (res) {
            console.log(res.json());
            _this.router.navigate(['/person']);
        })
            .catch(function (err) { return console.error(err); });
        ;
    };
    PersonService.prototype.customProp = function (customProperty) {
        this.personPropertyNamePost(customProperty);
    };
    PersonService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], PersonService);
    return PersonService;
}());
exports.PersonService = PersonService;
//# sourceMappingURL=person-service.service.js.map