"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var gym_service_1 = require("./gym.service");
describe('GymService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [gym_service_1.GymService]
        });
    });
    it('should be created', testing_1.inject([gym_service_1.GymService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=gym.service.spec.js.map