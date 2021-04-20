import { config } from 'dotenv'
config()

const BDOHelperBotConfig = {
    BDOHelperToken: process.env.BDOHELPERBOT_TOKEN || ''
}

export default BDOHelperBotConfig