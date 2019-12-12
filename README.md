# Duplicates

This provides methods for working finding and removing duplicate items across arrays.

## duplicates.find()

Will return an array containing all values that exist more than once or an empty array if there are no duplicates.

Usage:

```
import duplicates from '@relativemarketing/duplicates'

const a = ['a', 'b', 'c', 'd']
const b = ['a', 'b']
const c = ['d', 'e', 'f']

duplicates.find(a, b, c) // ['a', 'b', 'd']
```

```
import { find } from '@relativemarketing/duplicates'

const a = ['a', 'b', 'c']
const b = ['a', 'b', 'd']

find(a, b) // ['a', 'b']
```

## duplicates.remove()

Will remove any items that appear more than once.

```
import duplicates from '@relativemarketing/duplicates'

const a = ['a', 'b', 'c', 'd']
const b = ['a', 'b']
const c = ['d', 'e', 'f']

duplicates.remove(a, b, c) // ['c', 'e', 'f']
```

```
import {remove} from '@relativemarketing/duplicates'

const a = ['a', 'b', 'c', 'd']
const b = ['a', 'b']
const b = ['d', 'e', 'f']

remove(a, b, c) // ['c', 'e', 'f']
```

## duplicates.strip(unwantedItems).from(wantedItems)

Will strip all unwanted items from a list of wanted items

```
import duplicates from '@relativemarketing/duplicates'

duplicates.strip([1,2]).from([1,2,3]) // [3]
```
