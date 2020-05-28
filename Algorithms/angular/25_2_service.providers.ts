/**  All providers rely on a token, which Angular uses to identify the 
 * dependancy that the provider can resolve. The simplest approach 
 * is to use a class as the token is below **/

@NgModule({
        imports: [],
        declarations: [],
        providers: [ 
            DiscountService, 
            { provide: "logger", useClass: LogService }
     ],
        bootstrap: []
    })
    export class AppModule { }

/**  In the listing the provide property of the new project is set 
 * to logger. Angular automatically match providers whose token is a class 
 * but needs some additional help for other token types.
*/

import { Injectable, Inject } from "@angular/core";
import { LogService } from "./25_0_service.providers";
@Injectable()
export class DiscountService {
    
    private discountValue: number = 10;
    
    constructor(
      @Inject("logger") private logger: LogService
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

/**
 * The @Injector decorator is applied to the constructor argument and used to 
 * specify the token that should be used to resolve the dependancy. When Angular
 * need to create an instance of the DiscountSerive class, it will inspect the constructor 
 * and use the @Inject decorator argument to select the provider that will be used to resolve 
 * the dependancy, resolving the dependancy on the LogService class.
 */
