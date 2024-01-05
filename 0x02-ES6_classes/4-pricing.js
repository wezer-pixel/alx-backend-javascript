import Currency from './3-currency';

/**
 * Represents a pricing object.
 */
export default class Pricing {
  /**
   * Creates a new Pricing object.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Gets the amount of the pricing.
   * @returns {number} The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Sets the amount of the pricing.
   * @param {number} value - The amount of the pricing.
   * @throws {TypeError} If the value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Gets the currency of the pricing.
   * @returns {Currency} The currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets the currency of the pricing.
   * @param {Currency} value - The currency of the pricing.
   * @throws {TypeError} If the value is not an instance of Currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  /**
   * Displays the full price including the amount, currency name, and currency code.
   * @returns {string} The full price.
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Converts the price using the given conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted price.
   * @throws {TypeError} If the amount or conversionRate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
