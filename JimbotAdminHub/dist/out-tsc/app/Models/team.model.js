"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Team = /** @class */ (function () {
    function Team(teamName, teamDescription, groupMembers) {
        if (groupMembers === void 0) { groupMembers = []; }
        this.teamName = teamName;
        this.teamDescription = teamDescription;
        this.groupMembers = groupMembers;
    }
    return Team;
}());
exports.Team = Team;
//# sourceMappingURL=team.model.js.map