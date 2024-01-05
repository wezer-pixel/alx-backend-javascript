/**
 * Represents a Currency.
 */
export default class Currency {
  /**
   * Creates a new Currency instance.
   * @param {string} code - The code of the currency.
   * @param {string} name - The name of the currency.
   */
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /**
   * Gets the code of the currency.
   * @returns {string} The code of the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the code of the currency.
   * @param {string} value - The code of the currency.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Gets the name of the currency.
   * @returns {string} The name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the currency.
   * @param {string} value - The name of the currency.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Creates the full string representation of this Currency.
   * @returns {string} The full string representation of this Currency.
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
