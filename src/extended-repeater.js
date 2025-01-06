const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = "";
  const repeatTimes = options.repeatTimes || 1;
  const addition = options.hasOwnProperty("addition")
    ? String(options.addition)
    : "";
  const separator = options.separator || "+";
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || "|";

  let additionPart = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  result = Array(repeatTimes)
    .fill(str + additionPart)
    .join(separator);

  return result;
}

module.exports = {
  repeater,
};
