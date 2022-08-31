'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
// var expect = require('chai').expect
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const index_1 = require("./index");
const testArray = [
    {
        key1: 1,
        key2: 'a',
        key3: 'one'
    },
    {
        key1: 2,
        key2: 'b',
        key3: 'two'
    },
    {
        key1: 3,
        key2: 'c',
        key3: 'three'
    },
    {
        key1: 4,
        key2: 'c',
        key3: 'three-and-a-half'
    }
];
(0, mocha_1.describe)('ArrayAddUniqueItems', () => {
    (0, mocha_1.it)('should add all given items, which do not have the same given keys. Items with same given keys are to be replaced', () => {
        var _a, _b, _c;
        const ourArray = JSON.parse(JSON.stringify(testArray));
        (0, index_1.default)(ourArray, [
            {
                key1: 1,
                key2: 'a',
                key3: 'uno',
                comment: 'this will replace the original'
            },
            {
                key1: 5,
                key2: 'd',
                key3: 'five',
                comment: 'this will be new since no matching key1 and key2'
            },
            {
                key1: 1,
                key2: 'z',
                key3: 'none',
                comment: 'this will be new since no matching key2'
            }
        ], ['key1', 'key2']);
        (0, chai_1.expect)(ourArray.length).to.equal(6);
        (0, chai_1.expect)((_a = ourArray.find(a => a.key1 === 1 && a.key2 === 'a')) === null || _a === void 0 ? void 0 : _a.key3).to.equal('uno');
        (0, chai_1.expect)((_b = ourArray.find(a => a.key1 === 5 && a.key2 === 'd')) === null || _b === void 0 ? void 0 : _b.key3).to.equal('five');
        (0, chai_1.expect)((_c = ourArray.find(a => a.key1 === 1 && a.key2 === 'z')) === null || _c === void 0 ? void 0 : _c.key3).to.equal('none');
    });
    (0, mocha_1.it)('should tollerate none existing keys', () => {
        var _a, _b, _c;
        const ourArray = JSON.parse(JSON.stringify(testArray));
        (0, index_1.default)(ourArray, [
            {
                key1: 1,
                key2: 'a',
                key3: 'uno',
                comment: 'this will replace the original'
            },
            {
                key1: 5,
                key2: 'd',
                key3: 'five',
                comment: 'this will be new since no matching key1 and key2'
            },
            {
                key1: 1,
                key2: 'z',
                key3: 'none',
                comment: 'this will be new since no matching key2'
            }
        ], ['key1', 'key2', 'key4']);
        (0, chai_1.expect)(ourArray.length).to.equal(6);
        (0, chai_1.expect)((_a = ourArray.find(a => a.key1 === 1 && a.key2 === 'a')) === null || _a === void 0 ? void 0 : _a.key3).to.equal('uno');
        (0, chai_1.expect)((_b = ourArray.find(a => a.key1 === 5 && a.key2 === 'd')) === null || _b === void 0 ? void 0 : _b.key3).to.equal('five');
        (0, chai_1.expect)((_c = ourArray.find(a => a.key1 === 1 && a.key2 === 'z')) === null || _c === void 0 ? void 0 : _c.key3).to.equal('none');
    });
    (0, mocha_1.it)('should work with compare function', () => {
        var _a, _b, _c;
        const ourArray = JSON.parse(JSON.stringify(testArray));
        (0, index_1.default)(ourArray, [
            {
                key1: 1,
                key2: 'a',
                key3: 'uno',
                comment: 'this will replace the original'
            },
            {
                key1: 5,
                key2: 'd',
                key3: 'five',
                comment: 'this will be new since no matching key1 and key2'
            },
            {
                key1: 1,
                key2: 'z',
                key3: 'none',
                comment: 'this will be new since no matching key2'
            }
        ], [], (a, b) => a.key1 === b.key1 && a.key2 === b.key2);
        (0, chai_1.expect)(ourArray.length).to.equal(6);
        (0, chai_1.expect)((_a = ourArray.find(a => a.key1 === 1 && a.key2 === 'a')) === null || _a === void 0 ? void 0 : _a.key3).to.equal('uno');
        (0, chai_1.expect)((_b = ourArray.find(a => a.key1 === 5 && a.key2 === 'd')) === null || _b === void 0 ? void 0 : _b.key3).to.equal('five');
        (0, chai_1.expect)((_c = ourArray.find(a => a.key1 === 1 && a.key2 === 'z')) === null || _c === void 0 ? void 0 : _c.key3).to.equal('none');
    });
});
