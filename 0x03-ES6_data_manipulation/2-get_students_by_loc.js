/**
 * Returns an array of students filtered by location.
 *
 * @param {Array} students - The array of students.
 * @param {string} city - The location to filter by.
 * @returns {Array} - The filtered array of students.
 */
export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}
