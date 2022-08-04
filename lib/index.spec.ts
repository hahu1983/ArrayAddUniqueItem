'use strict'
// var expect = require('chai').expect
import { expect } from 'chai'
import { describe, it } from 'mocha'
import aaui from './index'

interface TA {
  key1: any,
  key2: any,
  key3: any,
  comment?: string
}

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
]

describe('ArrayAddUniqueItems', () => {
  it ('should add all given items, which do not have the same given keys. Items with same given keys are to be replaced', () => {
    const ourArray = JSON.parse(JSON.stringify(testArray)) as TA[]
    aaui(ourArray, [
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
    ], ['key1', 'key2'])
    expect(ourArray.length).to.equal(6)
    expect(ourArray.find(a => a.key1 === 1 && a.key2 === 'a')?.key3).to.equal('uno')
    expect(ourArray.find(a => a.key1 === 5 && a.key2 === 'd')?.key3).to.equal('five')
    expect(ourArray.find(a => a.key1 === 1 && a.key2 === 'z')?.key3).to.equal('none')
  })
  
  it ('should tollerate none existing keys', () => {
    const ourArray = JSON.parse(JSON.stringify(testArray)) as TA[]
    aaui(ourArray, [
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
    ], ['key1', 'key2', 'key4'])
    expect(ourArray.length).to.equal(6)
    expect(ourArray.find(a => a.key1 === 1 && a.key2 === 'a')?.key3).to.equal('uno')
    expect(ourArray.find(a => a.key1 === 5 && a.key2 === 'd')?.key3).to.equal('five')
    expect(ourArray.find(a => a.key1 === 1 && a.key2 === 'z')?.key3).to.equal('none')
  })

  it ('should work with compare function', () => {
    const ourArray = JSON.parse(JSON.stringify(testArray)) as TA[]
    aaui(ourArray, [
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
    ], [], (a, b) => a.key1 === b.key1 && a.key2 === b.key2)
    expect(ourArray.length).to.equal(6)
    expect(ourArray.find(a => a.key1 === 1 && a.key2 === 'a')?.key3).to.equal('uno')
    expect(ourArray.find(a => a.key1 === 5 && a.key2 === 'd')?.key3).to.equal('five')
    expect(ourArray.find(a => a.key1 === 1 && a.key2 === 'z')?.key3).to.equal('none')
  })
  
})
