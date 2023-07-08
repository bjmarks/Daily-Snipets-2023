class Safe {
    #value: string | undefined; // Private fields start with a # character. Sometimes we call these private names.
    set value(Value: string) {} // Only accepts strings!
    get value(): string | undefined { // Must check for 'undefined'!
        return this.#value;
    }
}