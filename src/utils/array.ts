type SortOption<T> = {
  by: (item: T) => string | number
  reverse?: boolean
}

function _sortBy<T>(opts: SortOption<T>[], arr: T[]): T[] {
  return arr.sort((a, b) => {
    for (let index = 0; index < opts.length; index++) {
      const { by, reverse = false } = opts[index]

      if (by(a) < by(b)) return reverse ? 1 : -1
      if (by(a) > by(b)) return reverse ? -1 : 1
    }

    return 0
  })
}

/**
 * Sorts a list according to a list of comparators. This function is curried.
 *
 * @param SortOptions An array of comparator functions.
 * @param array The array to iterate over.
 */
export function sortBy<T>(opts: SortOption<T>[]) {
  return (arr: T[]) => _sortBy(opts, arr)
}

/**
 * Calls a defined callback function on each element of an array,
 * and returns an array that contains the results. This function is curried.
 * @param callbackfn The function invoked per iteration.
 * @param array The array to iterate over.
 */
export function map<T, U>(fun: (_: T) => U) {
  return (arr: T[]) => arr.map(fun)
}

/**
 * Returns the elements of an array that meet the condition
 * specified in a callback function. This function is curried.
 * @param callbackfn The function invoked per iteration.
 * @param array The array to iterate over.
 */
export function filter<T>(fun: (_: T) => boolean) {
  return (arr: T[]) => arr.filter(fun)
}

/**
 * Returns the elements of an array that meet the condition
 * specified in a callback function and refines type. This function is curried.
 * @param callbackfn The function invoked per iteration.
 * @param array The array to iterate over.
 */
export function filterTypeGuard<T, S extends T>(fun: (_: T) => _ is S) {
  return (arr: T[]) => arr.filter(fun)
}

/**
 * Calls the specified callback function for all the elements in an array.
 * The return value of the callback function is the accumulated result,
 * and is provided as an argument in the next call to the callback function.
 * This function is curried.
 * @param callbackfn The function invoked per iteration.
 * @param initialValue The initial value.
 * @param array The array to iterate over.
 */
export function reduce<T, U>(fun: (acc: U, current: T) => U, initialValue: U) {
  return (arr: T[]) => arr.reduce((acc, current) => fun(acc, current), initialValue)
}
