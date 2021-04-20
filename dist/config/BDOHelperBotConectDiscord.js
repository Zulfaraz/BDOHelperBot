"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const BDOHelperBotController_1 = __importDefault(require("../controller/BDOHelperBotController"));
class BDOHelperBotConectDiscordClass extends discord_js_1.Client {
    constructor() {
        super(...arguments);
        this.BDOHelperBotConectDiscord = new discord_js_1.Client();
        this.BDOHelperBotController = new BDOHelperBotController_1.default();
    }
    BDOHelperBotloginStart(BDOHelperToken) {
        if (this.BDOHelperBotConectDiscord.login(BDOHelperToken)) {
            this.BDOHelperBotInitialize();
            this.BDOHelperBotloginStatus();
        }
    }
    BDOHelperBotloginStatus() {
        return console.log("The services to BDOHelperBot is On!");
    }
    BDOHelperBotInitialize() {
        this.BDOHelperBotConectDiscord.on('message', (message) => __awaiter(this, void 0, void 0, function* () {
            this.BDOHelperBotController.setOutMSGResponseString(message.content);
            console.log(this.BDOHelperBotController.getOutMSGResponseString());
        }));
    }
}
exports.default = BDOHelperBotConectDiscordClass;
