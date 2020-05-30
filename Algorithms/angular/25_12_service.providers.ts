/** Dependancy using the Existing Service Provider **/

/** The provider is used to create aliases for services so they can be targeted 
 * using more than one token **/

 /** The provider can be useful when you want to refactor the set of providers 
  * but don't want to eliminate all the obsolete tokens in order to avoid 
  * refactoring the rest of the application. **/

 import { LogService } from "./25_0_service.providers";
 import { LOG_SERVICE, SpecialLogService, LogLevel } from "./25_5_service.providers";
 import { LOG_LEVEL } from "./25_10_service.providers";
 
 @NgModule({
         imports: [],
         declarations: [],
         providers: [ 
             DiscountService, 
             { provide: LOG_LEVEL, useValue: LogLevel.DEBUG },
             { provide: LogService, deps: ['debugLevel'], useFactory: (level) => {
                 let logger = new LogService();
                 logger.minimumLevel = level;
                 return logger;
             } 
         },
      ],
         bootstrap: []
     })
     export class AppModule { }

     /** The token for the new service is the debugLevel and it is aliased to the 
      * provider with the LOG_LEVEL token. Using the either token will result in the dependancy 
      * being resolved with the same value. **/