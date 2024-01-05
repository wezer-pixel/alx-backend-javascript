/**
 * Represents a Car.
 * @class
 */
export default class Car {
  /**
   * Create a Car.
   * @constructor
   * @param {string} brand - The brand of the car.
   * @param {string} motor - The motor of the car.
   * @param {string} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  /**
   * Get the brand of the car.
   * @type {string}
   */
  get brand() {
    return this._brand;
  }

  /**
   * Set the brand of the car.
   * @param {string} value - The brand of the car.
   */
  set brand(value) {
    this._brand = value;
  }

  /**
   * Get the motor of the car.
   * @type {string}
   */
  get motor() {
    return this._motor;
  }

  /**
   * Set the motor of the car.
   * @param {string} value - The motor of the car.
   */
  set motor(value) {
    this._motor = value;
  }

  /**
   * Get the color of the car.
   * @type {string}
   */
  get color() {
    return this._color;
  }

  /**
   * Set the color of the car.
   * @param {string} value - The color of the car.
   */
  set color(value) {
    this._color = value;
  }

  /**
   * Get the species of the car.
   * @type {Function}
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Clone the car.
   * @returns {Car} - The cloned car.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
