import Discord,{ Client } from 'discord.js'
import { config } from 'dotenv'
config()

const BDOHelperBot: Client = new Client()

BDOHelperBot.on('ready', async() =>{
    console.log("The servicies of the BDOHelperBot is on!")
})

BDOHelperBot.login(process.env.BDOHElPERBOT_TOKEN)