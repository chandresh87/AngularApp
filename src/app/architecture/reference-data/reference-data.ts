import { ReferenceDataType } from './reference-data.enum';

export class ReferenceData {
    type: ReferenceDataType;
    id: string;
    start_Date: string;
    end_Date: string;
    values: string;
    constructor() {
        this.type = undefined;
        this.id = undefined;
        this.start_Date = undefined;
        this.end_Date = undefined;
        this.values = undefined;
    }
}


