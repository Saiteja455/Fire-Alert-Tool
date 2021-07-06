/**
 * @constant questionsForPath
 * Setting Questions for online mode
 */

const questionsForPath = [
  {
    type: "input",
    name: "file",
    message: "Enter path for file to sync",
    validate(value) {
      if (!value) {
        return "Please enter path";
      }
      return true;
    },
  },
];

/**
 * @exports online
 * @constant
 */
export const questions = {
  questionsForPath,
};
