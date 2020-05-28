/**  The class provider's useClaa property specifies the class that will be 
 * instantiated to resolve dependancies. **/

/** Start with Simple Service **/
import { Injectable, InjectionToken } from "@angular/core";

export const LOG_SERVICE = new InjectionToken('logger');
export enum LogLevel {
    DEBUG, INFO, ERROR
}

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

@Injectable()
export class SpecialLogService extends LogSerice {
    constructor() {
        super();
        this.minimumLevel = LogLevel.DEBUG;
    }

    logMessage(level: LogLevel, message: string) {
        if (level >= this.minumumLevel) {
            console.log(`Special Message (${LogLevel[level]}): ${message}`);
        }
    }
}

/**  The SpecialLogService class extends LogService and provides its own implementation of the logMessage **/
@NgModule({
        imports: [],
        declarations: [],
        providers: [ 
            DiscountService, 
            { provide: LOG_SERVICE, useClass: SpecialLogService }
     ],
        bootstrap: []
    })
    export class AppModule { }

    /**  The combination of token and class means that dependencies on the LOG_SERVICE opaque token will 
     * be resolved using a SpecialLogService object. **/