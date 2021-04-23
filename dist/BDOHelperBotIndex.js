"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BDOHelperBotConectDiscord_1 = __importDefault(require("./config/BDOHelperBotConectDiscord"));
const BDOHelperBotConfig_1 = __importDefault(require("./config/BDOHelperBotConfig"));
const BDOHelperBotIndex = new BDOHelperBotConectDiscord_1.default();
//constant for the conection for the mongodb cloud atlas
const BDOHelperBotUri = BDOHelperBotConfig_1.default.BDOHelperBotHost +
    BDOHelperBotConfig_1.default.BDOHelperBotUser + ':' +
    BDOHelperBotConfig_1.default.BDOHelperBotPass +
    BDOHelperBotConfig_1.default.BDOHelperBotCluster +
    BDOHelperBotConfig_1.default.BDOHelperBotDB +
    BDOHelperBotConfig_1.default.BDOHelperBotParams;
BDOHelperBotIndex.BDOHelperBotloginStart(BDOHelperBotConfig_1.default.BDOHelperToken, BDOHelperBotUri);
