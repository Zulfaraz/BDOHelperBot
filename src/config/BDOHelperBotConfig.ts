import { config } from 'dotenv'
config()

const BDOHelperBotConfig = {
    //TOKEN DISCORD BOT
    BDOHelperToken: process.env.BDOHELPERBOT_TOKEN || '',
    //PARAMS FOR THE CONECTION FOR THE MONGODB CLOUD ATLAS
    BDOHelperBotHost: process.env.BDOHELPERBOT_HOST || '',
    BDOHelperBotCluster: process.env.BDOHELPERBOT_CLUTER_NAME || '',
    BDOHelperBotDB: process.env.BDOHELPERBOT_DB_NAME || '',
    BDOHelperBotUser: process.env.BDOHELPERBOT_USER || '',
    BDOHelperBotPass: process.env.BDOHELPERBOT_PASS || '',
    BDOHelperBotParams: process.env.BDOHELPERBOT_PARAMS || ''
}

export default BDOHelperBotConfig