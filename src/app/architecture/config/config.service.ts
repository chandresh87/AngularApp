import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { EnvironmentModel } from './environment.model'

/**
 * This service obtains the configuration data from the back end
 * and caches it.
 * @class ConfigService
 */
@Injectable()
export class ConfigService {
    private config: Object = null;
    private env: Object = null;

    constructor(private http: Http) { }
    /**
     *  @param key - Use to get the configuration token value from an environments specific file
     */
    public getConfig(key: any) {
        return this.config[key];
    }
    /**
     * 
     * @param key -  Use to get the environment value. This is used to decide which
     *  file to look into for a given configuration request
     */
    public getEnv(key: any) {
        return this.env[key];
    }
   

    /**
    * Reads a file from the server. The delay, retry count and timeout are all hard-coded
    * because the configuration is what we are reading, so we don't have it yet.
    * @param name - the file to load
    */
     public getConfigFile(name): Promise<any> {
        console.log('ConfigService load ' + name)
        return this.http
            .get(name)
            .retryWhen(error => error.delay(500))
            .retry(3)
            .timeout(5000)
            .toPromise()
     }

    /**
    * Reads the full environment configuration from a file identified by the parameter.
    * @param env this is a string to identify the environment to use
    */
    public getFullConfig(env): Promise<any> {
        switch (env) {
            case 'default':
            case 'production': 
            case 'development':
            case 'test':
            case 'performance':
            case 'QA':{
                return this.getConfigFile('./assets/config.' + env + '.json');
            }
            
            default: {
                console.log('invalid env, ' + env + ' - using default ./assets/config.json')
                return this.getConfigFile('./assets/config.json');
            }
        }
    }

    /**
     *   a) Loads "env.json" to get the name of the current working environments, env, e.g.: 'production', 'development', &c
     *   b) Loads "config.<env>.json" to get all variables for that environment, e.g. file 'config.development.json'
     */
      public loadConfig(){
        return this.getConfigFile('./assets/env.json')
            .then(response => {
                console.log('ConfigService: getting the configuration from ' + response.json().env)
                return this.getFullConfig(response.json().env)
            })
            .catch(error=>{
                console.error('Environment not selected: ./assets/env.json is not read or is invalid. Setting env from ./assets/config.default.json');
                return this.getFullConfig('default')
            })
            .then(response => {
                this.config = response.json()
            })
            .catch(error => {
                console.assert(false, 'ConfigService: error reading the configuration file')
            })
     }


    /**
     *   a) Loads "env.json" to get the name of the current working environments, env, e.g.: 'production', 'development', &c
     *   b) Loads "config.<env>.json" to get all variables for that environment, e.g. file 'config.development.json'
     */
    public load() {
        console.log('Configuration file load');
        return new Promise((resolve, reject) => {
            this.http
                .get('./assets/env.json')
                .map( res => res.json() )
                .catch((error: any):any => {
                        console.log('Configuration file "./assets/env.json" could not be read: ' + error);
                        resolve(true);
                        return Observable.throw('Configuration file "./assets/env.json" could not be read: ' + error);
                     })
                .subscribe( (environmentModel: EnvironmentModel) => {
                        this.env = environmentModel;
                        let request:any = null;

                        switch (environmentModel.env) {
                            case 'production': 
                            case 'development':
                            case 'test':
                            case 'performance':
                            case 'QA':
                                {
                                request = this.http.get('./assets/config.' + environmentModel.env + '.json');
                                } break;

                            default: {
                                console.error('Environment not selected: ./assets/env.json is not set or invalid. Getting config from default, ./assets/config.json');
                                request = this.http.get('./assets/config.json');
                                //resolve(true);                       
                            } break;
                        }

                        console.assert(request, "request is undefined or null!");

                        if (request) {
                            request
                                .map( res => res.json() )
                                .catch((error: any) => {
                                    console.error('Error reading ' + environmentModel.env + ' configuration file: ' + error);
                                    resolve(error);
                                    return Observable.throw('Error reading ' + environmentModel.env + ' configuration file: ' + error || 'Server error: ' + error);
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
        //this.config = environment 
    }

}