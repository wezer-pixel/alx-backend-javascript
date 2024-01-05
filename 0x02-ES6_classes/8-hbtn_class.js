/**
 * Represents a HolbertonClass.
 */
export default class HolbertonClass {
  /**
   * Creates a new instance of HolbertonClass.
   * @param {number} size - The size of the class.
   * @param {string} location - The location of the class.
   */
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  /**
   * Gets the size of the class.
   * @returns {number} The size of the class.
   */
  get size() {
    return this._size;
  }

  /**
   * Sets the size of the class.
   * @param {number} value - The size of the class.
   */
  set size(value) {
    this._size = value;
  }

  /**
   * Gets the location of the class.
   * @returns {string} The location of the class.
   */
  get location() {
    return this._location;
  }

  /**
   * Sets the location of the class.
   * @param {string} value - The location of the class.
   */
  set location(value) {
    this._location = value;
  }

  /**
   * Converts the HolbertonClass to a primitive value.
   * @param {string} hint - The hint for the conversion.
   * @returns {number|string|HolbertonClass} The converted value.
   */
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
