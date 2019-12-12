import duplicates, { find, remove } from "./duplicates"
import { validateArguments } from "./utils"

describe("duplicates.validateArguments()", () => {
  it("Arguments should only accept arrays", () => {
    expect(() => {
      validateArguments("astring", "bstring")
    }).toThrow()

    expect(() => {
      validateArguments(1, 2)
    }).toThrow()

    expect(() => {
      validateArguments([], "abc")
    }).toThrow()

    expect(() => {
      validateArguments("abc", [])
    }).toThrow()
  })

  it("Argument contents should be strings or numbers only", () => {
    expect(() => {
      find([[], {}], [{}])
    }).toThrow()

    expect(() => {
      find(["one"], [{}])
    }).toThrow()
  })
})

describe("duplicates.find()", () => {
  it("should be an empty array when no matches are found", () => {
    expect(find([], [])).toEqual([])
    expect(find(["one"], ["two"])).toEqual([])
  })

  it("should return duplicates", () => {
    expect(find(["one"], ["one"])).toEqual(["one"])
    expect(find(["one", "two"], ["one"])).toEqual(["one"])
    expect(find(["one"], ["one", "two"])).toEqual(["one"])
    expect(find(["one", "seven", "two"], ["one", "seven"])).toEqual([
      "one",
      "seven"
    ])
    expect(find([1, 2, 0], [1])).toEqual([1])
    expect(find([1, 2, 3], [2, 3])).toEqual([2, 3])
    expect(find([2], [2, 1, 3])).toEqual([2])
  })

  it("should work with any number of arguments", () => {
    expect(find([], [], [], [])).toEqual([])
    expect(find(["one"], ["one"], ["two"], ["one"])).toEqual(["one"])
    expect(find(["one"], ["two"], ["three"], ["four"])).toEqual([])
    expect(find(["one"], ["one"], ["two"], ["two"])).toEqual(["one", "two"])
  })
})

describe("duplicates.remove()", () => {
  it("should remove duplicates", () => {
    expect(remove(["one", "one"])).toEqual([])
  })
})

describe("duplicates", () => {
  it("should have a find method", () => {
    expect(typeof duplicates.find).toBe("function")
  })
  it("should have a remove method", () => {
    expect(typeof duplicates.remove).toBe("function")
  })
})

describe("duplicates.strip($unwanted).from($fullList)", () => {
  it("should take the full list and remove unwanted items", () => {
    expect(duplicates.strip.unwanted([1, 2]).from([1, 2, 3])).toEqual([3])
  })
})
