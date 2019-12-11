# Duplicates

This provides methods for working finding and removing duplicate items across arrays.

## duplicates.find()

Will return an array containing all values that exist more than once or an empty array if there are no duplicates.

Usage:

```
import duplicates from 'duplicates'

const a = ['a', 'b', 'c', 'd']
const b = ['a', 'b']
const b = ['d', 'e', 'f']

duplicates.find(a, b, c) // ['a', 'b', 'd']
```

```
import { find } from 'duplicates'

const a = ['a', 'b', 'c']
const b = ['a', 'b', 'd']

find(a, b) // ['a', 'b']
```

## duplicates.remove()

Will remove any items that appear more than once.

```
import duplicates from 'duplicates'

const a = ['a', 'b', 'c', 'd']
const b = ['a', 'b']
const b = ['d', 'e', 'f']

duplicates.remove('c', 'e', 'f') // ['a', 'b', 'd']
```

```
import {remove} from 'duplicates'

const a = ['a', 'b', 'c', 'd']
const b = ['a', 'b']
const b = ['d', 'e', 'f']

remove('c', 'e', 'f') // ['a', 'b', 'd']
```
