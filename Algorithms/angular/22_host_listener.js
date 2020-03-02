/**
    The @HostListener decorator is used to set up an event binding on the host element and is applied to a method.
    For ex:
    @HostBinding('click')
    triggerCustomEvent() {
        // implementation here
    }

    This listing creates an event binding for the click event that invokes the triggerCustomEvent method
    when the mouse button is pressed and released. The triggerCustomEvent method uses the EventEmitter.emit
    method to dispatch the custom event through the output property
**/