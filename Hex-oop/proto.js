class Money {
  constructor(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
  }

  exchangeTo(newCurrency) {
    if (this.currency === newCurrency) {
      return new Money(this.value, this.currency);
    }
    // this.constructor.rates находится в функции-конструкторе
    const newValue = this.value * this.constructor.rates[this.currency][newCurrency];
    return new Money(newValue, newCurrency);
  };

  // Другие методы
}
