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
    BDOHelperBotloginStart(BDOHelperToken, BDOHelperBotUri) {
        if (this.BDOHelperBotConectDiscord.login(BDOHelperToken)) {
            console.log(BDOHelperBotUri);
            this.BDOHelperBotInitialize();
            this.BDOHelperBotloginStatus();
        }
    }
    BDOHelperBotloginStatus() {
        return console.log("The services to BDOHelperBot is On!");
    }
    BDOHelperBotInitialize() {
        this.BDOHelperBotConectDiscord.on("ready", () => __awaiter(this, void 0, void 0, function* () {
            let DataJson = { rol: [{ id: "11456446", name: "Data1" }] };
            for (var data in DataJson) {
                console.log(data.indexOf("rol:id"));
            }
        }));
        this.BDOHelperBotConectDiscord.on('message', (message) => __awaiter(this, void 0, void 0, function* () {
            this.BDOHelperBotController.setOutMSGResponseString(message.content);
            console.log(this.BDOHelperBotController.getOutMSGResponseString());
            if (message.author) {
                message.channel.send(this.BDOHelperBotController.getOutMSGResponseString());
            }
        }));
    }
}
exports.default = BDOHelperBotConectDiscordClass;
