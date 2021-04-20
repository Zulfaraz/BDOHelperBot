import BDOHelperBotConfig from "./BDOHelperBotConfig"
import Discord,{ Client,Message } from 'discord.js'
import BDOHelperBotControllerClass from "../controller/BDOHelperBotController"

class BDOHelperBotConectDiscordClass extends Client {
    private BDOHelperBotConectDiscord: Client = new Client()    
    private BDOHelperBotController: BDOHelperBotControllerClass = new BDOHelperBotControllerClass()
    BDOHelperBotloginStart(BDOHelperToken:any) {        
        if(this.BDOHelperBotConectDiscord.login(BDOHelperToken)){
            this.BDOHelperBotInitialize()
            this.BDOHelperBotloginStatus() 
        }                          
    }
    BDOHelperBotloginStatus(){
        return console.log("The services to BDOHelperBot is On!")       
    }
    BDOHelperBotInitialize(){
        this.BDOHelperBotConectDiscord.on('message',async(message:Message) => {
            this.BDOHelperBotController.setOutMSGResponseString(message.content)
            console.log(this.BDOHelperBotController.getOutMSGResponseString())
        })
    }
    
}
export default BDOHelperBotConectDiscordClass