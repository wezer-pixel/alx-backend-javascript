import Building from './5-building';

/**
 * Represents a sky-high building.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates a new instance of SkyHighBuilding.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Gets the number of floors in the building.
   * @returns {number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Sets the number of floors in the building.
   * @param {number} value - The number of floors.
   */
  set floors(value) {
    this._floors = value;
  }

  /**
   * Generates an evacuation warning message.
   * @returns {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
