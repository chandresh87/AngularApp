/* This class is used to hold the reponse message body and response header from the HTTP call */
export class ResponseEntity {

    /* Response Body*/
    body: any
    /* Response Header*/
    header: any;

    /* Return Response Body*/
    public getBody(): any {
        return this.body;

    }
    /* Set Response Body*/
    public setBody(bodyObj: any) {
        this.body = bodyObj;

    }
    /* Return Response Header*/
    public getHeader() {
        return this.header;

    }
    /* Set Response Header*/
    public setHeader(headerObj) {
        this.header = headerObj;
    }

}