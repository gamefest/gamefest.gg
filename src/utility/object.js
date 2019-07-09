const identity = x => x;
export function invertMap(map, f = identity) {
  return Object.keys(map).reduce(function(acc, k) {
    acc[map[k]] = (acc[map[k]] || []).concat(f(k));
    return acc;
  }, {});
}
