/** @format */

import BDOHelperBotConectDiscordClass from "./config/BDOHelperBotConectDiscord";
import BDOHelperBotConfig from "./config/BDOHelperBotConfig";

const BDOHelperBotIndex: BDOHelperBotConectDiscordClass = new BDOHelperBotConectDiscordClass();
//constant for the conection for the mongodb cloud atlas
const BDOHelperBotUri =
  BDOHelperBotConfig.BDOHelperBotHost +
  BDOHelperBotConfig.BDOHelperBotUser +
  ":" +
  BDOHelperBotConfig.BDOHelperBotPass +
  BDOHelperBotConfig.BDOHelperBotCluster +
  BDOHelperBotConfig.BDOHelperBotDB +
  BDOHelperBotConfig.BDOHelperBotParams;

BDOHelperBotIndex.BDOHelperBotloginStart(
  BDOHelperBotConfig.BDOHelperToken,
  BDOHelperBotUri,
);
