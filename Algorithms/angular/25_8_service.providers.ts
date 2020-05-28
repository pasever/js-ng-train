/** Dependancy using the Value Providers**/

/** The value provider is used when you want to take responsability for creating 
 * the service objects yourself, rather than leaving it to the class provider. 
 * This is also be useful when services are simple types, such as string or number 
 * values. **/

import { LogService } from "./25_0_service.providers";
import { LOG_SERVICE, SpecialLogService, LogLevel } from "./25_5_service.providers";

let logger = new LogService();
logger.minimumLevel = LogLevel.DEBUG;

@NgModule({
        imports: [],
        declarations: [],
        providers: [ 
            DiscountService, 
            { provide: LogService, useValue: logger },
     ],
        bootstrap: []
    })
    export class AppModule { }
    
/**  The value provider is configured to resolve dependancies on the LogService token with 
 * a specific object that has been created and configured outside of the module class. **/