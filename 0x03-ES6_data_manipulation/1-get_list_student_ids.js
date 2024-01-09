/**
 * Retrieves an array of student IDs from an array of student objects.
 * @param {Array} students - The array of student objects.
 * @returns {Array} - An array of student IDs.
 */
export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
