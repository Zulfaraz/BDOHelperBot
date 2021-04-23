import BDOHelperBotConfig from "./BDOHelperBotConfig"
import Discord,{ Client,Message,Collection, MessageCollector, Guild } from 'discord.js'
import BDOHelperBotControllerClass from "../controller/BDOHelperBotController"
import { read } from "node:fs"

class BDOHelperBotConectDiscordClass extends Client {
    private BDOHelperBotConectDiscord: Client = new Client()      
    private BDOHelperBotController: BDOHelperBotControllerClass = new BDOHelperBotControllerClass()
    
    BDOHelperBotloginStart(BDOHelperToken:any,BDOHelperBotUri:any) {        
        if(this.BDOHelperBotConectDiscord.login(BDOHelperToken)){
            console.log(BDOHelperBotUri)
            this.BDOHelperBotInitialize()
            this.BDOHelperBotloginStatus() 
        }                          
    }

    BDOHelperBotloginStatus(){
        return console.log("The services to BDOHelperBot is On!")       
    }

    BDOHelperBotInitialize(){
        this.BDOHelperBotConectDiscord.on("ready",async()=>{  
            let DataJson = {rol:[{id:"11456446",name:"Data1"}]}     
            for(var data in DataJson){
                console.log(data.indexOf("rol:id"))
            }   
            
        })
        this.BDOHelperBotConectDiscord.on('message',async(message:Message) => {
            this.BDOHelperBotController.setOutMSGResponseString(message.content)
            console.log(this.BDOHelperBotController.getOutMSGResponseString())
           
            if (message.author){ message.channel.send(this.BDOHelperBotController.getOutMSGResponseString())
       } })
    }
    
}
export default BDOHelperBotConectDiscordClass