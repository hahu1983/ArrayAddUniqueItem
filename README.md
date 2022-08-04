# ArrayAddUniqueItem

The tools purpose is to add a list of objects to an array. An object is only added if it does not excist yet.
If it does excist, it will replace the object in the array.

This is done by either or both:

- A list of keys, which have to be identical. This could be an `id` or some other key (but it must be a value such as a number or a string!).
- A custom provided compare function

## How to install

```bash
npm i hahu1983/ArrayAddUniqueItem
```

## Methods / with Examples

First we have to import the tool. For this example we call it `aaui`:

```typescript
import aaui from 'array_add_unique_item'

const ourArray = [
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


```

### example with key-list

```typescript
    aaui(ourArray, [
      {
        key1: 1,
        key2: 'a',
        key3: 'uno',
        comment: 'this will replace the original since key1 and key2 do match'
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
```
  
### using a compare function

```typescript
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
```
