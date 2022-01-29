import pickBy from 'lodash/pickBy';

export function ExcludeNullish<T>(arg: T | null | undefined): arg is T {
  return arg != null;
}