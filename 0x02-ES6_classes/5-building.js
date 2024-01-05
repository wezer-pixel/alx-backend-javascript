/**
 * Represents a building.
 */
export default class Building {
  /**
   * Creates a new instance of the Building class.
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  /**
   * Gets the square footage of the building.
   * @returns {number} The square footage of the building.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Sets the square footage of the building.
   * @param {number} value - The square footage of the building.
   */
  set sqft(value) {
    this._sqft = value;
  }
}
