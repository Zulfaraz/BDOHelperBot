"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BDOHelperBotConectDiscord_1 = __importDefault(require("../config/BDOHelperBotConectDiscord"));
const BDOHelperBotController_1 = __importDefault(require("../controller/BDOHelperBotController"));
const BDOHelperBotModel = new BDOHelperBotConectDiscord_1.default();
class BDOHelperBotModelClass {
    constructor() {
        this.BDOHelperBotModelController = new BDOHelperBotController_1.default();
    }
}
exports.default = BDOHelperBotModelClass;
