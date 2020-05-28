/** Dependancy with Multiple Objects **/

import { LOG_SERVICE, SpecialLogService } from "./25_5_service.providers";
import { LogService, LogLevel } from "./25_0_service.providers";

/**  The class provider can be configured to deliver an array of objects 
 * to resolve a dependancy, which can be useful if you want to provide a set 
 * of related services that differ in how they are configured. To provide an array, 
 * multiple class providers are configured using the same token and with the multi 
 * property to true **/

@NgModule({
        imports: [],
        declarations: [],
        providers: [ 
            DiscountService, 
            { provide: LOG_SERVICE, useClass: LogService, multi: true },
            { provide: LOG_SERVICE, useClass: SpecialLogService, multi: true }
     ],
        bootstrap: []
    })
    export class AppModule { }

/**  And we want to inject the service... **/

import { Injectable, Inject } from "@angular/core";

@Injectable()
export class DiscountService {
    private discountValue: number = 10;
    private logger: LogService; 
    
    constructor(@Inject(LOG_SERVICE) loggers: Array<LogService>) { 
        this.logger = loggers.find(l => l.minimumLevel === LogLevel.DEBUG);
    }
    
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