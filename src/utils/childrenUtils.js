
/**
 * Tests if children are nil
 * @param {Object} children The children prop of a component.
 * @returns {Boolean}
 */
export const isChildrenNil = children => children === null
    || children === undefined
    || (Array.isArray(children) && children.length === 0)