//Model Class to Log messages on serve
export class Log {
    //message property that holds the log information as captured by the components.
    message: any;
    
    constructor (message: any){
        this.message = message;
    }
}