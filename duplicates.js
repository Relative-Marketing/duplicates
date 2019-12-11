const validateArrayContents = arr => !arr.find(item => !['string', 'number'].includes(typeof item) )

export const validateArguments = (...args) => {
  for (let i = 0; i < args.length; i++) {
    if (!Array.isArray(args[i])) {
      throw new Error("Arguments should be arrays")
    }

    if (!validateArrayContents([...args[i]])) {
      throw new Error("Items of passed arrays should all be strings")
    }
  }

  return true
}

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
  validateArguments
}
