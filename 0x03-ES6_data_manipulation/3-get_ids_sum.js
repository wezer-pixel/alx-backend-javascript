/**
 * Calculates the sum of student IDs.
 *
 * @param {Array} students - The array of student objects.
 * @returns {number} - The sum of student IDs.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
