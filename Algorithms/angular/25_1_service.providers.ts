/** How we usually inject the service 
 * Classes declare dependencies on services using their constructior 
 * arguments. When Angular needs to create a new instance of the class,
 * it inspects the constructor and uses a combination of built-in and 
 * custom services to resolce each argument.
 **/

import { Injectable } from "@angular/core";
import { LogService } from "./25_0_service.providers";

@Injectable()
export class DiscountService {
    private discountValue: number = 10;
    
    constructor(private logger: LogService) { }
    
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

/** And we need to add LogService to the list of providers like below
 * Otherwise we will see the error: NullInjectorError: No provider for LogService!
 **/

@NgModule({
        imports: [],
        declarations: [],
        providers: [ DiscountService, LogService ],
        bootstrap: []
    })
    export class AppModule { }

/**  This is actuall equivalent to this below **/
@NgModule({
        imports: [],
        declarations: [],
        providers: [ 
            DiscountService, 
            { provide: LogService, useClass: LogService }
     ],
        bootstrap: []
    })
    export class AppModule { }