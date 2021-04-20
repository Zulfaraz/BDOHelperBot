"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BDOHelperBotConectDiscord_1 = __importDefault(require("./config/BDOHelperBotConectDiscord"));
const BDOHelperBotConfig_1 = __importDefault(require("./config/BDOHelperBotConfig"));
const BDOHelperBotIndex = new BDOHelperBotConectDiscord_1.default();
BDOHelperBotIndex.BDOHelperBotloginStart(BDOHelperBotConfig_1.default.BDOHelperToken);
