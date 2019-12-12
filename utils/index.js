export const validateArrayContents = arr =>
  !arr.find(item => !["string", "number"].includes(typeof item))

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
