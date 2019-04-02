
/**
 * check if root element contains element
 * @param {htmlelement} root
 * @param {htmlelement} n
 * @returns {boolean}
 */
export function contains(root, n) {
  let node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
}
