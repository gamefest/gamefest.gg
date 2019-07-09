export function isNil(object) {
  return object == null;
}

export function isDefined(object) {
  return !isNil(object);
}
