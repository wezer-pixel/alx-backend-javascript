/**
 * Creates a new Int8 typed array with the specified length, sets the value at the given position, and returns it.
 * Throws an error if the position is outside the range of the array.
 *
 * @param {number} length - The length of the typed array.
 * @param {number} position - The position at which to set the value.
 * @param {number} value - The value to set at the specified position.
 * @returns {DataView} - The created Int8 typed array.
 * @throws {Error} - If the position is outside the range of the array.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
