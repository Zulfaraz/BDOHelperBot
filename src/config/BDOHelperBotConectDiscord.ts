/** @format */
import BDOHelperBotEventsInitializerClass from "./BDOHelperBotEventsInitializer";
class BDOHelperBotConectDiscordClass {
  private BDHelperBotEvent = new BDOHelperBotEventsInitializerClass();
  BDOHelperBotloginStart(BDOHelperToken: any, BDOHelperBotUri: any) {
    this.BDHelperBotEvent.BDOHelperBotLoginStatus();
    this.BDHelperBotEvent.BDOHelperBotEventOnReady(BDOHelperToken);
    this.BDHelperBotEvent.BDOHelperBotEventOnMessage(BDOHelperToken);
  }
}
export default BDOHelperBotConectDiscordClass;
