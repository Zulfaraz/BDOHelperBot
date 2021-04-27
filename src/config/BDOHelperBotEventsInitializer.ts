/** @format */

import { timeStamp } from "console";
import Discord, { Client, Message } from "discord.js";
import BDOHelperBotControllerClass from "../controller/BDOHelperBotController";
import BDOHelperBotView from "../views/BDOHelperBotView";
import BDOHelperBotViewAlert from "../views/BDOHelperBotViewAlert";
import BDOHelperBotGenerateToLogsSystemClass from "./BDOHelperBotGenerateToLogSystem";
import { MessageEmbed } from "discord.js";

class BDOHelperBotEventsInitializerClass extends Client {
  private BDOHelperBotC = new BDOHelperBotControllerClass();
  private BDOHelperBotV = new BDOHelperBotView();
  private BDOHelperBotVA = new BDOHelperBotViewAlert();
  private BDOHelperBotLog = new BDOHelperBotGenerateToLogsSystemClass();
  private BDOHelperBotDate = new Date();
  private BDODATE =
    this.BDOHelperBotDate.getUTCFullYear() +
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

  BDOHelperBotAlertAbstra(BDOQUERY: any, BDONAMEALERT: any) {
    this.BDOHelperBotC.set_BDODataQuery(BDOQUERY);
    this.BDOHelperBotC.set_BDODataNameAlert(BDONAMEALERT);
    const BDOHBBMADATA = this.BDOHelperBotC.BDOProcesToJSONAlertInformation();
    const BDOHBBMVAS = this.BDOHelperBotVA.BDOHelperBotBuilderViewAlert(
      BDOHBBMADATA[0],
      this.BDOHelperBotC.get_BDODataNameAlert(),
    );
  }

  BDOHelperBotMGSEMBED(BDOHBQUERY: any, BDOHBUSER?: any, BDOHBURLAVATAR?: any) {
    this.BDOHelperBotC.set_BDODataQuery(BDOHBQUERY);
    const BDOHBBMDATA = this.BDOHelperBotC.BDOProcesToJSONDataInformation();
    const BDODATACLEANJSON: string[] = BDOHBBMDATA;
    if (BDODATACLEANJSON.filter(Boolean) === null) {
      return;
    }
    const BDOHBBMS = this.BDOHelperBotV.BDOBuilderMessegeEmbedView(
      BDODATACLEANJSON[0],
      BDOHBUSER,
      BDOHBURLAVATAR,
    );
    return BDOHBBMS;
  }
  BDOHelperBotLoginStatus() {
    return this.BDOHelperBotAlertAbstra("StatusAlert", "Login Status");
  }
  BDOHelperBotEventOnReady(BDOHelperBotToken: any) {
    if (this.login(BDOHelperBotToken)) {
      this.on("ready", async () => {
        return this.BDOHelperBotAlertAbstra("StatusAlert", "Event Ready");
      });
    }
  }
  BDOHelperBotEventOnMessageStatus() {
    return this.BDOHelperBotAlertAbstra("StatusAlert", "Event Messege");
  }
  BDOHelperBotEventOnMessage(BDOHelperBotToken: any) {
    if (this.login(BDOHelperBotToken)) {
      this.on("message", async (messege: Message) => {
        try {
          if (messege.author.bot) return;
          if (messege.content === "Ready") {
            this.BDOHelperBotEventOnMessageStatus();
          }
          this.BDOHelperBotC.set_BDODataTimer(5000);
          let EMBED = this.BDOHelperBotMGSEMBED(
            messege.content,
            messege.author.username,
            messege.author.avatarURL,
          );

          messege.channel
            .send({ embed: EMBED })
            .then(BDOMGS =>
              BDOMGS.delete({ timeout: this.BDOHelperBotC.get_BDODataTimer() }),
            );
          messege.delete({ timeout: this.BDOHelperBotC.get_BDODataTimer() });
        } catch (error) {
          this.BDOHelperBotLog.BDOHelperBotGenerateFileLog(
            error,
            this.BDODATE,
            "MessageEmbedError",
          );
          return (
            this.BDOHelperBotAlertAbstra("StatusError", error),
            console.log("\r\n"),
            console.log(
              "Author: " +
                messege.author.username +
                " : Message ID:" +
                messege.id +
                "\r\n",
            )
          );
        }
      });
    }
  }
}
export default BDOHelperBotEventsInitializerClass;
