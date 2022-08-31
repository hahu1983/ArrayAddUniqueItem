"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ArrayAddUnique(mainArr, addArr, uniqueFields, testFkt) {
    addArr.forEach((aa, index) => {
        let r = mainArr.find((a) => uniqueFields.every(u => aa[u] === a[u]) && (!testFkt || testFkt(a, aa)));
        if (r) {
            mainArr[index] = aa;
        }
        else {
            mainArr.push(aa);
        }
    });
    return mainArr;
}
exports.default = ArrayAddUnique;
