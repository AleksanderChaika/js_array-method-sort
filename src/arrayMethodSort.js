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

        if (compareFunction) {
          compareResult = compareFunction(a, b);
        } else {
          compareResult = String(a) > String(b) ? 1 : -1;
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
