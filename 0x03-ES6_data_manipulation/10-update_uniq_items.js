/**
 * Updates the unique items in a Map object.
 * If the input is not a Map object, an error is thrown.
 * @param {Map} map - The Map object to update.
 * @throws {Error} If the input is not a Map object.
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
