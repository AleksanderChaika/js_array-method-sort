'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const a = this[j];
        const b = this[j + 1];

        let compareResult;

        if (typeof compareFunction === 'function') {
          compareResult = Number(compareFunction(a, b));
        } else {
          const sa = String(a);
          const sb = String(b);

          compareResult = sa > sb ? 1 : sa < sb ? -1 : 0;
        }

        if (compareResult > 0) {
          const temp = this[j];

          this[j] = this[j + 1];

          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
