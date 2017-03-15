import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ReferenceData } from '../reference-data/reference-data';
import { EnvironmentModel} from './environment.model'
import {REFDATACACHE} from '../reference-data/reference-data-cache'


@Injectable()
export class ConfigService {
    private config: Object = null;
    private env:    Object = null;

    constructor(private http: Http) { }
    /**
     *  @param key - Use to get the configuration token value from an environments specific file
     */
    public getConfig(key: any) {
        return this.config[key];
    }
    /**
     * 
     * @param key -  Use to get the envrionment value. This is used to decide which file to look into for a given configuration request
     */
    public getEnv(key: any) {
        return this.env[key];
    }
   
    /**
     * This method:
     *   a) Loads "env.json" to get the current working environments (e.g.: 'production', 'development')
     *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
     */
    public load() {
        console.log('Configuration file load');
       return new Promise((resolve, reject) => {
            this.http.get('./assets/env.json').map( res => res.json() ).catch((error: any):any => {
                console.log('Configuration file "env.json" could not be read');
                resolve(true);
                return Observable.throw('Configuration file "env.json" could not be read');
            }).subscribe( (environmentModel: EnvironmentModel) => {
                this.env = environmentModel;
                let request:any = null;

                switch (environmentModel.env) {
                    case 'production': {
                        request = this.http.get('./assets/config.' + environmentModel.env + '.json');
                    } break;

                    case 'development': {
                        request = this.http.get('./assets/config.' + environmentModel.env + '.json');
                    } break;

                     case 'test': {
                        request = this.http.get('./assets/config.' + environmentModel.env + '.json');
                    } break;

                     case 'performance': {
                        request = this.http.get('./assets/config.' + environmentModel.env + '.json');
                    } break;

                     case 'QA': {
                        request = this.http.get('./assets/config.' + environmentModel.env + '.json');
                    } break;

                    default: {
                        console.error('environments file is not set or invalid. Using default config file');
                        request = this.http.get('./assets/config.json');
                        //resolve(true);                       
                    } break;
                }

                if (request) {
                    request
                        .map( res => res.json() )
                        .catch((error: any) => {
                            console.error('Error reading ' + environmentModel.env + ' configuration file');
                            resolve(error);
                            return Observable.throw('Error reading ' + environmentModel.env + ' configuration file' || 'Server error');
                        })
                        .subscribe((responseData) => {
                            this.config = responseData;
                            resolve(true);
                        });
                } else {
                    console.error('Env config file "env.json" is not valid');
                    resolve(true);
                }
                            
            });

        });
    }

}