"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var properties_service_1 = require("./properties.service");
describe('PropertiesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [properties_service_1.PropertiesService]
        });
    });
    it('should be created', testing_1.inject([properties_service_1.PropertiesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=properties.service.spec.js.map