import Strip from "./strip"
import { validateArguments } from "./utils"

export const find = (...args) => {
  validateArguments(...args)

  const cache = []
  const duplicates = []

  args.forEach(arr => {
    arr.forEach(item => {
      cache.includes(item) && !duplicates.includes(item)
        ? duplicates.push(item)
        : cache.push(item)
    })
  })

  return duplicates
}

export const remove = (...args) => {
  validateArguments(...args)

  const duplicates = find(...args)

  return [].concat(...args).filter(item => !duplicates.includes(item))
}

export default {
  find,
  remove,
  strip: new Strip(),
  validateArguments
}
