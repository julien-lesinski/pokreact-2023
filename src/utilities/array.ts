/**
 * Returns a new array with the same elements as {@link array} excepted for the element at {@link index}.
 */
export function removeAt<T>(array: T[], index: number): T[] {
  const clone = Array.from(array);
  clone.splice(index, 1);
  return clone;
}