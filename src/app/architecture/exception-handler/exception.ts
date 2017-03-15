
/**
 * Base exception class with errorCode:number and message: string property
 */
export class Exception{
    
    private errorCode : number = -1
    private message: string = 'error occured'
    
    constructor(errorCode : number, message: string){
        this.errorCode = errorCode
        this.message = message
    }
    
    getMessage(): string{
        return this.message
    }

    getErrorCode(): number{
        return this.errorCode
    }

    toString(): string{
        return "Error Code = " + this.errorCode + ", message = " + this.message
    }
}