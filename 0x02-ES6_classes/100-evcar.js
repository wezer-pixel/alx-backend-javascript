import Car from './10-car';

/**
 * Represents an Electric Vehicle Car.
 * @extends Car
 */
export default class EVCar extends Car {
  /**
   * Create a new EVCar instance.
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The type of motor used in the car.
   * @param {string} color - The color of the car.
   * @param {number} range - The range of the car in miles.
   */
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  /**
   * Get the range of the car.
   * @returns {number} The range of the car in miles.
   */
  get range() {
    return this._range;
  }

  /**
   * Set the range of the car.
   * @param {number} value - The range of the car in miles.
   */
  set range(value) {
    this._range = value;
  }

  /**
   * Create a clone of the car.
   * @returns {EVCar} A new instance of EVCar.
   */
  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
