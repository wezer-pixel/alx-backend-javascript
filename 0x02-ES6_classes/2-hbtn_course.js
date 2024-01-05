/**
 * Represents a Holberton Course.
 */
/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
  /**
   * Creates a new HolbertonCourse.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of this course.
   *
   * @returns {String} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   *
   * @param {String} value - The name of the course.
   * @throws {TypeError} If the name is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Gets the length of this course (in months).
   *
   * @returns {Number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of this course (in months).
   *
   * @param {Number} value - The length of the course.
   * @throws {TypeError} If the length is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Gets the names of students in this course.
   *
   * @returns {String[]} The names of students in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the names of students in this course.
   *
   * @param {String[]} value - The names of students in the course.
   * @throws {TypeError} If students is not an array of strings.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
