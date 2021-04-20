import BDOHelperBotConectDiscordClass from "./config/BDOHelperBotConectDiscord"
import BDOHelperBotConfig from "./config/BDOHelperBotConfig"

const BDOHelperBotIndex: BDOHelperBotConectDiscordClass = new BDOHelperBotConectDiscordClass()

BDOHelperBotIndex.BDOHelperBotloginStart(BDOHelperBotConfig.BDOHelperToken)
