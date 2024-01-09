/**
 * Updates the grades of students based on their city.
 *
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter the students by.
 * @param {Array} newGrades - The array of new grades to update.
 * @returns {Array} - The array of updated student objects with their grades updated.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };

  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || defaultGrade).grade,
      }));
  }
  return [];
}
