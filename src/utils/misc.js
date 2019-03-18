/**
 * Omit properties from object
 * @param {object} obj
 * @param {array} fields
 * @return {object}
 */
export function omit(obj, fields) {
  const shallowCopy = {
    ...obj,
  };
  for (let i = 0; i < fields.length; i++) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}


/**
 * Check if variable is object
 * @param {mixed} obj
 * @return {boolean}
 */
export function isObject(obj) {
  return (typeof obj === 'object' && obj !== null);
}


/**
 * Check if variable is number
 * @param {mixed} value
 * @return {boolean}
 */
export function isInteger(value) {
  return typeof value === 'number' &&
    isFinite(value) &&
    Math.floor(value) === value;
};
