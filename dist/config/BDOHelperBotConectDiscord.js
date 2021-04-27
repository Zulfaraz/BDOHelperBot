"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @format */
const BDOHelperBotEventsInitializer_1 = __importDefault(require("./BDOHelperBotEventsInitializer"));
class BDOHelperBotConectDiscordClass {
    constructor() {
        this.BDHelperBotEvent = new BDOHelperBotEventsInitializer_1.default();
    }
    BDOHelperBotloginStart(BDOHelperToken, BDOHelperBotUri) {
        this.BDHelperBotEvent.BDOHelperBotLoginStatus();
        this.BDHelperBotEvent.BDOHelperBotEventOnReady(BDOHelperToken);
        this.BDHelperBotEvent.BDOHelperBotEventOnMessage(BDOHelperToken);
    }
}
exports.default = BDOHelperBotConectDiscordClass;
