/** When using simple types as provider tokens, there is a chance that two 
 * different parts of the application will try to use the same token to indentify 
 * different types, which means that the wrong type of object may be used to resolve
 * dependanices and cause errors. To help work around this, Angular provides the 
 * InjectionToken class, which provides an object wrapper aroung a string value and 
 * can be used to create unique token values. Below we are using the InjectionToken class 
 * to create a token that will be used to identify dependancies on the LogService **/

import { Injectable, InjectionToken } from "@angular/core";

export enum LogLevel {
    DEBUG, INFO, ERROR
}

export const LOG_SERVICE = new InjectionToken('logger');

@Injectable()
export class LogService  {
    minimumLevel: LogLevel = LogLevel.INFO;

    logInfoMessage(message: string) {
        this.logMessage(LogLevel.INFO, message);
    }

    logDebugMessage(message: string) {
        this.logMessage(LogLevel.DEBUG, message);
    }

    logErrorMessage(message: string) {
        this.logMessage(LogLevel.ERROR, message);
    }

    logMessage(level: LogLevel, message: string) {
        if (level >= this.minimumLevel) {
            console.log(`Messsage (${LogLevel[level]})" ${message}`);
        }
    }
}

/**  The constructor for the InjectionToken class accepts a string value that describes 
 * the service, but it is the InjectionToken that will be the token. Dependancies must be declared on the same 
 * InjectionToken that is used to create the provider in the module. 
 * Providing the configuration using the new token **/

@NgModule({
        imports: [],
        declarations: [],
        providers: [ 
            DiscountService, 
            { provide: LOG_SERVICE, useClass: LogService }
     ],
        bootstrap: []
    })
    export class AppModule { }



/** And finally injection the service using the token  */
import { Inject } from "@angular/core";

@Injectable()
export class DiscountService {
    
    private discountValue: number = 10;
    
    constructor(
      @Inject(LOG_SERVICE) private logger: LogService
    ) { }
    
    public get discount(): number {
        return this.discountValue;
    }
    
    public set discount(newValue: number) {
        this.discountValue = newValue || 0;
    }
    
    public applyDiscount(price: number) {
        this.logger.logInfoMessage(`Discount ${this.discount}`
           + ` applied to price: ${price}`);
        return Math.max(price - this.discountValue, 5);
    }
}