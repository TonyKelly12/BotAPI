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
var TeamsService = /** @class */ (function () {
    function TeamsService(http, router) {
        this.http = http;
        this.router = router;
        this.newTeamRequest = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/teams/new";
        this.getTeams = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/teams?startIndex=0&maxResults=50";
        this.baseTeamURL = "http://jimbotcentral.com:8080/gatekeeper/rest/v1/teams/";
    }
    TeamsService.prototype.createTeam = function (data) {
        var _this = this;
        console.log(data);
        fetch(this.newTeamRequest, {
            method: "POST",
            headers: propHeader,
            mode: 'cors',
            body: JSON.stringify(data) //'{"email": "skippy12345@merrybandofpirates.gov","password": "ILoveAnchovies123", "phone": "(555)-555-5555"}'
        })
            .then(function (res) {
            console.log(res.json());
            _this.router.navigate(['/teams']);
        })
            .catch(function (err) { return console.error(err); });
    };
    TeamsService.prototype.getTeamData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("get person ran");
                        return [4 /*yield*/, fetch(this.getTeams, {
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
    TeamsService.prototype.getEditTeam = function (teamID) {
        var url = "" + this.baseTeamURL + teamID;
        return this.http.get(url).map(this.extractData);
    };
    TeamsService.prototype.extractData = function (data) {
        //console.log(data);
        return data || {};
    };
    TeamsService.prototype.saveEditTeam = function (teamID, prop) {
        return __awaiter(this, void 0, void 0, function () {
            var data, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = prop.propertyValue.toString();
                        if (!teamID) return [3 /*break*/, 2];
                        return [4 /*yield*/, fetch(this.baseTeamURL + teamID + "/properties/" + prop.propertyName, {
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
    TeamsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, router_1.Router])
    ], TeamsService);
    return TeamsService;
}());
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams.service.js.map