"use strict";
/** @format */
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
const BDOHelperBotView_1 = __importDefault(require("../views/BDOHelperBotView"));
const BDOHelperBotViewAlert_1 = __importDefault(require("../views/BDOHelperBotViewAlert"));
const BDOHelperBotGenerateToLogSystem_1 = __importDefault(require("./BDOHelperBotGenerateToLogSystem"));
class BDOHelperBotEventsInitializerClass extends discord_js_1.Client {
    constructor() {
        super(...arguments);
        this.BDOHelperBotC = new BDOHelperBotController_1.default();
        this.BDOHelperBotV = new BDOHelperBotView_1.default();
        this.BDOHelperBotVA = new BDOHelperBotViewAlert_1.default();
        this.BDOHelperBotLog = new BDOHelperBotGenerateToLogSystem_1.default();
        this.BDOHelperBotDate = new Date();
        this.BDODATE = this.BDOHelperBotDate.getUTCFullYear() +
            "_" +
            this.BDOHelperBotDate.getUTCMonth() +
            "_" +
            this.BDOHelperBotDate.getUTCDay() +
            "_" +
            this.BDOHelperBotDate.getUTCHours() +
            "_" +
            this.BDOHelperBotDate.getUTCMinutes() +
            "_" +
            this.BDOHelperBotDate.getUTCMilliseconds();
    }
    BDOHelperBotAlertAbstra(BDOQUERY, BDONAMEALERT) {
        this.BDOHelperBotC.set_BDODataQuery(BDOQUERY);
        this.BDOHelperBotC.set_BDODataNameAlert(BDONAMEALERT);
        const BDOHBBMADATA = this.BDOHelperBotC.BDOProcesToJSONAlertInformation();
        const BDOHBBMVAS = this.BDOHelperBotVA.BDOHelperBotBuilderViewAlert(BDOHBBMADATA[0], this.BDOHelperBotC.get_BDODataNameAlert());
    }
    BDOHelperBotMGSEMBED(BDOHBQUERY, BDOHBUSER, BDOHBURLAVATAR) {
        this.BDOHelperBotC.set_BDODataQuery(BDOHBQUERY);
        const BDOHBBMDATA = this.BDOHelperBotC.BDOProcesToJSONDataInformation();
        const BDODATACLEANJSON = BDOHBBMDATA;
        if (BDODATACLEANJSON.filter(Boolean) === null) {
            return;
        }
        const BDOHBBMS = this.BDOHelperBotV.BDOBuilderMessegeEmbedView(BDODATACLEANJSON[0], BDOHBUSER, BDOHBURLAVATAR);
        return BDOHBBMS;
    }
    BDOHelperBotLoginStatus() {
        return this.BDOHelperBotAlertAbstra("StatusAlert", "Login Status");
    }
    BDOHelperBotEventOnReady(BDOHelperBotToken) {
        if (this.login(BDOHelperBotToken)) {
            this.on("ready", () => __awaiter(this, void 0, void 0, function* () {
                return this.BDOHelperBotAlertAbstra("StatusAlert", "Event Ready");
            }));
        }
    }
    BDOHelperBotEventOnMessageStatus() {
        return this.BDOHelperBotAlertAbstra("StatusAlert", "Event Messege");
    }
    BDOHelperBotEventOnMessage(BDOHelperBotToken) {
        if (this.login(BDOHelperBotToken)) {
            this.on("message", (messege) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (messege.author.bot)
                        return;
                    if (messege.content === "Ready") {
                        this.BDOHelperBotEventOnMessageStatus();
                    }
                    this.BDOHelperBotC.set_BDODataTimer(5000);
                    let EMBED = this.BDOHelperBotMGSEMBED(messege.content, messege.author.username, messege.author.avatarURL);
                    messege.channel
                        .send({ embed: EMBED })
                        .then(BDOMGS => BDOMGS.delete({ timeout: this.BDOHelperBotC.get_BDODataTimer() }));
                    messege.delete({ timeout: this.BDOHelperBotC.get_BDODataTimer() });
                }
                catch (error) {
                    this.BDOHelperBotLog.BDOHelperBotGenerateFileLog(error, this.BDODATE, "MessageEmbedError");
                    return (this.BDOHelperBotAlertAbstra("StatusError", error),
                        console.log("\r\n"),
                        console.log("Author: " +
                            messege.author.username +
                            " : Message ID:" +
                            messege.id +
                            "\r\n"));
                }
            }));
        }
    }
}
exports.default = BDOHelperBotEventsInitializerClass;
