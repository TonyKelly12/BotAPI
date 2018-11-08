"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var teams_service_1 = require("./teams.service");
describe('TeamsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [teams_service_1.TeamsService]
        });
    });
    it('should be created', testing_1.inject([teams_service_1.TeamsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=teams.service.spec.js.map