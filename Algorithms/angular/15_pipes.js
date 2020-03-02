/**
    Async Pipe can be used to consume Observable objects directly in a view, selecting the last object received
    from the event sequence. This is an impure pipe, because its changes are driven from outside of the view
    in which it is used, meaning that its transform method will be called often, even if a new event has not
    been received form the Observable.
**/