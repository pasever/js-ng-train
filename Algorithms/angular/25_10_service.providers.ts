/**  Dependancy using the Facotry Provider **/

/**  The factory provider uses a function to create the object 
 * required to resolve the dependancy. **/

import { LogService } from "./25_0_service.providers";
import { LOG_SERVICE, SpecialLogService, LogLevel } from "./25_5_service.providers";

@NgModule({
        imports: [],
        declarations: [],
        providers: [ 
            DiscountService, 
            { provide: LogService, useFactory: () => {
                let logger = new LogService();
                logger.minimumLevel = LogLevel.DEBUG;
                return logger;
            } 
        },
     ],
        bootstrap: []
    })
    export class AppModule { }

    /**  The function recieves no arguments and just creates a new LogService object. 
     * The real flexibility of this provider comes when the deps property is used, which 
     * allows for dependancies to be created on other services. **/

    import { Injectable, InjectionToken } from "@angular/core";

    export const LOG_SERVICE = new InjectionToken('logger');
    export const LOG_LEVEL = new InjectionToken('log_level');
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

    /** Defined a value provider that created a service using the LOG_LEVEL token and used 
     * that service in the factory function that creates the LogService object. **/

    // import { LogService } from "./25_0_service.providers";
    // import { LOG_SERVICE, SpecialLogService, LogLevel, LOG_LEVEL } from "./25_5_service.providers";

    @NgModule({
            imports: [],
            declarations: [],
            providers: [ 
                DiscountService, 
                { provide: LOG_LEVEL, useValue: LogLevel.DEBUG },
                { provide: LogService, deps: [ LOG_LEVEL ], useFactory: (level) => {
                        let logger = new LogService();
                        logger.minimumLevel = level;
                        return logger;
                    } 
                }            
            },
        ],
            bootstrap: []
        })
        export class AppModule { }

        /** The LOG_LEVEL token is used by a value provider to define a simple value as a service.
         * The factory provider specifies this token in its deps array, which the dependancy injection 
         * sytem resolves and provides as an argument to the factory function, which uses it to set the minumumLevel
         * property of a new LogService object. **/