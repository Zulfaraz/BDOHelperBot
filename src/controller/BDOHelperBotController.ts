class BDOHelperBotControllerClass{
    private MSG:any= null
    setOutMSGResponseString(MSG:string=''){
        this.MSG = MSG           
    }
    getOutMSGResponseString(){
        return this.MSG
    }

}
export default BDOHelperBotControllerClass