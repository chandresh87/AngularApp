import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SerializationHelper } from './SerializationHelper'
import { JsonProperty } from './JsonMetaData'

describe('SerializationHelper Test', () => {

    let DeSerilzedObject: Person;
    let jsonString: String;

    beforeEach(() => {

        let jsonString = '{"name":"Mark","surname":"Galea","age":30,"address":[{"firstLine":"Some where","secondLine":"Over Here","city":"In This City"}]}';

        DeSerilzedObject = SerializationHelper.deserialize(Person, {
            "name1": "Mark",
            "surname": "Galea",
            "age": 30,
            "address": [{
                "firstLine": "Some where",
                "secondLine": "Over Here",
                "city": "In This City"
            }]
        });

    });

    it('checking Address object is constructed', () => expect(1 == DeSerilzedObject.address.length).toBe(true));
    it('checking object value', () => expect("Mark" == DeSerilzedObject.name).toBe(true));
});


export class Person {
    @JsonProperty('name1')
    name: string;
    surname: string;
    age: number;

    @JsonProperty<Address>({ name: 'address', clazz: Address })
    address: Address[];
    constructor() {
        this.name = undefined;
        this.surname = undefined;
        this.age = undefined;
        this.address = undefined;
    }


}

export class Address {

    firstLine: string;

    secondLine: string;
    city: string;
}