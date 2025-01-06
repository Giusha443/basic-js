const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameMap = new Map(); // Map to track the count of each name
  const result = []; // Array to store the renamed files

  for (const name of names) {
    if (nameMap.has(name)) {
      let k = nameMap.get(name) + 1;
      let newName = `${name}(${k})`;
      while (nameMap.has(newName)) {
        k++;
        newName = `${name}(${k})`;
      }
      nameMap.set(name, k);
      nameMap.set(newName, 0);
      result.push(newName);
    } else {
      nameMap.set(name, 0);
      result.push(name);
    }
  }

  return result;
}

module.exports = {
  renameFiles,
};
