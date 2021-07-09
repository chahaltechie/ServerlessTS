"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Importance = exports.Secret = void 0;
const BaseEntity_1 = require("../common/BaseEntity");
class Secret extends BaseEntity_1.BaseEntity {
    constructor(title, description, importance, secrets) {
        super();
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.items = secrets;
    }
}
exports.Secret = Secret;
var Importance;
(function (Importance) {
    Importance[Importance["HIGH"] = 0] = "HIGH";
    Importance[Importance["MEDIUM"] = 1] = "MEDIUM";
    Importance[Importance["LOW"] = 2] = "LOW";
})(Importance = exports.Importance || (exports.Importance = {}));
//# sourceMappingURL=Secret.js.map